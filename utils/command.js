const { CommandInteraction, Message } = require("discord.js");

module.exports = {
    /**
     * @param {CommandInteraction | Message} source 
     * @param {object} response 
     * @returns {Promise<Message>}
     */
    sendMessage: async (source, response) => {
        response.fetchReply = true;

        if (source instanceof Message) return source.channel.send(response);
        return source.reply(response);
    },

    /**
     * @param {CommandInteraction | Message} source 
     * @param {object} response 
     * @returns {Promise<Message>}
     */
    editMessage: async (source, response) => {
        response.fetchReply = true;
        return source instanceof Message ? source.edit(response) : source.editReply(response);
    },

    /**
     * @returns {boolean}
     */
    isMessage: (source) => source instanceof Message,
}