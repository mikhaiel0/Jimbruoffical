
/*
--- Re-Codded by @Mikhaiel ---
*/

const Jimbru = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const con = require('../config');

// Descriptions

const ENZAR = "Roll dice randomly."

// Sentences
const ENSEN = "🍀 ```Rolling Dice!``` 🎲"

// Results

const ENSON = "```Dice Rolled:``` "

// Plugin Start 
if (con.LANG === 'EN') {

    if (con.WORKTYPE === 'private') {

        Jimbru.addCommand({pattern: 'roll', fromMe: true, desc: TRZAR}, (async (message, match) => {

            await message.client.sendMessage(message.jid, TRSEN, MessageType.text);
            await new Promise(r => setTimeout(r, 4000));

            // Numbers
            var r_text = new Array ();
            r_text[0] = "⚀";
            r_text[1] = "⚁";
            r_text[2] = "⚂";
            r_text[3] = "⚃";
            r_text[4] = "⚄";
            r_text[5] = "⚅";

            var i = Math.floor(6*Math.random())

            await message.client.sendMessage(message.jid, TRSON + `${r_text[i]}`, MessageType.text);

        }));
    }
    else if (con.WORKTYPE === 'public') {

        Jimbru.addCommand({pattern: 'roll', fromMe: false, desc: TRZAR}, (async (message, match) => {

            await message.client.sendMessage(message.jid, TRSEN, MessageType.text);
            await new Promise(r => setTimeout(r, 4000));

            // Numbers
            var r_text = new Array ();
            r_text[0] = "⚀";
            r_text[1] = "⚁";
            r_text[2] = "⚂";
            r_text[3] = "⚃";
            r_text[4] = "⚄";
            r_text[5] = "⚅";

            var i = Math.floor(6*Math.random())

            await message.client.sendMessage(message.jid, TRSON + `${r_text[i]}`, MessageType.text);

        }));
}
