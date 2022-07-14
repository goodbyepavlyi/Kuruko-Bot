const { AutocompleteInteraction, CommandInteraction, Message } = require(`discord.js`);
const { SKIP, NO_MUSIC_PLAYING } = require("../../../assets/messages.js");
const player = require(`../../../utils/musicPlayer.js`);
const { sendMessage } = require(`../../../utils/command.js`);

module.exports = {
    type: `command`,
    name: `skip`,
    description: `Skips the current song.`,
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

		const track = queue.current;
        const success = await queue.skip();

		return sendMessage(source, { embeds: [SKIP(track.title)] });
	},
};