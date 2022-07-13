const { Message } = require('discord.js');
const { GUILD_ONLY, USER_NOT_IN_VOICE_CHANNEL, USER_NOT_IN_SAME_VOICE_CHANNEL } = require('../assets/messages.js');
const reportError = require('../utils/errorReporting.js');
const { log } = require('../utils/logger.js');

module.exports = {
    name: 'messageCreate',

    /**
     * @param {Message} message 
     */
    async run(message) {
        const { client, guild, channel, author: user, member, content, partial } = message;

        if (user.bot) return;
        if (channel.partial) await message.channel.fetch();
        if (partial) await message.fetch();

        const prefixRegex = new RegExp(`^(<@!?${client.user.id}>|${client.prefix})\\s*`);
        const prefix = content.match(prefixRegex);
        if (!prefix) return;

        const arguments = content.replace(prefixRegex, '').trim().split(/ +/g);
        const commandName = arguments.shift().toLowerCase() || `help`;

        const command = client.interactions.command.find(command => command.name == commandName);
        if (!command) return;
        
        try {
            log('User Action', `'${user.tag}' (${user.id}) executed command '${commandName}'`, `green`);

            if (command.guildOnly && !guild?.id) return message.reply({ embeds: [GUILD_ONLY] })
            if (command.voiceChannel && !member.voice.channel) return message.reply({ embeds: [USER_NOT_IN_VOICE_CHANNEL] })
            if (command.voiceChannel && guild.me.voice.channel && member.voice.channel.id !== guild.me.voice.channel.id) return message.reply({ embeds: [USER_NOT_IN_SAME_VOICE_CHANNEL] })

            return await command.runMessage(message, arguments);
        } catch (error) {
            const response = await reportError(client, user, error, 'Message Command', commandName);
            return message.reply(response);
        }
    },
};
