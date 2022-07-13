const { MessageEmbed } = require("discord.js");
const client = require("../app");

module.exports = {
    FAILED:
        new MessageEmbed()
            .setColor(client.accentColor)
            .setTitle(`I am sorry, but I was not able to complete this task.`),
    GUILD_ONLY:
        new MessageEmbed()
            .setColor(client.accentColor)
            .setTitle(`Sorry, but this command can only be used in servers.`),
    USER_NOT_IN_VOICE_CHANNEL:
        new MessageEmbed()
            .setColor(client.accentColor)
            .setTitle(`You have to be in a voice channel!`),
    USER_NOT_IN_SAME_VOICE_CHANNEL:
        new MessageEmbed()
            .setColor(client.accentColor)
            .setTitle(`You have to be in the same voice channel as the bot!`),
    
    ERROR: (id) =>
        new MessageEmbed()
            .setColor(client.accentColor)
            .setURL(`${client.repositoryUrl}/issues/new?template=bug_report.md`)
            .setTitle(`Error #;${id}`)
            .setDescription(`During the processing of this action, an error occurred. It would be appreciated if you would report this error on our Github page.`),

            
    BUNNY: (image) =>
        new MessageEmbed()
            .setColor(client.accentColor)
            .setTitle(`Bunny 🐰`)
            .setImage(image),
    CAT: (image) =>
        new MessageEmbed()
            .setColor(client.accentColor)
            .setTitle(`Cat 🐱`)
            .setImage(image),
    DOG: (image) =>
        new MessageEmbed()
            .setColor(client.accentColor)
            .setTitle(`Dog 🐶`)
            .setImage(image),
    DUCK: (image) =>
        new MessageEmbed()
            .setColor(client.accentColor)
            .setTitle(`Duck 🦆`)
            .setImage(image),
    FOX: (image) =>
        new MessageEmbed()
            .setColor(client.accentColor)
            .setTitle(`Fox 🦊`)
            .setImage(image),
    KANGAROO: (image) =>
        new MessageEmbed()
            .setColor(client.accentColor)
            .setTitle(`Kangaroo 🦘`)
            .setImage(image),
    KOALA: (image) =>
        new MessageEmbed()
            .setColor(client.accentColor)
            .setTitle(`Koala 🐨`)
            .setImage(image),
    LIZARD: (image) =>
        new MessageEmbed()
            .setColor(client.accentColor)
            .setTitle(`Lizard 🦎`)
            .setImage(image),
    PANDA: (image) =>
        new MessageEmbed()
            .setColor(client.accentColor)
            .setTitle(`Panda 🐼`)
            .setImage(image),
    RACCOON: (image) =>
        new MessageEmbed()
            .setColor(client.accentColor)
            .setTitle(`Raccoon 🦝`)
            .setImage(image),

    HELP_FOOTER: "Online for {uptime}",
    HELP_ABOUT_TITLE: "About Kuruko",
    HELP_ABOUT_DESCRIPTION: "I'm developed by `{developer}`.\n**Kuruko** was designed to be a **simple** bot with many **interesting features**.",
    HELP_BUTTON_WEBSITE: "Website",
    HELP_BUTTON_INVITE: "Add Kuruko",
    HELP_BUTTON_VOTE: "Vote",
};