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

    Jimbrootan.addCommand({pattern: 'xhur', fromMe: true, desc: Lang.ALIVE_DESC}, (async (message, match) => {

        if (Config.ALIVEMSG == 'default') {
            
            var image = await axios.get (Config.ALIVE_LOGO, {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption:'*β­β€ π ππ πππππ πππππ π§*Β» \n*ββ Wα΄Κα΄ α΄Κα΄α΄ : '+ Config.WORKTYPE +'* \n*ββNα΄α΄Κα΄Κ : '+ Jimbru.PHONE +'* \n*ββ ΙͺΙ’ : '+ Jimbru.IG_USER +'* \n*ββ α΄α΄‘Ι΄α΄Κ : '+ Jimbru.OA_NAME +'* \n*β°βββββββββββββββββΫͺΫͺΰ½΄ΰ½»βΈ* \n   *β ββββββββββββββββββββββββββββββββ*   \n   *π΅πππππππππ πππππππ*   \n *β­βͺ α΄α΄α΄α΄α΄ ΚΚ α΄Ιͺα΄Κα΄Ιͺα΄Κ* \n *β°ββββββββββββββββββΫͺΫͺΰ½΄ΰ½»βΈ*'})

    }
    else {
            
            var image = await axios.get (Config.ALIVE_LOGO, {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: Config.ALIVEMSG + '\n\n*πΒ© the_real_mikhaiel*' })
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

    Jimbrootan.addCommand({pattern: 'xhur', fromMe: false, dontAddCommandList:true}, (async (message, match) => {

        if (Config.ALIVEMSG == 'default') {
            
            var image = await axios.get (Config.ALIVE_LOGO, {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption:'*β­β€ π ππ πππππ πππππ π§*Β» \n*ββ Wα΄Κα΄ α΄Κα΄α΄ : '+ Config.WORKTYPE +'* \n*ββNα΄α΄Κα΄Κ : '+ Jimbru.PHONE +'* \n*ββ ΙͺΙ’ : '+ Jimbru.IG_USER +'* \n*ββ α΄α΄‘Ι΄α΄Κ : '+ Jimbru.OA_NAME +'* \n*β°βββββββββββββββββΫͺΫͺΰ½΄ΰ½»βΈ* \n   *β ββββββββββββββββββββββββββββββββ*   \n   *π΅πππππππππ πππππππ*   \n *β­βͺ α΄α΄α΄α΄α΄ ΚΚ α΄Ιͺα΄Κα΄Ιͺα΄Κ* \n *β°ββββββββββββββββββΫͺΫͺΰ½΄ΰ½»βΈ*'})

    }
    else {
            
            var image = await axios.get (Config.ALIVE_LOGO, {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: Config.ALIVEMSG + '\n\n*Β© MIKHAIEL*' })
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
