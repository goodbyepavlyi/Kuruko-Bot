const { AutocompleteInteraction, CommandInteraction, Message, Client, User } = require(`discord.js`);
const { NOWPLAYING_INFORMATION, NO_MUSIC_PLAYING } = require("../../../assets/messages.js");
const player = require(`../../../utils/musicPlayer.js`);
const { sendMessage } = require(`../../../utils/command.js`);

module.exports = {
    type: `command`,
    name: `nowplaying`,
    description: `Shows progress of the song that is currently playing.`,
    options: [],
    id: `music`,
    guildOnly: true,

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
        const { guild, user } = interaction;
        await this.run(interaction, guild, user);
    },
    
    /**
     * @param {Message} message 
     * @param {string[]} arguments 
     */
    async runMessage(message, arguments) {
        const { guild, user } = message;
        await this.run(message, guild, user);
    },

    /**
     * @param {CommandInteraction | Message} source
     * @param {Guild} guild
     * @param {User} user
     */
	async run(source, guild, user) {
        const queue = player.getQueue(guild.id);
		if (!queue || !queue.playing) return sendMessage(source, { embeds: [NO_MUSIC_PLAYING] });

		const track = queue.current;
        const timestamp = queue.getPlayerTimestamp();
        const trackDuration = timestamp.progress == 'Infinity' ? 'Infinity (Live)' : track.duration;

		return sendMessage(source, { embeds: [NOWPLAYING_INFORMATION(track.thumbnail, track.title, queue.volume, trackDuration, queue.repeatMode, track.requestedBy)] });
	},
};