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

Asena.addCommand({pattern: 'test09 ?(.*)', fromMe:wk , desc:MENU_LIST}, (async (message, match) => {
// send a list message!
    const templateButtons = [
  {index: 1, urlButton: {displayText: '⭐ Jimbru v2 Git !', url: 'https://github.com/Mikhaiel/jinnh'}},
  {index: 2, callButton: {displayText: 'Text me!', phoneNumber: '+919074210316'}},
  {index: 3, quickReplyButton: {displayText: 'This is a reply, just like normal buttons!', id: 'id-like-buttons-message'}},
]
const buttonMessage = {
    text: "Hi it's a template message",
    footer: 'Hello World',
    templateButtons: templateButtons,
    image: {url: 'https://i.imgur.com/0SUQkRT.jpeg'}
}
 await message.client.sendMessage(message.jid, buttonMessage, MessageType.buttonsMessage)
    }));
