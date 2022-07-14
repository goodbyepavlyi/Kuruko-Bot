const { AutocompleteInteraction, CommandInteraction, Message } = require(`discord.js`);
const player = require(`../../../utils/musicPlayer.js`);
const { sendMessage } = require(`../../../utils/command.js`);
const { NO_MUSIC_PLAYING, STOP } = require("../../../assets/messages.js");

module.exports = {
    type: `command`,
    name: `stop`,
    description: `Destroys the queue.`,
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

        const success = await queue.destroy();
		return sendMessage(source, { embeds: [STOP] });
	},
};