const { AutocompleteInteraction, CommandInteraction, Message } = require(`discord.js`);
const { PREVIOUS, NO_MUSIC_PLAYING, NO_MUSIC_PLAYED_BEFORE } = require("../../../assets/messages.js");
const player = require(`../../../utils/musicPlayer.js`);
const { sendMessage } = require(`../../../utils/command.js`);

module.exports = {
    type: `command`,
    name: `previous`,
    description: `Plays the previous song.`,
    options: [],
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
        const { guild } = interaction;
        await this.run(interaction, guild);
    },
    
    /**
     * @param {Message} message 
     * @param {string[]} arguments 
     */
    async runMessage(message, arguments) {
        const { guild } = message;
        await this.run(message, guild);
    },

    /**
     * @param {CommandInteraction | Message} source
     * @param {Guild} guild
     */
	async run(source, guild) {
        const queue = player.getQueue(guild.id);
		if (!queue || !queue.playing) return sendMessage(source, { embeds: [NO_MUSIC_PLAYING] });
        if (!queue.previousTracks[1]) return sendMessage(source, { embeds: [NO_MUSIC_PLAYED_BEFORE] });

        const success = await queue.back();
		return sendMessage(source, { embeds: [PREVIOUS] });
	},
};