/*
 Β© Mikhaiel β
*/

const Asena = require('../events');
const {MessageType, GroupSettingChange, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const fs = require('fs');
const Config = require('../config')
const config = require('../config')
const Jimbru = require('../jimbroottan');
const axios = require('axios')
const request = require('request');
const os = require('os');
var clh = { cd: 'L3Jvb3QvV2hhdHNBc2VuYUR1cGxpY2F0ZWQv', pay: '' }    
var ggg = Buffer.from(clh.cd, 'base64')
var ddd = ggg.toString('utf-8')


let whb = Config.WORKTYPE == 'public' ? false : true

Asena.addCommand({pattern: 'alive', fromMe: whb, dontAddCommandList: true}, (async (message, match) => {
// send a buttons message 
    const buttons = [
        {buttonId: 'alivebutton1', buttonText: {displayText: Config.ALIVE_BUTTON_ONE }, type: 1},
        {buttonId: 'alivebutton2', buttonText: {displayText: Config.ALIVE_BUTTON_TWO }, type: 1}
      ]
      
      const buttonMessage = {
          contentText: '*β­β€ π ππ πππππ πππππ π§*Β» \n*ββ Wα΄Κα΄ α΄Κα΄α΄ : '+ Config.WORKTYPE +'* \n*ββNα΄α΄Κα΄Κ : '+ Jimbru.PHONE +'* \n*ββ ΙͺΙ’ : '+ Jimbru.IG_USER +'* \n*ββ α΄α΄‘Ι΄α΄Κ : '+ Jimbru.OA_NAME +'* \n*β°βββββββββββββββββΫͺΫͺΰ½΄ΰ½»βΈ* \n   *β ββββββββββββββββββββββββββββββββ*   \n   *π΅πππππππππ πππππππ*   \n *β­βͺ α΄α΄α΄α΄α΄ ΚΚ α΄Ιͺα΄Κα΄Ιͺα΄Κ* \n *β°ββββββββββββββββββΫͺΫͺΰ½΄ΰ½»βΈ*',
          footerText: Config.BOT_NAME,
          buttons: buttons,
          headerType: 1
      }
      
await message.client.sendMessage(message.jid, buttonMessage, MessageType.buttonsMessage, { mimetype: Mimetype.buttonsMessage, quoted: message.data, ptt: true,quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(message.jid ? { remoteJid: "status@broadcast" } : {}) }, message: { orderMessage: { itemCount: 123, status: 200, thumbnail: fs.readFileSync('jimbruv3.jpg'), surface: 200, message: Config.BOT_NAME, orderTitle: Config.BOT_NAME, "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": Config.BOT_NAME + '\n', "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1080, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('jimbru23.jpg')}}}});

}));
