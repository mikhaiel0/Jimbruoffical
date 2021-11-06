/*
 Copyright (C) 2021 Mikhaiel.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
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


Jimbru.addCommand({pattern: 'Download', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
// send a list message!
    const rows = [
        {title: 'Download Menu', description: "\n╭────────────●●► \n │💰 *DOWNLOAD COMMANDS* \n │      ──────── \n │► .video [ Yt Link] \n │► .mp4    [Name] \n │► .audio  [yt link ] \n │► .download  [status download] \n │► .song  [ song name ] \n │► .dcsong [ song name ] \n │► .img [ name ] \n │► .fb  link ] \n │► .tiktok [ link ] \n │► .vinsta  [ Insta Video ] \n │► .pinsta [ Insta Post ] \n │► .twt [twitter video Link] \n │► .mediafire \n ╰────────────●●►", rowId:"rowid1"},
                 ]
       
       const sections = [{title: "𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐄𝐑 𝐌𝐄𝐍𝐔", rows: rows}]
       
       const button = {
        buttonText: '𝐂𝐋𝐈𝐂𝐊',
        description: "𝑱𝑰𝑴𝑩𝑹𝑶𝑶𝑻𝑨𝑵",
        sections: sections,
        listType: 1
       }
       
       await message.client.sendMessage(message.jid, button, MessageType.listMessage)
    
    }));
