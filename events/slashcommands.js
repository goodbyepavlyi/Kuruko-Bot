const { CommandInteraction } = require('discord.js');
const { GUILD_ONLY, USER_NOT_IN_VOICE_CHANNEL, USER_NOT_IN_SAME_VOICE_CHANNEL } = require('../assets/messages.js');
const reportError = require('../utils/errorReporting.js');
const { log } = require('../utils/logger.js');

module.exports = {
    name: 'interactionCreate',

    /**
     * @param {CommandInteraction} interaction
     */
    async run(interaction) {
        if (!interaction.isCommand()) return;

        const { client, guild, user, member, commandName } = interaction;
        if (user.bot) return;

        const command = client.interactions.command.find(command => command.name == commandName);
        if (!command) return;

        try {
            log('User Action', `'${user.tag}' (${user.id}) executed command '${commandName}'`, `green`);

            if (command.guildOnly && !guild?.id) return message.reply({ embeds: [GUILD_ONLY] })
            if (command.voiceChannel && !member.voice.channel) return message.reply({ embeds: [USER_NOT_IN_VOICE_CHANNEL] })
            if (command.voiceChannel && guild.me.voice.channel && member.voice.channel.id !== guild.me.voice.channel.id) return message.reply({ embeds: [USER_NOT_IN_SAME_VOICE_CHANNEL] })
    
            return await command.runInteraction(interaction);
        } catch (error) {
            const response = await reportError(client, user, error, 'Interaction Command', commandName);
            return interaction.reply(response);
        }
    },
};
