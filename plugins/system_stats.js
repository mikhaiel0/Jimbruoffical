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
const chalk = require('chalk');
const axios = require('axios');
let am = Config.WORKTYPE == 'public' ? false : true
const Language = require('../language');
const Lang = Language.getString('system_stats');

    Jimbrootan.addCommand({pattern: 'alive', fromMe: true, desc: Lang.ALIVE_DESC}, (async (message, match) => {

        if (Config.ALIVEMSG == 'default') {
            
            var image = await axios.get (Config.ALIVE_LOGO, {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption:  '*╭➤ 𝐈 𝐀𝐌 𝐒𝐓𝐈𝐋𝐋 𝐀𝐋𝐈𝐕𝐄 🧞*» \n *│❖ Wᴏʀᴋ ᴛʏᴘᴇ : '+ Config.WORKTYPE +'* \n *│❖Nᴜᴍʙᴇʀ : '+ Config.PHONE +'* \n *│❖ ɪɢ : 👀* \n *│❖ ᴏᴡɴᴇʀ : '+ Config.OA_NAME +'* \n *╰────────────────❋ཻུ۪۪⸙* \n\n\ *⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘* \n      *𝕵𝖎𝖒𝖇𝖗𝖔𝖔𝖙𝖆𝖓 𝖔𝖋𝖋𝖎𝖈𝖆𝖑*    \n *╭◪ ᴄᴏᴅᴇᴅ ʙʏ ᴍɪᴋʜᴀɪᴇʟ* \n *╰─────────────────❋ཻུ۪۪⸙*'})

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
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: "\n\n*༺࿀࿉ ━◆ ᴊɪᴍʙʀᴏᴏᴛᴀɴ ᴠ - 𝟹.𝟶 ◆━ ࿉࿁༻*\n\n “Keep your face to the sun and you will never see the shadows.”― Helen Keller\n\n *Hey Master, Im Alive Now 🧞*\n\n*◯● Github Link : https://github.com/Mikhaiel/Jimbrootan"})

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
