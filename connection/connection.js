const tmi = require('tmi.js');

const connectionAnonymous = () => {

    const client = new tmi.Client({
        channels: ['paserno_']
    });

    client.connect();
    client.on('message', (channels, tags, message, self) => {

        const userName = tags["username"];
        if (userName != 'nightbot') {
            // console.log(tags);
            console.log(`${userName} =>`, message);


        }
        // console.log("el pancho es pto");
    });
}


module.exports = connectionAnonymous;
  

