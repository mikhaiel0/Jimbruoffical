/* 
Copyright (C) 2021 Mikhaiel.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License
*/

const Asena = require('../events');
const {MessageType, GroupSettingChange, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const fs = require('fs');
const Config = require('../config')
const Mikhaiel = require('../jimbroottan');
const axios = require('axios')
const request = require('request');
const os = require('os');
const Language = require('../language');
const MENU_LIST = "Customize Button"
var clh = { cd: 'L3Jvb3QvV2hhdHNBc2VuYUR1cGxpY2F0ZWQv', pay: '' }    
var ggg = Buffer.from(clh.cd, 'base64')
var ddd = ggg.toString('utf-8')
let wk = Config.WORKTYPE == 'public' ? false : true

Asena.addCommand({pattern: 'jimbru ?(.*)', fromMe:wk , desc:MENU_LIST}, (async (message, match) => {
// send a list message!
    const buttons = [
  {buttonId: '#list', buttonText: {displayText: Mikhaiel.BTN1}, type: 1},
  {buttonId: '#menu', buttonText: {displayText: Mikhaiel.BTN2}, type: 1}
]
const buttonMessage = {
    contentText: Mikhaiel.Button_Text,
    footerText: 'Config.BOT_NAME',
    buttons: buttons,
    headerType: 1
}
 await message.client.sendMessage(message.jid, buttonMessage, MessageType.buttonsMessage)
    }));
