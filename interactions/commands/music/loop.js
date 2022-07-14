const { AutocompleteInteraction, CommandInteraction, Message } = require(`discord.js`);
const { QueueRepeatMode } = require('discord-player');
const player = require(`../../../utils/musicPlayer.js`);
const { NO_MUSIC_PLAYING, LOOP_EMBED, LOOP_INVALID_MODE } = require('../../../assets/messages.js');
const { sendMessage } = require(`../../../utils/command.js`);

module.exports = {
    type: `command`,
    name: `loop`,
    description: `Toggles loop mode.`,
    options: [
        {
            type: 3,
            name: `mode`,
            description: `Select the repeat mode`,
            required: true,
            choices: [
                {
                    name: `Off`,
                    value: `off`,
                },
                {
                    name: `Track`,
                    value: `track`,
                },
                {
                    name: `Queue`,
                    value: `queue`,
                },
            ],
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
        const mode = interaction.options.getString(`mode`);
        const { guild } = interaction;

        await this.run(interaction, guild, mode);
    },
    
    /**
     * @param {Message} message 
     * @param {string[]} arguments 
     */
    async runMessage(message, arguments) {
        const [ mode ] = arguments;
        const { guild } = message;
        
        await this.run(message, guild, mode);
    },

    /**
     * @param {CommandInteraction | Message} source
     * @param {Guild} guild
     * @param {string} mode
     */
	async run(source, guild, mode) {
        const queue = player.getQueue(guild.id);
		if (!queue || !queue.playing) return sendMessage(source, { embeds: [NO_MUSIC_PLAYING] });

        const repeatMode = QueueRepeatMode[(mode || ``).toUpperCase()];
        if (isNaN(repeatMode)) return sendMessage(source, { embeds: [LOOP_INVALID_MODE] });

		queue.setRepeatMode(repeatMode);
		return sendMessage(source, { embeds: [LOOP_EMBED(mode.toLowerCase())] });
	},
};