const { AutocompleteInteraction, CommandInteraction, Message } = require(`discord.js`);
const { BUNNY } = require(`../../../assets/messages.js`);
const { bunny } = require(`../../../utils/animalApi.js`);
const { sendMessage } = require(`../../../utils/command.js`);

module.exports = {
    type: `command`,
    name: `bunny`,
    description: `Sends a random bunny picture.`,
    options: [],
    id: `animals`,

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
        await this.run(interaction);
    },
    
    /**
     * @param {Message} message 
     * @param {string[]} arguments 
     */
    async runMessage(message, arguments) {
        await this.run(message);
    },

    /**
     * @param {CommandInteraction | Message} source 
     */
	async run(source) {
        const image = await bunny();

        return sendMessage(source, { embeds: [BUNNY(image)] });
	},
};