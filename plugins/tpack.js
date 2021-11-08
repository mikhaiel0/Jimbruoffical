/* 
mikhaiel
*/

const Jimbroottan = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');

const Language = require('../language');
const Lang = Language.getString('ttp');
const Desk = "Temp logo pack \n\n╭┅🦠 *.tmug*\n╭┅🦠 *.tlove*\n╭┅🦠 *.tnaru*\n╭┅🦠 *.tgrass*\n╭┅🦠 *.tsky*\n╭┅🦠 *.tcof*\n╭┅🦠 *.tneon*\n╭┅🦠 *.tpubg*\n╭┅🦠 *.tbit*\n```.tbit text1,text2```\n╭┅🦠 *.tbt*\n```.tbt text1,text2```\n"

if (Config.WORKTYPE == 'private') {


    Jimbroottan.addCommand({ pattern: 'tpack ?(.*)', fromMe: true,dontAddCMDList: true }, (async (message, match) => {
        await message.sendMessage(Desk);
        
    }));





    Jimbroottan.addCommand({ pattern: 'tmug ?(.*)', fromMe: true,dontAddCMDList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(Lang.NEED_WORD);

        var lasiyasimg = await axios.get(`https://videfikri.com/api/textmaker/candlemug/?text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(lasiyasimg.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.JINN})

    }));

    Jimbroottan.addCommand({ pattern: 'tlove ?(.*)', fromMe: true,dontAddCMDList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(Lang.NEED_WORD);

        var lasiyasimg = await axios.get(`https://videfikri.com/api/textmaker/lovemsg/?text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(lasiyasimg.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.JINN})

    }));

    Jimbroottan.addCommand({ pattern: 'tnaru ?(.*)', fromMe: true,dontAddCMDList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(Lang.NEED_WORD);

        var lasiyasimg = await axios.get(`https://videfikri.com/api/textmaker/narutobanner/?text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(lasiyasimg.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.JINN})

    }));

    Jimbroottan.addCommand({ pattern: 'tgrass ?(.*)', fromMe: true,dontAddCMDList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(Lang.NEED_WORD);

        var lasiyasimg = await axios.get(`https://videfikri.com/api/textmaker/paperonglass/?text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(lasiyasimg.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.JINN})

    }));

    Jimbroottan.addCommand({ pattern: 'tsky ?(.*)', fromMe: true,dontAddCMDList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(Lang.NEED_WORD);

        var lasiyasimg = await axios.get(`https://videfikri.com/api/textmaker/shadowtext/?text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(lasiyasimg.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.JINN})

    }));

    Jimbroottan.addCommand({ pattern: 'tcof ?(.*)', fromMe: true,dontAddCMDList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(Lang.NEED_WORD);

        var lasiyasimg = await axios.get(`https://videfikri.com/api/textmaker/coffeecup/?text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(lasiyasimg.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.JINN})

    }));

    Jimbroottan.addCommand({ pattern: 'tneon ?(.*)', fromMe: true,dontAddCMDList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(Lang.NEED_WORD);

        var lasiyasimg = await axios.get(`https://videfikri.com/api/textmaker/glowingneon/?text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(lasiyasimg.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.JINN})

    }));

    Jimbroottan.addCommand({ pattern: 'tpubg ?(.*)', fromMe: true,dontAddCMDList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(Lang.NEED_WORD);

        var lasiyasimg = await axios.get(`https://videfikri.com/api/textmaker/pubgmlogo/?text1=${encodeURIComponent(match[1])}&text2=X-Troid`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(lasiyasimg.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.JINN})

    }));


    Jimbroottan.addCommand({pattern: 'tbit ?(.*)', fromMe: true, dontAddCMDList: true}, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
      
      var topText, bottomText;
        if (match[1].includes(',')) {
            var split = match[1].split(',');
            bottomText = split[1];
            topText = split[0];
    }
    
        var webimage = await axios.get(`https://videfikri.com/api/textmaker/8bit/?text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })
    
        await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.JINN})
    
        }));

        Jimbroottan.addCommand({pattern: 'tbt ?(.*)', fromMe: true, dontAddCMDList: true}, (async (message, match) => {

            if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
          
          var topText, bottomText;
            if (match[1].includes(',')) {
                var split = match[1].split(',');
                bottomText = split[1];
                topText = split[0];
        }
        
            var webimage = await axios.get(`https://videfikri.com/api/textmaker/bf4/?text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })
        
            await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.JINN})
        
            }));




}


