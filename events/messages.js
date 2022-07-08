const { Message } = require('discord.js');
const reportError = require('../utils/errorReporting.js');
const { log } = require('../utils/logger.js');

module.exports = {
    name: 'messageCreate',

    /**
     * @param {Message} message 
     */
    async run(message) {
        const { client, channel, author: user, content, partial } = message;

        if (user.bot) return;
        if (channel.partial) await message.channel.fetch();
        if (partial) await message.fetch();

        const prefixRegex = new RegExp(`^(${client.prefix}|<@!?${client.user.id}>)`);
        const prefix = content.match(prefixRegex);
        if (!prefix) return;

        const arguments = content.replace(prefixRegex, '').trim().split(/ +/g);
        const commandName = arguments.shift().toLowerCase() || `help`;

        const command = client.interactions.command.find(command => command.name == commandName);
        if (!command) return;

        try {
            log('User Action', `'${user.tag}' (${user.id}) executed command '${commandName}'`, `green`);
            return await command.runMessage(message, arguments);
        } catch (error) {
            const errorEmbed = await reportError(client, user, error, 'Message Command', commandName);
            return message.reply({ embeds: [errorEmbed] });
        }
    },
};
