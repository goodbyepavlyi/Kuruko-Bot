const { AutocompleteInteraction, CommandInteraction, Message } = require(`discord.js`);
const { FOX } = require(`../../assets/messages.js`);
const { fox } = require(`../../utils/animalApi.js`);
const { sendMessage } = require(`../../utils/command.js`);

module.exports = {
    type: `command`,
    name: `fox`,
    description: `Sends a random fox picture.`,
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
        const image = await fox();

        return sendMessage(source, { embeds: [FOX(image)] });
	},
};