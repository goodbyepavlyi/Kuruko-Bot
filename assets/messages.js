const { MessageEmbed, MessageActionRow, MessageButton, User } = require("discord.js");
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

    NO_MUSIC_PLAYING:
        new MessageEmbed()
            .setColor(client.accentColor)
            .setTitle(`The music must be playing to use that!`),
    NOT_ENOUGH_SONGS:
        new MessageEmbed()
            .setColor(client.accentColor)
            .setTitle(`No music in the queue after the current one.`),
    NO_MUSIC_PLAYED_BEFORE:
        new MessageEmbed()
            .setColor(client.accentColor)
            .setTitle(`There was no music played before.`),

    NOWPLAYING_INFORMATION: (cover, title, volume, duration, loopMode, requestedBy) =>
        new MessageEmbed()
            .setColor(client.accentColor)
            .setTimestamp()
            .setThumbnail(cover)
            .setAuthor({
                name: requestedBy.username,
                iconURL: requestedBy.displayAvatarURL()
            })
            .setTitle(title)
            .setDescription(`Volume **${volume}%**\nDuration **${duration}**\nLoop **${[ `disabled`, `track`, `queue` ][loopMode]}**\nRequested by **${requestedBy}**`),

    PAUSE_SUCCESS: (title) =>
        new MessageEmbed()
            .setColor(client.accentColor)
            .setTitle(`Paused **${title}**. Type \`/resume\` to unpause!`),

    PLAY_NO_RESULTS:
        new MessageEmbed()
            .setColor(client.accentColor)
            .setTitle(`:mag: I could not find any results for this song!`),
    PLAY_SEARCHING: (songQuery) =>
        new MessageEmbed()
            .setColor(client.accentColor)
            .setTitle(`:watch: Searching for **${songQuery}**...`),
    PLAY_JOINING_VOICE_CHANNEL:
        new MessageEmbed()
            .setColor(client.accentColor)
            .setTitle(`Connecting to the voice channel...`),    
    PLAY_CANT_JOIN_VOICE_CHANNEL:
        new MessageEmbed()
            .setColor(client.accentColor)
            .setTitle(`:no_entry_sign: I am not able to access the voice channel!`),
    /**
     * @param {User} requestedBy 
     */
    PLAY_PLAYLIST: (requestedBy, playlistName, url, duration, thumbnail) =>
        new MessageEmbed()
            .setColor(client.accentColor)
            .setTimestamp()
            .setAuthor({
                name: requestedBy.username,
                iconURL: requestedBy.displayAvatarURL(),
            })
            .setURL(url)
            .setTitle(`${playlistName}`)
            .setThumbnail(thumbnail)
            .setDescription(`Duration **${duration}**`),
    /**
     * @param {User} requestedBy 
     */
    PLAY_TRACK: (requestedBy, trackName, url, duration, thumbnail) =>
        new MessageEmbed()
            .setColor(client.accentColor)
            .setTimestamp()
            .setAuthor({
                name: requestedBy.username,
                iconURL: requestedBy.displayAvatarURL(),
            })
            .setURL(url)
            .setTitle(`${trackName}`)
            .setThumbnail(thumbnail)
            .setDescription(`Duration **${duration}**`),

    QUEUE: (repeatMode, current, progress, tracks) => {
        const repeatModes = [ ``, `🔁`, `🔂` ];

        const currentlyPlaying = `\`Currently playing\` [**${current.title}**](${current.url}) - <@${current.requestedBy.id}> **${progress}/${current.duration}**`;
        const trackList = tracks.map((track, index) => `\`${index+=1}.\` [**${track.title}**](${track.url}) - <@${track.requestedBy.id}> **${track.duration}**`).slice(0, 10).join('\n');
        const footer = tracks.length > 10 ? `And **${tracks.length}** other song(s)` : ``;

        return new MessageEmbed()
            .setColor(client.accentColor)
            .setTimestamp()
            .setTitle(`Queue ${repeatModes[repeatMode]}`)
            .setDescription(`${currentlyPlaying}\n${trackList}\n${footer}`);
    },

    LOOP_INVALID_MODE:
        new MessageEmbed()
            .setColor(client.accentColor)
            .setTitle(`You have to input a valid loop type!`)
            .setDescription(`Valid loop types are \`off\`, \`track\` and \`queue\`.`),
    LOOP_EMBED: (mode) => {
        const responses = {
            off: `Repeating has been disabled.`,
            track: `The track will now be repeated.`,
            queue: `The queue will now be repeated.`,
        };

        return new MessageEmbed()
            .setColor(client.accentColor)
            .setTitle(responses[mode]);
    },

    RESUME: (name) =>
        new MessageEmbed()
            .setColor(client.accentColor)
            .setTitle(`Resumed **${name}**.`),

    SEEK_INVALID_TIME:
        new MessageEmbed()
            .setColor(client.accentColor)
            .setTitle(`The indicated time is higher than the total time of the current song!`)
            .setDescription(`*Try for example a valid time like **5s, 10s, 20 seconds, 1m***`),
    SEEK: (position) =>
        new MessageEmbed()
            .setColor(client.accentColor)
            .setTitle(`The position has been changed to **${position}**!`),
            
    SHUFFLE: (size) =>
        new MessageEmbed()
            .setColor(client.accentColor)
            .setTitle(`Shuffled ${size} song(s)!`),
            
    SKIP: (name) =>
        new MessageEmbed()
            .setColor(client.accentColor)
            .setTitle(`${name} has been skipped!`),

    PREVIOUS:
        new MessageEmbed()
            .setColor(client.accentColor)
            .setTitle(`Playing the previous track!`),

    VOLUME_CURRENT: (volume) =>
        new MessageEmbed()
            .setColor(client.accentColor)
            .setTitle(`The current volume is **${volume}%**.`),
    VOLUME_USAGE:
        new MessageEmbed()
            .setColor(client.accentColor)
            .setTitle(`Enter a number between **1 and 100**.`),
    VOLUME_SET: (volume) =>
        new MessageEmbed()
            .setColor(client.accentColor)
            .setTitle(`Volume has been changed to **${volume}%**.`),
    
    STOP:
        new MessageEmbed()
            .setColor(client.accentColor)
            .setTitle(`The queue has been cleared and the music has stopped.`),
};