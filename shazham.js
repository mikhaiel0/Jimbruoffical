const Jimbru = require('../events');
const {MessageType,Mimetype} = require('@adiwajshing/baileys');
const Config = require('../config');
const ffmpeg = require('fluent-ffmpeg');

const Language = require('../language');
const bix = Language.getString('unvoice')

const Ierr = "*You need to answer the audio file!*"


//============================== audd ==============================
var request = require("request");
var axios = require("axios");
const got = require('got');
const fs = require('fs');


if (Config.WORKTYPE == 'private') {

    Jimbru.addCommand({pattern: 'find', fromMe: true}, (async (message, match) => {

        if (message.reply_message === false) return await message.client.sendMessage(message.jid, bix.UV_REPLY, MessageType.text);

        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
        .format('mp3')
        .save('lyr.mp3')
        .on('end', async () => {

            var data = { 'api_token': 'c60a989e5dbe5a900c81eaff534074a2', 'file': fs.createReadStream('lyr.mp3'), 'return': 'apple_music,spotify' };
            request ({ uri: 'https://api.audd.io/', form: data, method: "POST" }, async (err, res, body) => {
                return await message.client.sendMessage(message.jid, body, MessageType.text);
            })
        })

    }));

}

else if (Config.WORKTYPE == 'public') {
Jimbru.addCommand({pattern: 'find', fromMe: true}, (async (message, match) => {

        if (message.reply_message === false) return await message.client.sendMessage(message.jid, bix.UV_REPLY, MessageType.text);

        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
        .format('mp3')
        .save('lyr.mp3')
        .on('end', async () => {
            var zdata = {'file': fs.createReadStream('lyr.mp3'), 'return': 'data'};
            request ({ uri: `https://api.zeks.me/api/searchmusic?apikey=apivinz&audio=${zdata}`}, async (err, res, body) => {
                return await message.client.sendMessage(message.jid, body, MessageType.text);
            })
        });

    }));

Jimbru.addCommand({pattern: 'find', fromMe: true, dontAddCommandList: true}, (async (message, match) => {    
        if (message.reply_message === false) return await message.sendMessage('*Need Audio!*');

        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .save('output.mp3')
            .on('end', async () => {
                var audd = (fs.readFileSync('output.mp3'));
          const url = `https://api.zeks.me/api/searchmusic?apikey=apivinz&audio=${audd}`;
	  try {
		  const response = await got(url);
		  const json = JSON.parse(response.body);
		  if (response.statusCode === 200) return await message.client.sendMessage(message.jid,
                      json.data.title + '\n' +
                      json.data.artists, MessageType.text);
	  } catch {
		  return await message.client.sendMessage(message.jid, Ierr, MessageType.text);
	  }
            });
    })); 
}
