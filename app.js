const tmi = require('tmi.js');
const { mayorMenor } = require('./games/mayorMenor');
require('dotenv').config();
// const connectionAnonymous = require('./connection/connection');
// connectionAnonymous();
let global = {};
let userGame = {};

const tokenTwitch = process.env.TOKEN_TMI_TWITCH;

const client = new tmi.Client({
    options: { debug: true },
    identity: {
        username: 'NodyBot_',
        password: tokenTwitch
    },
    channels: ['paserno_']
});

client.connect();

client.on('message', (channel, tags, message, self) => {

    if (self || !message.startsWith('!')) return;

    const args = message.split(' ');
    // console.log(args);
	const command = args.shift().toLowerCase();
    // console.log(command);

    if (command === '!games') {
        const juego = mayorMenor().numerosRandom;
        global = juego;

        const { num1, num2 } = juego;

        client.say(channel, `@${tags.username}, Te salio el numero: ${num1} y el otro numero que tengo es mayor, menor o igual ?`);
        userGame = tags.username;

        // client.say(channel, `el otro numero es ${num2}`);
        // client.say(channel, `@${tags.username}, heya!`);
    }

    if (userGame === tags.username) {
        if (message.toLowerCase() === '!menor') {
            
            if(global.num1 < global.num2 ){
                client.say(channel, `@${userGame} Perdiste el numero era ${global.num2}`);

            }else if( global.num1 > global.num2){
                client.say(channel, `@${userGame} Ganaste! el numero era ${global.num2}`);

            }else{
                client.say(channel, `@${userGame} Perdiste el numero era ${global.num2}`);
            }
            userGame = {};
        }
        if (message.toLowerCase() === '!mayor') {
            if(global.num1 > global.num2 ){
                client.say(channel, `@${userGame} Perdiste el numero era ${global.num2}`);
            }else if( global.num1 < global.num2){
                client.say(channel, `@${userGame} Ganaste! el numero era ${global.num2}`);
            }else{
                client.say(channel, `@${userGame} Perdiste el numero era ${global.num2}`);
            }
            userGame = {};

        }
        if (message.toLowerCase() === '!igual') {
            if(global.num1 === global.num2 ){
                client.say(channel, `@${userGame} Ganaste! el numero era ${global.num2}`);
            }else if( global.num1 < global.num2){
                client.say(channel, `@${userGame} Perdiste el numero era ${global.num2}`);
            }else{
                client.say(channel, `@${userGame} Perdiste el numero era ${global.num2}`);
            }
            userGame = {};

        }
    }else {
        client.say(channel, `Para jugar escribe !games`);
    
    }



});







