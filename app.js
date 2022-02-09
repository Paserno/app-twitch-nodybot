const tmi = require('tmi.js');
require('dotenv').config();
// const connectionAnonymous = require('./connection/connection');
// connectionAnonymous();

const tokenTwitch = process.env.TOKEN_TMI_TWITCH;

const client = new tmi.Client({
    options: { debug: true},
    identity: {
        username: 'wall-e',
        password: tokenTwitch
    },
    channels: [ 'paserno_' ]
});

client.connect();

client.on('message', (channel, tags, message, self) => {

    if(self) return;
    // const userName = tags["username"];

    // console.log(`${userName} =>`, message);

    if(message.toLowerCase() === '!hello') {
		// "@alca, heya!"
		client.say(channel, `@${tags.username}, heya!`);
	}

});







