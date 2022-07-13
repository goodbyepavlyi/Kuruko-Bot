const { AutocompleteInteraction, CommandInteraction, Message } = require(`discord.js`);
const { PANDA } = require(`../../../assets/messages.js`);
const { panda } = require(`../../../utils/animalApi.js`);
const { sendMessage } = require(`../../../utils/command.js`);

module.exports = {
    type: `command`,
    name: `panda`,
    description: `Sends a random panda picture.`,
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
        const image = await panda();

        return sendMessage(source, { embeds: [PANDA(image)] });
	},
};