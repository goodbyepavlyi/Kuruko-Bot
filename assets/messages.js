const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");
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
            .setTitle(`Error #${id}`)
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

    BITE: (username, text, image) =>
        new MessageEmbed()
            .setColor(client.accentColor)
            .setDescription(`**${username}** bites ${text}`)
            .setImage(image),
    BLUSH: (username, text, image) =>
        new MessageEmbed()
            .setColor(client.accentColor)
            .setDescription(`**${username}** blushes ${text}`)
            .setImage(image),
    BOOP: (username, text, image) =>
        new MessageEmbed()
            .setColor(client.accentColor)
            .setDescription(`**${username}** nudges the nose of ${text}`)
            .setImage(image),
    CLAP: (username, text, image) =>
        new MessageEmbed()
            .setColor(client.accentColor)
            .setDescription(`**${username}** claps ${text}`)
            .setImage(image),
    CONFUSED: (username, text, image) =>
        new MessageEmbed()
            .setColor(client.accentColor)
            .setDescription(`**${username}** is confused ${text}`)
            .setImage(image),
    CRY: (username, text, image) =>
        new MessageEmbed()
            .setColor(client.accentColor)
            .setDescription(`**${username}** cries ${text}`)
            .setImage(image),
    CUDDLE: (username, text, image) =>
        new MessageEmbed()
            .setColor(client.accentColor)
            .setDescription(`**${username}** cuddles ${text}`)
            .setImage(image),
    DANCE: (username, text, image) =>
        new MessageEmbed()
            .setColor(client.accentColor)
            .setDescription(`**${username}** dances ${text}`)
            .setImage(image),
    DIE: (username, text, image) =>
        new MessageEmbed()
            .setColor(client.accentColor)
            .setDescription(`**${username}** dies ${text}`)
            .setImage(image),
    DODGE: (username, text, image) =>
        new MessageEmbed()
            .setColor(client.accentColor)
            .setDescription(`**${username}** dodges ${text}`)
            .setImage(image),
    FIGHT: (username, text, image) =>
        new MessageEmbed()
            .setColor(client.accentColor)
            .setDescription(`**${username}** fights ${text}`)
            .setImage(image),
    GLARE: (username, text, image) =>
        new MessageEmbed()
            .setColor(client.accentColor)
            .setDescription(`**${username}** glares ${text}`)
            .setImage(image),
    GREET: (username, text, image) =>
        new MessageEmbed()
            .setColor(client.accentColor)
            .setDescription(`**${username}** greets ${text}`)
            .setImage(image),
    HIDE: (username, text, image) =>
        new MessageEmbed()
            .setColor(client.accentColor)
            .setDescription(`**${username}** hides ${text}`)
            .setImage(image),
    HUG: (username, text, image) =>
        new MessageEmbed()
            .setColor(client.accentColor)
            .setDescription(`**${username}** hugs ${text}`)
            .setImage(image),
    KISS: (username, text, image) =>
        new MessageEmbed()
            .setColor(client.accentColor)
            .setDescription(`**${username}** kisses ${text}`)
            .setImage(image),
    LAUGH: (username, text, image) =>
        new MessageEmbed()
            .setColor(client.accentColor)
            .setDescription(`**${username}** laughs ${text}`)
            .setImage(image),
    PAT: (username, text, image) =>
        new MessageEmbed()
            .setColor(client.accentColor)
            .setDescription(`**${username}** pats ${text}`)
            .setImage(image),
    RUN: (username, text, image) =>
        new MessageEmbed()
            .setColor(client.accentColor)
            .setDescription(`**${username}** runs ${text}`)
            .setImage(image),
    SAD: (username, text, image) =>
        new MessageEmbed()
            .setColor(client.accentColor)
            .setDescription(`**${username}** feels sad ${text}`)
            .setImage(image),
    SHOCKED: (username, text, image) =>
        new MessageEmbed()
            .setColor(client.accentColor)
            .setDescription(`**${username}** feels shocked ${text}`)
            .setImage(image),
    SHY: (username, text, image) =>
        new MessageEmbed()
            .setColor(client.accentColor)
            .setDescription(`**${username}** feels shy ${text}`)
            .setImage(image),
    SMILE: (username, text, image) =>
        new MessageEmbed()
            .setColor(client.accentColor)
            .setDescription(`**${username}** smiles ${text}`)
            .setImage(image),
    TICKLE: (username, text, image) =>
        new MessageEmbed()
            .setColor(client.accentColor)
            .setDescription(`**${username}** tickles ${text}`)
            .setImage(image),

    HELP: (avatar, uptime, developer) =>
        new MessageEmbed()
            .setColor(client.accentColor)
            .setThumbnail(avatar)
            .setFooter({
                text: `Online for ${uptime}`
            })
            .addField(`About Kuruko`, `I'm developed by \`${developer}\`.\n**Kuruko** was designed to be a **simple** bot with many **interesting features**.`),
    HELP_BUTTONS:
        new MessageActionRow().addComponents(
            new MessageButton()
                .setStyle(`LINK`)
                .setURL(client.baseUrl)
                .setLabel(`Website`),
            new MessageButton()
                .setStyle(`LINK`)
                .setURL(`${client.baseUrl}/go/botinvite`)
                .setLabel(`Add Kuruko`),
            new MessageButton()
                .setStyle(`LINK`)
                .setURL(`${client.baseUrl}/go/vote`)
                .setLabel(`Vote`),
        ),
};