const { AutocompleteInteraction, CommandInteraction, Message, GuildMember, Channel, Permissions } = require(`discord.js`);
const { QueryType } = require('discord-player');
const { PLAY_SEARCHING, PLAY_NO_RESULTS, PLAY_JOINING_VOICE_CHANNEL, PLAY_CANT_JOIN_VOICE_CHANNEL, PLAY_PLAYLIST, PLAY_TRACK } = require('../../../assets/messages.js');
const player = require(`../../../utils/musicPlayer.js`);
const { sendMessage, editMessage } = require(`../../../utils/command.js`);

/**
 * @param {number} duration 
 */
const durationFormat = (duration) => {
    const hours = Math.floor(duration / 3600);
    const minutes = Math.floor((duration % 3600) / 60);
    const seconds = Math.floor(duration % 60);

    let result = ``;

    if (hours > 0) result += `${hours}:${minutes < 10 ? 0 : ``}`;

    result += `${minutes}:${seconds < 10 ? 0 : ``}`;
    result += `${seconds}`;

    return result
}

module.exports = {
    type: `command`,
    name: `play`,
    description: `Add a song to the queue and play it.`,
    options: [
        {
            type: 3,
            name: `song`,
            description: `The song\'s name or its link.`,
            required: true,
        }
    ],
    id: `music`,
    guildOnly: true,
    voiceChannel: true,

    /**
     * @param {AutocompleteInteraction} interaction 
     */
    async autocomplete(interaction) {
        const choices = [];
        return choices;
    },

    /**
     * @param {CommandInteraction} interaction 
     */
    async runInteraction(interaction) {
        const songQuery = interaction.options.getString(`song`);
        const { client, guild, member, channel } = interaction;

        await this.run(interaction, client, guild, member, channel, songQuery);
    },
    
    /**
     * @param {Message} message 
     * @param {string[]} arguments 
     */
    async runMessage(message, arguments) {
        const songQuery = arguments.join(` `);
        const { client, guild, member, channel } = message;

        await this.run(message, client, guild, member, channel, songQuery);
    },

    /**
     * @param {CommandInteraction | Message} source
     * @param {Client} client
     * @param {Guild} guild
     * @param {GuildMember} member
     * @param {Channel} channel
     * @param {string} songQuery
     */
	async run(source, client, guild, member, channel, songQuery) {
		if (!songQuery) return sendMessage(source, { embeds: [PLAY_NO_RESULTS] });

        const botMessage = await sendMessage(source, { embeds: [PLAY_SEARCHING(songQuery)] });

        const result = await player.search(songQuery, { requestedBy: member, searchEngine: QueryType.AUTO });
		if (!result || !result.tracks.length) return editMessage(botMessage, { embeds: [PLAY_NO_RESULTS] });

		const queue = player.createQueue(guild, {
			leaveOnEnd: true,
			leaveOnStop: true,
			leaveOnEmpty: true,
			volumeSmoothness: false,
			initialVolume: 25,
            metadata: channel,
		});

		try {
            if (!queue.connection) {
                const voiceChannel = member.voice.channel;
                if (!voiceChannel.permissionsFor(guild.me).has(Permissions.FLAGS.CONNECT)) throw Error(`Bot doesn't have permissions to join voice channel!`);

                await editMessage(botMessage, { embeds: [PLAY_JOINING_VOICE_CHANNEL] });
                await queue.connect(voiceChannel);
            }
        } catch(error) {
			player.deleteQueue(guild.id)
            return editMessage(botMessage, { embeds: [PLAY_CANT_JOIN_VOICE_CHANNEL] });
        }

        if (result.playlist) {
            queue.addTracks(result.tracks);
            const duration = durationFormat(result.tracks.map(track => Math.floor(track.durationMS / 1000)).reduce((a, b) => a + b, 0));

            await editMessage(botMessage, { embeds: [PLAY_PLAYLIST(member.user, result.playlist.title, result.playlist.url, duration, result.playlist.thumbnail.url || result.tracks[0].thumbnail)] });
        } else {
            const song = result.tracks[0];
            queue.addTrack(song);

            await editMessage(botMessage, { embeds: [PLAY_TRACK(member.user, song.title, song.url, song.duration, song.thumbnail)] });
        }

        if (!queue.playing) await queue.play();
	},
};