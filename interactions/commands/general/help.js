const { AutocompleteInteraction, CommandInteraction, Message, MessageEmbed, Client, MessageActionRow, MessageButton } = require(`discord.js`);
const ms = require(`ms`);
const { HELP_FOOTER, HELP_ABOUT_TITLE, HELP_ABOUT_DESCRIPTION, HELP_BUTTON_WEBSITE, HELP_BUTTON_INVITE, HELP_BUTTON_VOTE } = require(`../../../assets/messages.js`);

module.exports = {
    type: `command`,
    name: `help`,
    description: `Get some help.`,
    options: [],

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
        const response = await this.run(client);
        return interaction.reply(response);
    },
    
    /**
     * @param {Message} message 
     * @param {string[]} arguments 
     */
    async runMessage(message, arguments) {
        const { client } = message;
        const response = await this.run(client);
        return message.reply(response);
    },

    /**
     * @param {CommandInteraction | Message} source 
     */
	async run(source) {
        const uptime = ms(client.uptime);
        const developer = await client.users.fetch(client.ownerId)

        const helpEmbed = new MessageEmbed()
            .setColor(client.accentColor)
            .setThumbnail(client.user.displayAvatarURL())
            .setFooter({
                text: HELP_FOOTER.replaceAll(`{uptime}`, uptime),
            })
            .addField(HELP_ABOUT_TITLE, HELP_ABOUT_DESCRIPTION.replaceAll(`{developer}`, developer.tag));
        
        const helpButtons = new MessageActionRow().addComponents(
            new MessageButton()
                .setStyle(`LINK`)
                .setURL(client.baseUrl)
                .setLabel(HELP_BUTTON_WEBSITE),
            new MessageButton()
                .setStyle(`LINK`)
                .setURL(`${client.baseUrl}/go/botinvite`)
                .setLabel(HELP_BUTTON_INVITE),
            new MessageButton()
                .setStyle(`LINK`)
                .setURL(`${client.baseUrl}/go/vote`)
                .setLabel(HELP_BUTTON_VOTE),
        );

		return { embeds: [helpEmbed], components: [helpButtons] };
	},
};