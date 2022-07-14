const { AutocompleteInteraction, CommandInteraction, Message } = require(`discord.js`);
const ms = require(`ms`);
const { NO_MUSIC_PLAYING, SEEK, SEEK_INVALID_TIME } = require("../../../assets/messages.js");
const player = require(`../../../utils/musicPlayer.js`);
const { sendMessage } = require(`../../../utils/command.js`);
    
module.exports = {
    type: `command`,
    name: `seek`,
    description: `Seeks to a certain position in the current song.`,
    options: [
        {
            type: 3,
            name: `position`,
            description: `Seek to a certain position.`,
            required: true,
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
        const userPosition = interaction.options.getString(`position`);
        const { guild } = interaction;

        await this.run(interaction, guild, userPosition);
    },
    
    /**
     * @param {Message} message 
     * @param {string[]} arguments 
     */
    async runMessage(message, arguments) {
        const [ userPosition ] = arguments;
        const { guild } = message;

        await this.run(message, guild, userPosition);
    },

    /**
     * @param {CommandInteraction | Message} source
     * @param {Guild} guild
     * @param {string} userPosition
     */
	async run(source, guild, userPosition) {
        const queue = player.getQueue(guild.id);
		if (!queue || !queue.playing) return sendMessage(source, { embeds: [NO_MUSIC_PLAYING] });

        const timeInMS = ms(userPosition)
        console.log(isNaN(timeInMS), !timeInMS, userPosition)
        if (isNaN(timeInMS) || timeInMS >= queue.current.durationMS) return sendMessage(source, { embeds: [SEEK_INVALID_TIME] });

        const success = await queue.seek(timeInMS);
		return sendMessage(source, { embeds: [SEEK(ms(timeInMS, { long: true }))] });
	},
};