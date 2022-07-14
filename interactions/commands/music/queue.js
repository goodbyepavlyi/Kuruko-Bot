const { AutocompleteInteraction, CommandInteraction, Message, MessageEmbed, Client } = require(`discord.js`);
const { NO_MUSIC_PLAYING, QUEUE_SONG_FORMAT, QUEUE_FOOTER, QUEUE_TITLE, QUEUE_CURRENT_PLAYING, QUEUE, NOT_ENOUGH_SONGS } = require("../../../assets/messages.js");
const player = require(`../../../utils/musicPlayer.js`);
const { sendMessage } = require(`../../../utils/command.js`);

module.exports = {
    type: `command`,
    name: `queue`,
    description: `Displays the queue of the current tracks.`,
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
		if (!queue) return sendMessage(source, { embeds: [NO_MUSIC_PLAYING] });
        if (!queue.tracks[0]) return sendMessage(source, { embeds: [NOT_ENOUGH_SONGS] });

		return sendMessage(source, { embeds: [QUEUE(queue.repeatMode, queue.current, queue.getPlayerTimestamp().current, queue.tracks)] });
	},
};