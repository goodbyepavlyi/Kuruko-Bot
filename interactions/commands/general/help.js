const { AutocompleteInteraction, CommandInteraction, Message, MessageEmbed, MessageActionRow, MessageButton, Client } = require(`discord.js`);
const { HELP, HELP_BUTTONS } = require(`../../../assets/messages.js`);
const { sendMessage } = require(`../../../utils/command.js`);
const ms = require(`ms`);

module.exports = {
    type: `command`,
    name: `help`,
    description: `Let me introduce myself in a few words.`,
    options: [],
    id: `general`,

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
        const { client } = interaction;
        await this.run(interaction, client);
    },
    
    /**
     * @param {Message} message 
     * @param {string[]} arguments 
     */
    async runMessage(message, arguments) {
        const { client } = message;
        await this.run(message, client);
    },

    /**
     * @param {CommandInteraction | Message} source 
     * @param {Client} client 
     */
	async run(source, client) {
        const uptime = ms(client.uptime);
        const developer = await client.users.fetch(client.ownerId)

		return sendMessage(source, { embeds: [HELP(client.user.displayAvatarURL(), uptime, developer.tag)], components: [HELP_BUTTONS] });
	},
};