if (Config.WORKTYPE == 'public') {


    Jimbroottan.addCommand({ pattern: 'tpack ?(.*)', fromMe: false,dontAddCMDList: true }, (async (message, match) => {
        await message.sendMessage(Desk);
        
    }));

    Jimbroottan.addCommand({ pattern: 'tmug ?(.*)', fromMe: false,dontAddCMDList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(Lang.NEED_WORD);
    
        var lasiyasimg = await axios.get(`https://videfikri.com/api/textmaker/candlemug/?text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
    
        await message.sendMessage(Buffer.from(lasiyasimg.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.JINN})
    
    }));
    
    Jimbroottan.addCommand({ pattern: 'tlove ?(.*)', fromMe: false,dontAddCMDList: true }, (async (message, match) => {
    
        if (match[1] === '') return await message.sendMessage(Lang.NEED_WORD);
    
        var lasiyasimg = await axios.get(`https://videfikri.com/api/textmaker/lovemsg/?text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
    
        await message.sendMessage(Buffer.from(lasiyasimg.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.JINN})
    
    }));
    
    Jimbroottan.addCommand({ pattern: 'tnaru ?(.*)', fromMe: false,dontAddCMDList: true }, (async (message, match) => {
    
        if (match[1] === '') return await message.sendMessage(Lang.NEED_WORD);
    
        var lasiyasimg = await axios.get(`https://videfikri.com/api/textmaker/narutobanner/?text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
    
        await message.sendMessage(Buffer.from(lasiyasimg.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.JINN})
    
    }));
    
    Jimbroottan.addCommand({ pattern: 'tgrass ?(.*)', fromMe: false,dontAddCMDList: true }, (async (message, match) => {
    
        if (match[1] === '') return await message.sendMessage(Lang.NEED_WORD);
    
        var lasiyasimg = await axios.get(`https://videfikri.com/api/textmaker/paperonglass/?text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
    
        await message.sendMessage(Buffer.from(lasiyasimg.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.JINN})
    
    }));
    
    Jimbroottan.addCommand({ pattern: 'tsky ?(.*)', fromMe: false,dontAddCMDList: true }, (async (message, match) => {
    
        if (match[1] === '') return await message.sendMessage(Lang.NEED_WORD);
    
        var lasiyasimg = await axios.get(`https://videfikri.com/api/textmaker/shadowtext/?text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
    
        await message.sendMessage(Buffer.from(lasiyasimg.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.JINN})
    
    }));
    
    Jimbroottan.addCommand({ pattern: 'tcof ?(.*)', fromMe: false,dontAddCMDList: true }, (async (message, match) => {
    
        if (match[1] === '') return await message.sendMessage(Lang.NEED_WORD);
    
        var lasiyasimg = await axios.get(`https://videfikri.com/api/textmaker/coffeecup/?text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
    
        await message.sendMessage(Buffer.from(lasiyasimg.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.JINN})
    
    }));
    
    Jimbroottan.addCommand({ pattern: 'tneon ?(.*)', fromMe: false,dontAddCMDList: true }, (async (message, match) => {
    
        if (match[1] === '') return await message.sendMessage(Lang.NEED_WORD);
    
        var lasiyasimg = await axios.get(`https://videfikri.com/api/textmaker/glowingneon/?text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
    
        await message.sendMessage(Buffer.from(lasiyasimg.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.JINN})
    
    }));
    
    Jimbroottan.addCommand({ pattern: 'tneon ?(.*)', fromMe: false,dontAddCMDList: true }, (async (message, match) => {
    
        if (match[1] === '') return await message.sendMessage(Lang.NEED_WORD);
    
        var lasiyasimg = await axios.get(`https://videfikri.com/api/textmaker/pubgmlogo/?text1=${encodeURIComponent(match[1])}&text2=X-Troid`, { responseType: 'arraybuffer' })
    
        await message.sendMessage(Buffer.from(lasiyasimg.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.JINN})
    
    }));
    
    
    Jimbroottan.addCommand({pattern: 'tbit ?(.*)', fromMe: false, dontAddCMDList: true}, (async (message, match) => {
    
        if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
      
      var topText, bottomText;
        if (match[1].includes(',')) {
            var split = match[1].split(',');
            bottomText = split[1];
            topText = split[0];
    }
    
        var webimage = await axios.get(`https://videfikri.com/api/textmaker/8bit/?text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })
    
        await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.JINN})
    
        }));
    
        Jimbroottan.addCommand({pattern: 'tbt ?(.*)', fromMe: false, dontAddCMDList: true}, (async (message, match) => {
    
            if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
          
          var topText, bottomText;
            if (match[1].includes(',')) {
                var split = match[1].split(',');
                bottomText = split[1];
                topText = split[0];
        }
        
            var webimage = await axios.get(`https://videfikri.com/api/textmaker/bf4/?text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })
        
            await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.JINN})
        
            }));
        }    
