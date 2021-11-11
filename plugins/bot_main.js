/*
const Jimbrootan = require('../events');
const Config = require('../config');
const {MessageType, GroupSettingChange, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios')
const request = require('request');
const os = require('os');
var clh = { cd: 'L3Jvb3QvV2hhdHNBc2VuYUR1cGxpY2F0ZWQv', pay: '' }    
var ggg = Buffer.from(clh.cd, 'base64')
var ddd = ggg.toString('utf-8')
let wk = Config.WORKTYPE == 'public' ? false : true


const comands = '┏━━━━━━━━━━━━━━━━━━━\n┃〘 *ᴊɪᴍʙʀᴏᴏᴛᴀɴ* 〙\n┗━━━━━━━━━━━━━━━━━━━\n\n┏━━━━━━━━━━━━━━━━━━━\n ᴡᴇʟᴄᴏᴍᴇ ᴛᴏ ᴛʜᴇ ᴡᴏʀʟᴅ ᴏꜰ ᴊɪᴍʙʀᴏᴏᴛᴀɴ \n┗━━━━━━━━━━━━━━━━━━━'

const dapdate = '┏━━━━━━━━━━\n┃〘 *ᴊɪᴍʙʀᴏᴏᴛᴀɴ* 〙\n┣━━━━━━━━━━\n┠ ▌│█║▌║▌║ ɴᴇᴡ ᴜᴘᴅᴀᴛᴇ ║▌║▌║█│▌\n┠⊷️ *Version:*  ```'+Config.VERSION+'```\n┠⊷️ *Prefix:*  『.』\n┗━━━━━━━━━━\n┃\n┠⊷️ *𝘾𝙃𝘼𝙉𝙂𝙀𝙎*\n┏━━━━━━━━━━━━\n  *cₒₘₘᵢₙg ₛₒₒₙ \n┗━━━━━━━━━━━━'


const vCard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n' 
            + 'FN:Mikhaiel\n'
            + 'ORG:Mikhaiel;\n'
            + 'TEL;type=CELL;type=VOICE;waid=919544846609:+919544846609\n'
            + 'END:VCARD'

Jimbrootan.addCommand({on: 'text', fromMe: wk}, (async (message, match) => {
	if (message.message.includes('jimbru')) {
		let buttons = [
		  {buttonId: 'Owner', buttonText: {displayText: "Owner"}, type: 1},
		  {buttonId: 'Update', buttonText: {displayText: "Update"}, type: 1}
		]
		let buttonMessage = {
		  contentText: comands,
		  footerText: 'Mikhaiel',
		  buttons: buttons,
		  headerType: 1
		}
		await message.client.sendMessage(message.jid, buttonMessage, MessageType.buttonsMessage, {quoted: message.data});
	}
        else if (message.message.includes('Owner')) {
		await message.client.sendMessage(message.jid, {displayname: "Mikhaiel", vcard: vCard}, MessageType.contact, {quoted: message.data});
	}
	else if (message.message.includes('Update')) {
		await message.client.sendMessage(message.jid, dapdate, MessageType.text, {quoted: message.data});
	}
}));
*/
