const { MessageEmbed, Client, User, Guild, Message } = require('discord.js');
const { ERROR_TITLE, ERROR_DESCRIPTION } = require('../assets/messages.js');
const { log } = require('./logger');

/**
 * @param {Client} client 
 * @param {User} executor 
 * @param {Error} error 
 * @param {string} action 
 * @param {string} actionName
 * @param {boolean} reportError 
 * @returns {Promise<MessageEmbed>} Returns the error embed
 */
function createEmbed(client, executor, error, action, actionName, reportError = true) {
    return new Promise(async (resolve, reject) => {
        const id = Math.floor(Math.random() * (999999 - 100000 + 1) + 100000);
    
        const errorEmbed = new MessageEmbed()
            .setColor(client.accentColor)
            .setURL(`${client.repositoryUrl}/issues/new?template=bug_report.md`)
            .setTitle(ERROR_TITLE.replaceAll(`{id}`, id))
            .setDescription(ERROR_DESCRIPTION);
    
        log('Error', error, 'red');
    
        if (reportError) await report(client, executor, error, id, action, actionName).catch(() => log('Error', 'Failed to report error to Discord Server!', 'red'));
        resolve(errorEmbed);
    })
};

/**
 * @param {Client} client 
 * @param {User} executor 
 * @param {Error} error 
 * @param {number} id 
 * @param {string} action 
 * @param {string} actionName 
 * @returns {Promise<Message>} Returns the error embed
 */
function report(client, executor, error, id, action, actionName) {
    return new Promise(async (resolve, reject) => {
        const reportEmbed = new MessageEmbed()
            .setColor(client.accentColor)
            .setAuthor({
                name: executor.tag,
                iconURL: executor.displayAvatarURL()
            })
            .setTitle(`Error #${id}`)
            .addField('Action', action, true)
            .addField('Name', actionName, true)
            .addField('Executor', `${executor.tag} \`${executor.id}\``)
            .setThumbnail(executor.avatarURL({ dynamic: true }))
            .setTimestamp()
            .setDescription(error.stack.length >= 4096 ? `\`\`\`${error}\`\`\`` : `\`\`\`${error.stack}\`\`\``);
    
        const server = await client.guilds.fetch(client.supportServerId);
        const channel = await server.channels.fetch(client.supportServerChannels.botErrors);
    
        resolve(channel.send({ embeds: [reportEmbed] }));
    })
};

module.exports = createEmbed;