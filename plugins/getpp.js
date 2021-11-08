const jimbru = require('../events');
const { MessageType, Mimetype, GroupSettingChange, MessageOptions } = require('@adiwajshing/baileys');
const Axios = require('axios');
const CON = require('../config')
let WType = CON.WORKTYPE == 'public' ? false : true

var DESC = ''
if (CON.LANG == 'EN') DESC == 'To get profile picture of user or group'
if (CON.LANG == 'ML') DESC == 'ഉപയോക്താവിന്റെയോ ഗ്രൂപ്പിന്റെയോ പ്രൊഫൈൽ ചിത്രം ലഭിക്കാൻ'

jimbru.addCommand({ pattern: 'getpp$', fromMe: WType, desc: DESC}, (async (message, match) => { 

            var ppUrl = await message.client.getProfilePicture(message.jid)
                const resim = await Axios.get(ppUrl, {responseType: 'arraybuffer'})
                await message.sendMessage(
                    Buffer.from(resim.data), 
                    MessageType.image, 
                    { mimetype: Mimetype.png }
            );
     }));
