/*
Copyright (C) 2020 Yusuf Usta.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
WhatsAsena - Yusuf Usta
Developer & Co-Founder - Phaticusthiccy
*/
const Jimbrootan = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const Jimbru = require('../jimbroottan');
const chalk = require('chalk');
const axios = require('axios');
let am = Config.WORKTYPE == 'public' ? false : true
const Language = require('../language');
const Lang = Language.getString('system_stats');

    Jimbrootan.addCommand({pattern: 'alive', fromMe: true, desc: Lang.ALIVE_DESC}, (async (message, match) => {

        if (Config.ALIVEMSG == 'default') {
            
            var image = await axios.get (Config.ALIVE_LOGO, {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption:  '*╭➤𝑴𝑨𝑺𝑻𝑬𝑹,𝑰𝑨𝑴 𝑨𝑳𝑰𝑽𝑬 𝑵𝑶𝑾 🧞*» \n*│❖ Wᴏʀᴋ ᴛʏᴘᴇ : '+ Config.WORKTYPE +'* \n*│❖Nᴜᴍʙᴇʀ : '+ Jimbru.PHONE +'* \n*│❖ ɪɢ :'+ Jimbru.IG_USER +'* \n*│❖ ᴏᴡɴᴇʀ : '+ Jimbru.OA_NAME +'* \n*╰────────────────❋ཻུ۪۪⸙* \n\n\  *⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘*  \n\n      *𝕵𝖎𝖒𝖇𝖗𝖔𝖔𝖙𝖆𝖓 𝖔𝖋𝖋𝖎𝖈𝖆𝖑*    \n\n *╭◪ ᴄᴏᴅᴇᴅ ʙʏ ᴍɪᴋʜᴀɪᴇʟ* \n *╰─────────────────❋ཻུ۪۪⸙*'})

    }
    else {
            
            var image = await axios.get (Config.ALIVE_LOGO, {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: Config.ALIVEMSG + '\n\n*😈© the_real_mikhaiel*' })
     }
    }));

    Jimbrootan.addCommand({pattern: 'sysd', fromMe: am, desc: Lang.SYSD_DESC, dontAddCommandList: true}, (async (message, match) => {

        if (message.jid === '905524317852-1612300121@g.us') {

            return;
        }

        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
        await message.sendMessage(
            '```' + child + '```', MessageType.text
        );
    }));

 if (Config.WORKTYPE == 'public') {

    Jimbrootan.addCommand({pattern: 'alive', fromMe: false, dontAddCommandList:true}, (async (message, match) => {

        if (Config.ALIVEMSG == 'default') {
            
            var image = await axios.get (Config.ALIVE_LOGO, {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption:'*╭➤𝑴𝑨𝑺𝑻𝑬𝑹,𝑰𝑨𝑴 𝑨𝑳𝑰𝑽𝑬 𝑵𝑶𝑾 🧞*» \n*│❖ Wᴏʀᴋ ᴛʏᴘᴇ : '+ Config.WORKTYPE +'* \n*│❖Nᴜᴍʙᴇʀ : '+ Jimbru.PHONE +'* \n*│❖ ɪɢ : 👀* \n*│❖ ᴏᴡɴᴇʀ : '+ Jimbru.OA_NAME +'* \n*╰────────────────❋ཻུ۪۪⸙* \n\n\  *⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘*  \n\n      *𝕵𝖎𝖒𝖇𝖗𝖔𝖔𝖙𝖆𝖓 𝖔𝖋𝖋𝖎𝖈𝖆𝖑*    \n\n *╭◪ ᴄᴏᴅᴇᴅ ʙʏ ᴍɪᴋʜᴀɪᴇʟ* \n *╰─────────────────❋ཻུ۪۪⸙*'})

    }
    else {
            
            var image = await axios.get (Config.ALIVE_LOGO, {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: Config.ALIVEMSG + '\n\n*© MIKHAIEL*' })
     }
    }));

    Jimbrootan.addCommand({pattern: 'sysd', fromMe: true, desc: Lang.SYSD_DESC, dontAddCommandList: true}, (async (message, match) => {

        if (message.jid === '905524317852-1612300121@g.us') {

            return;
        }

        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
        await message.sendMessage(
            '```' + child + '```', MessageType.text
        );
    }));
}
