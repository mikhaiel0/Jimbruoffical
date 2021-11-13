/* 
Codded Mikhaiel
*/
const Jimbru = require('../events');
const Config = require('../config');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Ln = "▷ 🤖നിങ്ങൾ ആഗ്രഹിക്കുന്ന രീതിയിൽ മെമ്മുകൾ ഇച്ഛാനുസൃതമാക്കാൻ മെമ്മെ ലിസ്റ്റ്◁"

if (Config.WORKTYPE == 'public') {

Jimbru.addCommand({pattern: 'deadpool', fromMe: false, desc: Ln,}, (async (message, match) => {

await message.client.sendMessage(

message.jid,code, MessageType.text);

}));

Jimbru.addCommand({pattern: 'wasted ?(.*)', fromMe: true, desc: "make photo effec" }, async (message, match) => {

if (match === '') return await message.sendMessage('give me a url');

var webimage = await axios.get(`https://zenzapi.xyz/api/photooxy/gtaposter?image=${match[1]}&apikey=e75b25d89d`, { responseType: 'arraybuffer' })

await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption:Config.JINN})

});

Jimbru.addCommand({pattern: 'gta ?(.*)', fromMe: true, desc: "make gta poster photo effec" }, async (message, match) => {

if (match === '') return await message.sendMessage('give me a url');

var webimage = await axios.get(`https://zenzapi.xyz/api/photooxy/gtaposter?image=${match[1]}&apikey=e75b25d89d`, { responseType: 'arraybuffer' })

await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption:Config.JINN})

});

Jimbru.addCommand({pattern: 'gray ?(.*)', fromMe: true, desc: "edit photo as gray collor" }, async (message, match) => {

if (match === '') return await message.sendMessage('give me a url');

var webimage = await axios.get(`https://zenzapi.xyz/api/greyscale?image=${match[1]}&apikey=e75b25d89d`, { responseType: 'arraybuffer' })

await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption:Config.JINN})

});

Jimbru.addCommand({pattern: 'jail ?(.*)', fromMe: true, desc: "make photo effec" }, async (message, match) => {

if (match === '') return await message.sendMessage('give me a url');

var webimage = await axios.get(`https://zenzapi.xyz/api/jail?image=${match[1]}&apikey=e75b25d89d`, { responseType: 'arraybuffer' })

await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption:Config.JINN})

});

Jimbru.addCommand({pattern: 'passed ?(.*)', fromMe: true, desc: "make mission passed photo effec" }, async (message, match) => {

if (match === '') return await message.sendMessage('give me a url');

var webimage = await axios.get(`https://zenzapi.xyz/api/passed?image=${match[1]}&apikey=e75b25d89d`, { responseType: 'arraybuffer' })

await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption:Config.JINN})

});

Jimbru.addCommand({pattern: 'contrast ?(.*)', fromMe: true, desc: "make contrast photo effec" }, async (message, match) => {

if (match === '') return await message.sendMessage('give me a url');

var webimage = await axios.get(`https://zenzapi.xyz/api/contrast?intensity=+1&image=${match}&apikey=e75b25d89d`, { responseType: 'arraybuffer' })

await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption:Config.JINN})

});

Jimbru.addCommand({pattern: 'delete ?(.*)', fromMe: true, desc: "make photo effec" }, async (message, match) => {

if (match === '') return await message.sendMessage('give me a url');

var webimage = await axios.get(`https://zenzapi.xyz/api/image/delete?image=${match}&apikey=e75b25d89d`, { responseType: 'arraybuffer' })

await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption:Config.JINN})

});

Jimbru.addCommand({pattern: 'onbook ?(.*)', fromMe: true, desc: "Write text on book" }, async (message, match) => {

if (match === '') return await message.sendMessage('give me a text');

var webimage = await axios.get(`https://api.zeks.me/api/nulis?apikey=XxShadoWxX&text=${match}`, { responseType: 'arraybuffer' })

await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption:Config.JINN})

});

