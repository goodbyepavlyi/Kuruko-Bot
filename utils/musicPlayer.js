const client = require('../app.js');
const { Player } = require('discord-player');

const player = new Player(client, {
    ytdlOptions: {
        quality: 'highestaudio',
        highWaterMark: 1 << 25
    },
});

module.exports = player;