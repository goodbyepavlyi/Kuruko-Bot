const { AutocompleteInteraction, CommandInteraction, Message } = require(`discord.js`);
const player = require(`../../../utils/musicPlayer.js`);
const { sendMessage } = require(`../../../utils/command.js`);
const { NO_MUSIC_PLAYING, NOT_ENOUGH_SONGS, SHUFFLE } = require("../../../assets/messages.js");

module.exports = {
    type: `command`,
    name: `shuffle`,
    description: `Shuffles the queue.`,
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
        if (!queue.tracks[0]) return sendMessage(source, { embeds: [NOT_ENOUGH_SONGS] });

        const success = await queue.shuffle();
		return sendMessage(source, { embeds: [SHUFFLE(queue.tracks.length)] });
	},
};