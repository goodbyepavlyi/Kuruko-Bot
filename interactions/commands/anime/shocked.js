const { AutocompleteInteraction, CommandInteraction, Message, User } = require(`discord.js`);
const kawaiiapi = require(`../../utils/kawaiiapi.js`);
const { sendMessage } = require("../../utils/command.js");
const { SHOCKED } = require(`../../assets/messages.js`);

module.exports = {
    type: `command`,
    name: `shocked`,
    description: `Posts a shocked gif.`,
    options: [
        {
            type: 3,
            name: `text`,
            description: `Text to be shown.`
        }
    ],
    id: `anime`,

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
        const text = interaction.options.getString(`text`) || ``;
        const { user } = interaction;

        await this.run(interaction, user, text);
    },
    
    /**
     * @param {Message} message 
     * @param {string[]} arguments 
     */
    async runMessage(message, arguments) {
        const text = arguments.join(` `);
        const { author: user } = message;
        
        await this.run(message, user, text);
    },

    /**
     * @param {CommandInteraction | Message} source 
     * @param {User} user 
     * @param {string} text 
     */
	async run(source, user, text) {
        const image = await kawaiiapi(`gif`, `shocked`);

		return sendMessage(source, { embeds: [SHOCKED(user.username, text, image)] });
	},
};