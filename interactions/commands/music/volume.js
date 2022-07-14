const { AutocompleteInteraction, CommandInteraction, Message } = require(`discord.js`);
const player = require(`../../../utils/musicPlayer.js`);
const { sendMessage } = require(`../../../utils/command.js`);
const { VOLUME_USAGE, VOLUME_SET } = require("../../../assets/messages.js");

module.exports = {
    type: `command`,
    name: `volume`,
    description: `Displays the current volume or changes it.`,
    options: [
        {
            type: 4,
            name: `amount`,
            description: `Enter volume from 0 to 100.`,
        }
    ],
    id: `music`,
    guildOnly: true,
    voiceChannel: true,

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
        const amount = interaction.options.getInteger(`amount`);
        const { guild } = interaction;

        await this.run(interaction, guild, amount);
    },
    
    /**
     * @param {Message} message 
     * @param {string[]} arguments 
     */
    async runMessage(message, arguments) {
        const amount = parseInt(arguments[0]);
        const { guild } = message;

        await this.run(message, guild, amount);

    },

    /**
     * @param {CommandInteraction | Message} source
     * @param {Guild} guild
     * @param {number} volume
     */
	async run(source, guild, volume) {
        const queue = player.getQueue(guild.id);
		if (!queue || !queue.playing) return sendMessage(source, { embeds: [NO_MUSIC_PLAYING] });
		if (isNaN(volume)) return sendMessage(source, { embeds: [VOLUME_CURRENT(queue.volume)] });
        if (volume < 0 || volume > 100) return sendMessage(source, { embeds: [VOLUME_USAGE] });

        const success = await queue.setVolume(volume);
        return sendMessage(source, { embeds: [VOLUME_SET(queue.volume)] })
    },
};