Jimbru.addCommand({pattern: 'calendar ?(.*)', fromMe: true, desc: "make photo on calender" }, async (message, match) => {

if (match === '') return await message.sendMessage('give me a url');

var webimage = await axios.get(`https://api.zeks.me/api/calender?apikey=XxShadoWxX&image=${match}`, { responseType: 'arraybuffer' })

await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption:Config.JINN})

});

Jimbru.addCommand({pattern: 'skmask ?(.*)', fromMe: true, desc: "Edit photo with skull mask" }, async (message, match) => {

if (match === '') return await message.sendMessage('give me a url');

var webimage = await axios.get(`https://api.lolhuman.xyz/api/editor/skullmask?apikey=fc669120c96ec316e52f33a1&img=${match}`, { responseType: 'arraybuffer' })

await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption:Config.JINN})

});

Jimbru.addCommand({pattern: 'pika ?(.*)', fromMe: true, desc: "Make pikachu effect" }, async (message, match) => {

if (match === '') return await message.sendMessage('give me a url');

var webimage = await axios.get(`https://some-random-api.ml/pokedex?pokemon=${match}`, { responseType: 'arraybuffer' })

await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption:Config.JINN})

});

Jimbru.addCommand({pattern: '2onbook ?(.*)', fromMe: true, desc: "Write on book" }, async (message, match) => {

if (match === '') return await message.sendMessage('give me a text');

var webimage = await axios.get(`https://api.zeks.me/api/magernulis?apikey=XxShadoWxX&nama=${match.split(',')[0]}&kelas=${match.split(',')[1]}&text=${match.split(',')[2]}&tinta=${match.split(',')[3]}`,
 { responseType: 'arraybuffer' })

await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption:Config.JINN})

});

Jimbru.addCommand({pattern: 'missing ?(.*)', fromMe: true, desc: "make a missing poster" }, async (message, match) => {

if (match === '') return await message.sendMessage('Example: .missing url,text1,text2,text3');

var webimage = await axios.get(`https://api.zeks.me/api/missing-image?apikey=XxShadoWxX&image=${match.split(',')[0]}&text1=${match.split(',')[1]}&text2=${match.split(',')[2]}&text3=${match.split(',')[3]}`, { responseType: 'arraybuffer' })

await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption:Config.JINN})

});

Jimbru.addCommand({pattern: 'comment ?(.*)', fromMe: true, desc: "phub comment" }, async (message, match) => {

if (match === '') return await message.sendMessage('give me a url');

var webimage = await axios.get(`https://api.zeks.me/api/phub?apikey=XxShadoWxX&img=https://1.bp.blogspot.com/-x8KhcOBG-yw/XiU4pi1yWVI/AAAAAAAADBA/gK8tsLyc1lQ808A348IKzDCjf6fUBKONwCLcBGAsYHQ/s1600/cara+buat+foto+profil+di+whatsapp+menjadi+unik.jpg&username=${match.split(',')[0]}&msg=${match.split(',')[1]}`, { responseType: 'arraybuffer' })

await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption:Config.JINN})

});

Jimbru.addCommand({pattern: 'fire ?(.*)', fromMe: true, desc: "make photo as burning" }, async (message, match) => {

if (match === '') return await message.sendMessage('give me a url');

var webimage = await axios.get(`https://api.zeks.me/api/burning-image?apikey=XxShadoWxX&image=${match}`, { responseType: 'arraybuffer' })

await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption:Config.JINN})

});

Jimbru.addCommand({pattern: 'ccrop ?(.*)', fromMe: true, desc: "crop sticker in the shape of circle" }, async (message, match) => {

if (match === '') return await message.sendMessage('give me a url');

var webimage = await axios.get(`https://zenzapi.xyz/api/circle?image=${match[1]}&apikey=e75b25d89d`, { responseType: 'arraybuffer' })

await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption:Config.JINN})

});
        }
