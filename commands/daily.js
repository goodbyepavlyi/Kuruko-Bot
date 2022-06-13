/*
	*IMPORTING NODE CLASSES
*/
const { Client, CommandInteraction, User, GuildMember, Guild, Channel } = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders');

/*
	*IMPORTING FILES
*/
const config = require('../config.json');
const messages = require('../assets/messages');
const { getBalance, getTimeout, addBalance, setTimeout } = require('../classes/User');
const { seconds } = require('../classes/Format');

const timeout = 86400;
const reward = 250;

module.exports = {
	data: new SlashCommandBuilder()
		.setName('daily')
		.setDescription('Get daily coins.'),

	cooldown: 3,
	id: 'economy',

	/**
	 * @param {Client} client
	 * @param {CommandInteraction} interaction
	 * @param {User} user
	 * @param {GuildMember} guildMember
	 * @param {Guild} guild
	 * @param {Channel} channel
	*/
	async execute(client, interaction, user, guildMember, guild, channel) {
		const userTimeout = await getTimeout(user.id, 'reward_daily');
		const timeNow = Date.now() / 1000;

		if (userTimeout && timeout - (timeNow - userTimeout) > 0) {
			let time = seconds(timeout - (timeNow - userTimeout));

			let content = messages.COMMANDS_DAILY_ALREADY_CLAIMED.replaceAll('{time}', time);
			return interaction.editReply({ content });
		}

		await setTimeout(user.id, 'reward_daily', timeNow);
		await addBalance(user.id, reward);

		let balance = await getBalance(user.id);
		let content = messages.COMMANDS_DAILY_CLAIMED.replaceAll('{emoji}', config.bot.emojis.coins).replaceAll('{reward}', reward).replaceAll('{balance}', balance);
		return interaction.editReply({ content });
	}
};
