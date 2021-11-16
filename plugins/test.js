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

        {buttonId: 'id1', buttonText: {displayText: ' » » 𝐌 𝐄 𝐍 𝐔 « « \n\n\n Failed to load \n '}, type: 1},
        {buttonId: 'id2', buttonText: {displayText: ' » » 𝐋 𝐈 𝐒 𝐓 « « \n\n\n ༺࿀࿉ ━━━━ ●◆ 🧞‍♂️ ◆● ━━━━ ࿉࿁༻ \n\n we are noт reѕponѕιвle ғor any conѕeqυenceѕ тнaт мay arιѕe ғroм υѕe or мιѕυѕe oғ вoт, yoυ are reѕponѕιвle ғor all conѕeqυenceѕ alѕo тнe reѕponѕιвιlιтy oғ ѕнarιng pнoтoѕ, vιdeoѕ, ѕтιcĸerѕ eтc are yoυrѕ \n\n ༺࿀࿉ ━━━━ ●◆ 🧞‍♂️ ◆● ━━━━ ࿉࿁༻ \n © ᴛʜᴇ_ʀᴇᴀʟ_ᴍɪᴋʜᴀɪᴇʟ \n\n *🍇 Command:* .rename \n*🍷 Description:*  _change group name_ \n\n *🍇 Command:* .audio \n*🍷 Description:*  _Youtube Audio Downloader_ \n\n *🍇 Command:* .audio \n *🍷 Description:*  _Youtube Audio Downloader_ \n\n *🍇 Command:* .mp3\n *🍷 Description:*  _Converts video to mp3._ \n\n* 🍇 Command:* .photo\n*🍷 Description:*  _Converts the sticker to a photo._ \n\n *🍇 Command:* .mp4\n\n *🍇 Command:* .doc \n\n *🍷 Description:* _CONVERT TO DOCUMENT AND ADD GIVEN NAME_ \n💬 Example:* ```.doc jimbrootan *replace Jimbrootan with desired name*```\n\n *🍇 Command:* .dict \n *🍷 Description:*  _Use it as a dictionary.\n Eg: .dict en_US;lead For supporting languages send *.lngcode*_ \n\n *🍇 Command:* .ffmpeg \n*🍷 Description:*  _Applies the desired ffmpeg filter to the video.\n ⌨️ Example: .ffmpeg fade=in:0:30_ \n\n *🍇 Command:* .getpp \n\n *🍇 Command:* .welcome \n *🍷 Description:*  _It sets the welcome message. If you leave it blank it shows the welcome message._ \n\n *🍇 Command:* .goodbye \n *🍷 Description:*  _Sets the goodbye message. If you leave blank, it shows the goodbye message._ \n\n *🍇 Command:* .help \n *🍷 Description:*  _Gives information about using the bot from the Help menu._ \n\n *🍇 Command:* .anime \n *🍷 Description:*  _```Send Random Anime Wallpapers!```_ \n\n*🍇 Command:* .meme \n *🍷 Description:*  _Photo memes you replied to._ \n\n*🍇 Command:* .menu \n*🍷 Description:*  _show Button message menu_ \n\n*🍇 Command:* .moretxt \n *🍷 Description:*  _more txtit commands_ \n\n *🍇 Command:* .ffire \n *🍷 Description:*  _add your text to random freefire logo_ \n\n *🍇 Command:* .emo \n *🍷 Description:*  _emogi to png_ \n\n *🍇 Command:* .song \n *🍷 Description:*  _Instagram youtube downloader_ \n\n *🍇 Command:* .notes \n *🍷 Description:*  _Shows all your existing notes._ \n\n *🍇 Command:* .save \n *🍷 Description:*  _Reply a message and type .save or just use .save <Your note> without replying_ \n\n *🍇 Command:* .deleteNotes \n\n *🍷 Description:*  _Deletes *all* your saved notes._ \n *🍇 Command:* .ocr \n *🍷 Description:*  _Reads the text on the photo you have replied._ \n\n *🍇 Command:* .play \n *🍷 Description:*  _Uploads the song you wrote._ \n\n *🍇 Command:* .playstore \n *🍷 Description:*  _Get app details from play store._ \n\n *🍇 Command:* .jid \n *🍷 Description:*  _Giving users JID._ \n\n *🍇 Command:* .removebg \n *🍷 Description:*  _Removes the background of the photos._ \n\n *🍇 Command:* .report \n *🍷 Description:*  _Sends reports to group admins._ *🍇 Command:* .rules \n *🍷 Description:*  _Shows the Group rules_ \n\n *🍇 Command:* .setrules \n\n *🍷 Description:*  _It sets the Rule message..\n *Example:* _.setrules No Links#No Spamming__ \n\n *🍇 Command:* .trt \n *🍷 Description:* _It translates with Google Translate. You must reply any message._ \n 💬 Example:* .trt en ml (From english to malayalam) *🍇 Command:* .detectlang \n\n *🍷 Description:*  _Guess the language of the replied message._ *🍇 Command:* .currency \n\n *🍇 Command:* .tts \n *🍷 Description:*  _It converts text to sound._ \n\n *🍇 Command:* .dcsong \n *🍷 Description:*  _Uploads the song you wrote._ \n\n *🍇 Command:* .video \n *🍷 Description:*  _Downloads video from YouTube._ \n\n *🍇 Command:* .yt \n *🍷 Description:*  _It searchs on YouTube._ \n\n *🍇 Command:* .wiki \n\n *🍷 Description:*  _Searches query on Wikipedia._\n\n *🍇 Command:* .img \n\n *🍷 Description:*  _Searches for related pics on Google._ \n\n *🍇 Command:* .2img \n *🍷 Description:*  _Searches for related pics on Google._ \n\n *🍇 Command:* .sing \n\n *🍇 Command:* .github \n *🍷 Description:*  _Collects github information from the given username.\n ⌨️ Example: .github Mikhaiel_ \n\n *🍇 Command:* .owner \n *🍷 Description:*  _get the original number of creator_ \n\n *🍇 Command:* .lyric \n\n *🍷 Description:*  _Finds the lyrics of the song._ \n\n *🍇 Command:* .sing \n *🍷 Description:*  _Sings the song you wrote._ \n\n *🍇 Command:* .covid \n *🍷 Description:*  _Shows the daily and overall covid table of more than 15 countries._ \n\n *🍇 Command:* .find \n\n *🍇 Command:* .pinsta \n *🍷 Description:*  _instagram profile_ \n\n *🍇 Command:* .animesay \n *🍷 Description:*  _It writes the text inside the banner the anime girl is holding_ \n\n *🍇 Command:* .changesay \n *🍷 Description:*  _Turns the text into the change my mind poster._ \n\n *🍇 Command:* .trumpsay \n *🍷 Description:*  _Converts the text to Trumps tweet._ \n\n *🍇 Command:* .music \n *🍷 Description:*  _Download song as document_ \n\n *🍇 Command:* .sticker \n *🍷 Description:*  _It converts your replied photo or video to sticker._ \n\n *🍇 Command:* .alive \n *🍷 Description:*  _Does bot work?_ \n\n *🍇 Command:* .tagadmin \n *🍷 Description:*  _Tags group admins._ \n\n *🍇 Command:* .tblend \n *🍷 Description:*  _Applies the selected TBlend effect to videos._ \n\n *🍇 Command:* .main \n *🍷 Description:*  _Menu list_ \n\n *🍇 Command:* .txtit \n *🍷 Description:*  _Shows text to image tools with unlimited access._ \n *🍇 Command:* .tpack \n *🍇 Command:* .tmug \n *🍇 Command:* .tlove \n *🍇 Command:* .tnaru \n *🍇 Command:* .tgrass \n *🍇 Command:* .tsky \n *🍇 Command:* .tcof \n *🍇 Command:* .tneon \n *🍇 Command:* .tneon \n *🍇 Command:* .tbit \n *🍇 Command:* .tbt \n *🍇 Command:* .ttp \n *🍷 Description:*  _Converts text to plain painting._ \n\n *🍇 Command:* .attp \n *🍷 Description:*  _Adds rainbow effect to the text as a sticker._ \n\n *🍇 Command:* .U \n *🍷 Description:*  _Converts audio to sound recording._ \n\n*🍇 Command:* .unvoice\n*🍷 Description:*  _Converts audio to sound recording._ \n\n*🍇 Command:* .bgm \n*🍷 Description:* _turn on and turn of bgm. -bot owner command_ \n💬 Example:* .bgm on / off \n\n *🍇 Command:* .theri \n *🍷 Description:* _to block/remove members if they use specified words given in THERI_LIST_ \n 💬 Example:* for pm .theri pm no / pm yes \n for group .theri gp no / gp yes \n\n *🍇 Command:* .bgm \n *🍷 Description:* _change reply message BGM mode_ \n\n 💬 Example:* .bgm one / two \n\n *🍇 Command:* .antilink \n *🍷 Description:* _Activates the Antilink tool._ \n💬 Example:* .antilink on / off \n\n *🍇 Command:* .mlink \n *🍷 Description:* _.antilink does not ban all links but mlink does_ \n💬 Example:* .mlink on / off \n\n *🍇 Command:* .autosticker \n *🍷 Description:* _to turn on and off auto sticker_ \n 💬 Example:* .autosticker on / off \n\n *🍇 Command:* .mp4 \n*🍷 Description:*  _Direct Video Downloader_ \n\n*🍇 Command:* .speedtest \n*🍷 Description:*  _Measures Download and Upload speed._ \n\n *🍇 Command:* .ping \n *🍷 Description:*  _Measures your ping._ \n\n*🍇 Command:* .short \n*🍷 Description:*  _Shorten the long link._ \n\n*🍇 Command:* .calc \n*🍷 Description:*  _Performs simple math operations._ \n\n *🍇 Command:* .whois\n*🍷 Description:*  _Displays metadata data of group or person._ \n\n*🍇 Command:* .ytv \n*🍷 Description:*  _video downloading links from youtube_ \n\n\n '}, type: 1},


      ]
      
      const buttonMessage = {
          contentText: ' 𝐇𝐄𝐘 𝐌𝐀𝐒𝐓𝐄𝐑 🧞‍♂️ : '+wish+' \n\n ᴛɪᴍᴇ : '+time+' \n\n ʙᴏᴛ ɴᴀᴍᴇ : '+Config.BOT_NAME+' \n\n ᴡᴏʀᴋ ᴛʏᴘᴇ : '+Config.WORKTYPE+'  \n\n\n 𝐏𝐑𝐄𝐒𝐒 𝐓𝐇𝐄 𝐁𝐔𝐓𝐓𝐎𝐍 𝐁𝐄𝐋𝐎𝐖 𝐓𝐎 𝐕𝐈𝐄𝐖 𝐌𝐘 𝐂𝐎𝐌𝐌𝐀𝐍𝐃𝐒 \n\n',
          footerText: '© Jɪᴍʙʀᴏᴏᴛᴀɴ Oғғɪᴄᴀʟ',
          buttons: buttons,
          headerType: 1
      }
      
      await message.client.sendMessage(message.jid, buttonMessage, MessageType.buttonsMessage)

}));
/
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

///
