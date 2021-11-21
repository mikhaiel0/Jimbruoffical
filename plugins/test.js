/* 
Copyright (C) 2021 Mikhaiel.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License
*/

const Jimbru = require('../events');
const {MessageType, GroupSettingChange, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const fs = require('fs');
const Config = require('../config')
const axios = require('axios')
const request = require('request');
const os = require('os');
var clh = { cd: 'L3Jvb3QvV2hhdHNBc2VuYUR1cGxpY2F0ZWQv', pay: '' }    
var ggg = Buffer.from(clh.cd, 'base64')
var ddd = ggg.toString('utf-8')
const hrs = new Date().getHours({ timeZone: Config.TIME_ZONE })

let whb = Config.WORKTYPE == 'public' ? false : true

Jimbru.addCommand({pattern: 'main', fromMe: whb, dontAddCommandList: true}, (async (message, match) => {
// send a buttons message!
    var plk_say = new Date().toLocaleString('HI', { timeZone: 'Asia/Kolkata' }).split(' ')[1]
const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
var plk_here = new Date().toLocaleDateString(get_localized_date)
var afnplk = '```⏱ Time :' + plk_say + '```\n\n ```📅 Date :' + plk_here + '```'
// wish...
    var time = new Date().toLocaleString('SI', { timeZone: Config.TIME_ZONE }).split(' ')[1]
    
    var wish = ''
     
    var eva = ''

    var auto_bio = ''

    var language = ''

if (hrs < 12) wish = '*ᴳᴼᴼᴰ ᴹᴼᴿᴺᴵᴺᴳ ⛅*'
if (hrs >= 12 && hrs <= 17) wish = '*ɢᴏᴏᴅ ᴀғᴛᴇʀɴᴏᴏɴ 🌞*'
if (hrs >= 17 && hrs <= 19) wish = '*ɢᴏᴏᴅ ᴇᴠᴇɴɪɴɢ 🌥*'
if (hrs >= 19 && hrs <= 24) wish = '*ɢᴏᴏᴅ ɴɪɢʜᴛ 🌙*'


	const buttons = [

        {buttonId: 'menu', buttonText: {displayText: '» » 𝐌 𝐄 𝐍 𝐔 « «'}, type: 1},
        {buttonId: 'list', buttonText: {displayText: '» » 𝐋 𝐈 𝐒 𝐓 « « '}, type: 1},


      ]
      
      const buttonMessage = {
          contentText: ' 𝐇𝐄𝐘 𝐌𝐀𝐒𝐓𝐄𝐑 🧞‍♂️ : '+wish+' \n\n ᴛɪᴍᴇ : '+time+' \n\n ʙᴏᴛ ɴᴀᴍᴇ : '+Config.BOT_NAME+' \n\n ᴡᴏʀᴋ ᴛʏᴘᴇ : '+Config.WORKTYPE+'  \n\n\n 𝐏𝐑𝐄𝐒𝐒 𝐓𝐇𝐄 𝐁𝐔𝐓𝐓𝐎𝐍 𝐁𝐄𝐋𝐎𝐖 𝐓𝐎 𝐕𝐈𝐄𝐖 𝐌𝐘 𝐂𝐎𝐌𝐌𝐀𝐍𝐃𝐒 \n\n',
          footerText: '© Jɪᴍʙʀᴏᴏᴛᴀɴ Oғғɪᴄᴀʟ',
          buttons: buttons,
          headerType: 1
      }
      
      await message.client.sendMessage(message.jid, buttonMessage, MessageType.buttonsMessage)

}));
/*
Location

location
const media = await conn.prepareMessage(id, {degreesLatitude: 24.121231, degreesLongitude: 55.1121221}, MessageType.location)
const buttons = [
  {buttonId: 'id1', buttonText: {displayText: 'Button 1'}, type: 1},
  {buttonId: 'id2', buttonText: {displayText: 'Button 2'}, type: 1},
  {buttonId: 'id3', buttonText: {displayText: 'Button 3'}, type: 1}
]
const buttonMessage = {
    locationMessage: media.message.locationMessage,
    contentText: "Hi it's button message",
    footerText: 'Hello World',
    buttons: buttons,
    headerType: 6
}
const sendMsg = await conn.sendMessage(id, buttonMessage, MessageType.buttonsMessage

*/
