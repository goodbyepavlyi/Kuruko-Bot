const { MessageEmbed, Client, User, Message, MessageAttachment } = require(`discord.js`);
const { ERROR } = require(`../assets/messages.js`);
const { log } = require(`./logger`);

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
    return new Promise(async (resolve) => {
        const id = Math.floor(Math.random() * (999999 - 100000 + 1) + 100000);
    
        log(`Error`, error.stack, `red`);
    
        if (reportError) await report(client, executor, error, id, action, actionName).catch((error) => log(`Error`, `Failed to report error to Discord Server! ${error.stack}`, `red`));
        resolve({ embeds: [ERROR(id)] });
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
    return new Promise(async (resolve) => {
        const reportEmbed = new MessageEmbed()
            .setColor(client.accentColor)
            .setAuthor({
                name: executor.tag,
                iconURL: executor.displayAvatarURL()
            })
            .setTitle(`Error #${id}`)
            .addField(`Action`, `\`${action}\``, true)
            .addField(`Name`, `\`${actionName}\``, true)
            .addField(`Executor`, `**${executor.tag}** \`${executor.id}\``)
            .setTimestamp()
    
        const server = await client.guilds.fetch(client.supportServerId);
        const channel = await server.channels.fetch(client.supportServerChannels.botErrors);
    
        const errorFile = new MessageAttachment(Buffer.from(error.stack), `stack.txt`);
        resolve(channel.send({ embeds: [reportEmbed], files: [errorFile] }));
    })
};

module.exports = createEmbed;