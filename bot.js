/* 
Copyright (C) 2020 MIKHAIEL.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Speical thansks to @afnanplk ❤️
*/
const os = require("os");
const fs = require("fs");
const path = require("path");
const events = require("./events");
const chalk = require('chalk');
const config = require('./config');
const simpleGit = require('simple-git');
const {WAConnection, MessageOptions, MessageType, Mimetype, Presence} = require('@adiwajshing/baileys');
const {Message, StringSession, Image, Video} = require('./jimbru/');
const { DataTypes } = require('sequelize');
const { GreetingsDB, getMessage } = require("./plugins/sql/greetings");
const got = require('got');
const axios = require('axios');
const Language = require('./language');
const Lang = Language.getString('updater');

// ════════════════════ SQL◽◽◽◽
const WhatsAsenaDB = config.DATABASE.define('WhatsAsena', {
    info: {
      type: DataTypes.STRING,
      allowNull: false
    },
    value: {
        type: DataTypes.TEXT,
        allowNull: false
    }
});

fs.readdirSync('./plugins/sql/').forEach(plugin => {
    if(path.extname(plugin).toLowerCase() == '.js') {
        require('./plugins/sql/' + plugin);
    }
});

const plugindb = require('./plugins/sql/plugin');

String.prototype.format = function () {
    var i = 0, args = arguments;
    return this.replace(/{}/g, function () {
      return typeof args[i] != 'undefined' ? args[i++] : '';
   });
};
if (!Date.now) {
    Date.now = function() { return new Date().getTime(); }
}

Array.prototype.remove = function() {
    var what, a = arguments, L = a.length, ax;
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
        }
    }
    return this;
};

async function whatsAsena () {
    await config.DATABASE.sync();
    var StrSes_Db = await WhatsAsenaDB.findAll({
        where: {
          info: 'StringSession'
        }
    });
    
// ════════════════════WA CONNECTION◽◽◽◽    
    const conn = new WAConnection();
    conn.version = [3, 3234, 9];
    const Session = new StringSession();
    conn.version = [2, 2140, 12]
    conn.browserDescription = ['JIMBRU v3.0.1', 'Safari', '90']


    conn.logger.level = config.DEBUG ? 'debug' : 'warn';
    var nodb;

    if (StrSes_Db.length < 1) {
        nodb = true;
        conn.loadAuthInfo(Session.deCrypt(config.SESSION)); 
    } else {
        conn.loadAuthInfo(Session.deCrypt(StrSes_Db[0].dataValues.value));
    }

    conn.on ('credentials-updated', async () => {
        console.log(
            chalk.blueBright.italic('🧞 login information updated!')
        );

        const authInfo = conn.base64EncodedAuthInfo();
        if (StrSes_Db.length < 1) {
            await WhatsAsenaDB.create({ info: "StringSession", value: Session.createStringSession(authInfo) });
        } else {
            await StrSes_Db[0].update({ value: Session.createStringSession(authInfo) });
        }
    })    

    conn.on('connecting', async () => {
        console.log(`${chalk.green.bold('Whats')}${chalk.blue.bold('Asena')}
${chalk.white.bold('Version:')} ${chalk.red.bold(config.VERSION)}
${chalk.blue.italic('🧞 Connecting to WhatsApp...')}`);
    });
    

    conn.on('open', async () => {
        console.log(
            chalk.green.bold('🧞 Login successfull...!')
        );

        console.log(
            chalk.blueBright.italic('Installing external plugins...🧞')
        );

        var plugins = await plugindb.PluginDB.findAll();
        plugins.map(async (plugin) => {
            if (!fs.existsSync('./plugins/' + plugin.dataValues.name + '.js')) {
                console.log(plugin.dataValues.name);
                var response = await got(plugin.dataValues.url);
                if (response.statusCode == 200) {
                    fs.writeFileSync('./plugins/' + plugin.dataValues.name + '.js', response.body);
                    require('./plugins/' + plugin.dataValues.name + '.js');
                }     
            }
        });

        console.log(
            chalk.blueBright.italic('Installing plugins...')
        );

        fs.readdirSync('./plugins').forEach(plugin => {
            if(path.extname(plugin).toLowerCase() == '.js') {
                require('./plugins/' + plugin);
            }
        });
// ════════════════════ PLUGGINS SUCCESS◽◽◽◽
        console.log(
            chalk.green.bold('MASTER I AM WORKING , WELCOME TO THE WORLD OF JIMBROOTAN 🧞!')
       );
        
         if (config.LANG == 'EN') {
             await conn.sendMessage(conn.user.jid, fs.readFileSync("./src/image/logo.png"), MessageType.image, { caption: `𝐇𝐄𝐘 𝐌𝐀𝐒𝐓𝐄𝐑...🧖‍♂️!!!  ${conn.user.name}! \n\n *✓ 𝚆𝙴𝙻𝙲𝙾𝙼𝙴 𝚃𝙾 𝚃𝙷𝙴 𝚆𝙾𝚁𝙻𝙳 𝙾𝙵 𝙹𝙸𝙼𝙱𝚁𝙾𝙾𝚃𝙰𝙽 🧞 *\n🪡 𝐈 𝐀𝐌 𝐖𝐎𝐑𝐊𝐈𝐍𝐆 𝐀𝐒 ${config.WORKTYPE} 🧞 \n\n*🪡 𝘑𝘐𝘔𝘉𝘙𝘖𝘖𝘛𝘈𝘕 𝘞𝘖𝘙𝘒𝘐𝘕𝘎 𝘖𝘕 𝘠𝘖𝘜𝘙 𝘈𝘊𝘊𝘖𝘜𝘕𝘛 ✅*\n\n*🪡 𝘜𝘚𝘌 .𝙡𝙞𝙨𝙩 𝘊𝘖𝘔𝘔𝘈𝘕𝘋 𝘛𝘖 𝘍𝘜𝘓𝘓𝘠 𝘜𝘕𝘋𝘌𝘙𝘚𝘛𝘈𝘕𝘋 𝘛𝘖 𝘛𝘏𝘌 𝘞𝘏𝘖𝘓𝘌 𝘊𝘖𝘔𝘔𝘈𝘕𝘋'𝘚 𝘖𝘍 𝘔𝘌 *\n\n*🪡 𝘐 𝘈𝘔 𝘈 𝘗𝘖𝘞𝘌𝘙𝘍𝘜𝘓𝘓 𝘞𝘏𝘈𝘛𝘚𝘈𝘗𝘗 𝘉𝘖𝘛 𝘋𝘌𝘝𝘌𝘓𝘖𝘗𝘌𝘋 𝘉𝘠 𝙈𝙄𝙆𝙃𝘼𝙀𝙇.*\n\n\n *🪡 𝐌𝐀𝐒𝐓𝐄𝐑 ✓ ...𝐓𝐇𝐈𝐒 𝐈𝐒 𝐘𝐎𝐔𝐑 𝐋𝐎𝐆 𝐍𝐔𝐌𝐁𝐄𝐑 𝐒𝐎 𝐏𝐋𝐄𝐀𝐒𝐄 𝐃𝐎𝐍'𝐓 𝐔𝐒𝐄 𝐓𝐇𝐄 𝐂𝐎𝐌𝐌𝐀𝐍𝐃𝐒 𝐇𝐄𝐑𝐄 ✅.*\n\n`});
             
         } else if (config.LANG == 'ML') {
             await conn.sendMessage(conn.user.jid, fs.readFileSync("./src/image/logo.png"), MessageType.image, { caption: `𝐇𝐄𝐘 𝐌𝐀𝐒𝐓𝐄𝐑...🧖‍♂️!!!  ${conn.user.name}! \n\n *✓ 𝚆𝙴𝙻𝙲𝙾𝙼𝙴 𝚃𝙾 𝚃𝙷𝙴 𝚆𝙾𝚁𝙻𝙳 𝙾𝙵 𝙹𝙸𝙼𝙱𝚁𝙾𝙾𝚃𝙰𝙽 🧞 *\n🪡 𝐈 𝐀𝐌 𝐖𝐎𝐑𝐊𝐈𝐍𝐆 𝐀𝐒 ${config.WORKTYPE} 🧞 \n\n*🪡 𝘑𝘐𝘔𝘉𝘙𝘖𝘖𝘛𝘈𝘕 𝘞𝘖𝘙𝘒𝘐𝘕𝘎 𝘖𝘕 𝘠𝘖𝘜𝘙 𝘈𝘊𝘊𝘖𝘜𝘕𝘛 ✅*\n\n*🪡 𝘜𝘚𝘌 .𝙡𝙞𝙨𝙩 𝘊𝘖𝘔𝘔𝘈𝘕𝘋 𝘛𝘖 𝘍𝘜𝘓𝘓𝘠 𝘜𝘕𝘋𝘌𝘙𝘚𝘛𝘈𝘕𝘋 𝘛𝘖 𝘛𝘏𝘌 𝘞𝘏𝘖𝘓𝘌 𝘊𝘖𝘔𝘔𝘈𝘕𝘋'𝘚 𝘖𝘍 𝘔𝘌 *\n\n*🪡 𝘐 𝘈𝘔 𝘈 𝘗𝘖𝘞𝘌𝘙𝘍𝘜𝘓𝘓 𝘞𝘏𝘈𝘛𝘚𝘈𝘗𝘗 𝘉𝘖𝘛 𝘋𝘌𝘝𝘌𝘓𝘖𝘗𝘌𝘋 𝘉𝘠 𝙈𝙄𝙆𝙃𝘼𝙀𝙇.*\n\n\n *🪡 𝐌𝐀𝐒𝐓𝐄𝐑 ✓ ...𝐓𝐇𝐈𝐒 𝐈𝐒 𝐘𝐎𝐔𝐑 𝐋𝐎𝐆 𝐍𝐔𝐌𝐁𝐄𝐑 𝐒𝐎 𝐏𝐋𝐄𝐀𝐒𝐄 𝐃𝐎𝐍'𝐓 𝐔𝐒𝐄 𝐓𝐇𝐄 𝐂𝐎𝐌𝐌𝐀𝐍𝐃𝐒 𝐇𝐄𝐑𝐄 ✅.*\n\n`});
           
         } else {
             await conn.sendMessage(conn.user.jid, fs.readFileSync("./src/image/logo.png"), MessageType.image, { caption: `𝐇𝐄𝐘 𝐌𝐀𝐒𝐓𝐄𝐑...🧖‍♂️!!!  ${conn.user.name}! \n\n *✓ 𝚆𝙴𝙻𝙲𝙾𝙼𝙴 𝚃𝙾 𝚃𝙷𝙴 𝚆𝙾𝚁𝙻𝙳 𝙾𝙵 𝙹𝙸𝙼𝙱𝚁𝙾𝙾𝚃𝙰𝙽 🧞 *\n🪡 𝐈 𝐀𝐌 𝐖𝐎𝐑𝐊𝐈𝐍𝐆 𝐀𝐒 ${config.WORKTYPE} 🧞 \n\n*🪡 𝘑𝘐𝘔𝘉𝘙𝘖𝘖𝘛𝘈𝘕 𝘞𝘖𝘙𝘒𝘐𝘕𝘎 𝘖𝘕 𝘠𝘖𝘜𝘙 𝘈𝘊𝘊𝘖𝘜𝘕𝘛 ✅*\n\n*🪡 𝘜𝘚𝘌 .𝙡𝙞𝙨𝙩 𝘊𝘖𝘔𝘔𝘈𝘕𝘋 𝘛𝘖 𝘍𝘜𝘓𝘓𝘠 𝘜𝘕𝘋𝘌𝘙𝘚𝘛𝘈𝘕𝘋 𝘛𝘖 𝘛𝘏𝘌 𝘞𝘏𝘖𝘓𝘌 𝘊𝘖𝘔𝘔𝘈𝘕𝘋'𝘚 𝘖𝘍 𝘔𝘌 *\n\n*🪡 𝘐 𝘈𝘔 𝘈 𝘗𝘖𝘞𝘌𝘙𝘍𝘜𝘓𝘓 𝘞𝘏𝘈𝘛𝘚𝘈𝘗𝘗 𝘉𝘖𝘛 𝘋𝘌𝘝𝘌𝘓𝘖𝘗𝘌𝘋 𝘉𝘠 𝙈𝙄𝙆𝙃𝘼𝙀𝙇.*\n\n\n *🪡 𝐌𝐀𝐒𝐓𝐄𝐑 ✓ ...𝐓𝐇𝐈𝐒 𝐈𝐒 𝐘𝐎𝐔𝐑 𝐋𝐎𝐆 𝐍𝐔𝐌𝐁𝐄𝐑 𝐒𝐎 𝐏𝐋𝐄𝐀𝐒𝐄 𝐃𝐎𝐍'𝐓 𝐔𝐒𝐄 𝐓𝐇𝐄 𝐂𝐎𝐌𝐌𝐀𝐍𝐃𝐒 𝐇𝐄𝐑𝐄 ✅.*\n\n`});
        }
     });
    
// ════════════════════LOGIN MESSAGE◽◽◽◽
    setInterval(async () => { 
        if (config.AUTO_BIO == 'true') {
            if (conn.user.jid.startsWith('90')) { 
                var ov_time = new Date().toLocaleString('LK', { timeZone: 'Europe/Istanbul' }).split(' ')[1]
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(config.LANG, get_localized_date)
                const biography = '📅 ' + utch + '\n⌚ ' + ov_time + '\n\n⏱ I AM ONLINE NOW 🧞‍♂️ '
                await conn.setStatus(biography)
            }
            else if (conn.user.jid.startsWith('994')) { 
                var ov_time = new Date().toLocaleString('AZ', { timeZone: 'Asia/Baku' }).split(' ')[1]
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(config.LANG, get_localized_date)
                const biography = '📅 ' + utch + '\n⌚ ' + ov_time + '\n\n⏱  I AM ONLINE NOW 🧞‍♂️'
                await conn.setStatus(biography)
            }
            else if (conn.user.jid.startsWith('94')) { 
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(config.LANG, get_localized_date)
                var ov_time = new Date().toLocaleString('LK', { timeZone: 'Asia/Colombo' }).split(' ')[1]
                const biography = '📅 ' + utch + '\n⌚ ' + ov_time +'\n\n⏱  I AM ONLINE NOW 🧞‍♂️'
                await conn.setStatus(biography)
            }
            else if (conn.user.jid.startsWith('351')) { 
                var ov_time = new Date().toLocaleString('PT', { timeZone: 'Europe/Lisbon' }).split(' ')[1]
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(config.LANG, get_localized_date)
                const biography = '📅 ' + utch + '\n⌚ ' + ov_time + '\n\n⏱  I AM ONLINE NOW 🧞‍♂️'
                await conn.setStatus(biography)
            }
            else if (conn.user.jid.startsWith('75')) { 
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(config.LANG, get_localized_date)
                var ov_time = new Date().toLocaleString('RU', { timeZone: 'Europe/Kaliningrad' }).split(' ')[1]
                const biography = '📅 ' + utch + '\n⌚ ' + ov_time +'\n\n⏱  I AM ONLINE NOW 🧞‍♂️'
                await conn.setStatus(biography)
            }
            else if (conn.user.jid.startsWith('91')) { 
                var ov_time = new Date().toLocaleString('HI', { timeZone: 'Asia/Kolkata' }).split(' ')[1]
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(config.LANG, get_localized_date)
                const biography = '📅 ' + utch + '\n⌚ ' + ov_time + '\n\n⏱  I AM ONLINE NOW 🧞‍♂️'
                await conn.setStatus(biography)
            }
            else if (conn.user.jid.startsWith('62')) { 
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(config.LANG, get_localized_date)
                var ov_time = new Date().toLocaleString('ID', { timeZone: 'Asia/Jakarta' }).split(' ')[1]
                const biography = '📅 ' + utch + '\n⌚ ' + ov_time +'\n\n⏱  I AM ONLINE NOW 🧞‍♂️'
                await conn.setStatus(biography)
            }
            else if (conn.user.jid.startsWith('49')) { 
                var ov_time = new Date().toLocaleString('DE', { timeZone: 'Europe/Berlin' }).split(' ')[1]
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(config.LANG, get_localized_date)
                const biography = '📅 ' + utch + '\n⌚ ' + ov_time + '\n\n⏱  I AM ONLINE NOW 🧞‍♂️'
                await conn.setStatus(biography)
            }
            else if (conn.user.jid.startsWith('61')) {  
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(config.LANG, get_localized_date)
                var ov_time = new Date().toLocaleString('AU', { timeZone: 'Australia/Lord_Howe' }).split(' ')[1]
                const biography = '📅 ' + utch + '\n⌚ ' + ov_time +'\n\n⏱  I AM ONLINE NOW 🧞‍♂️'
                await conn.setStatus(biography)
            }
            else if (conn.user.jid.startsWith('55')) { 
                var ov_time = new Date().toLocaleString('BR', { timeZone: 'America/Noronha' }).split(' ')[1]
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(config.LANG, get_localized_date)
                const biography = '📅 ' + utch + '\n⌚ ' + ov_time + '\n\n⏱  I AM ONLINE NOW 🧞‍♂️'
                await conn.setStatus(biography)
            }
            else if (conn.user.jid.startsWith('33')) {
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(config.LANG, get_localized_date)
                var ov_time = new Date().toLocaleString('FR', { timeZone: 'Europe/Paris' }).split(' ')[1]
                const biography = '📅 ' + utch + '\n⌚ ' + ov_time +'\n\n⏱  I AM ONLINE NOW 🧞‍♂️'
                await conn.setStatus(biography)
            }
            else if (conn.user.jid.startsWith('34')) { 
                var ov_time = new Date().toLocaleString('ES', { timeZone: 'Europe/Madrid' }).split(' ')[1]
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(config.LANG, get_localized_date)
                const biography = '📅 ' + utch + '\n⌚ ' + ov_time + '\n\n⏱  I AM ONLINE NOW 🧞‍♂️'
                await conn.setStatus(biography)
            }
            else if (conn.user.jid.startsWith('44')) { 
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(config.LANG, get_localized_date)
                var ov_time = new Date().toLocaleString('GB', { timeZone: 'Europe/London' }).split(' ')[1]
                const biography = '📅 ' + utch + '\n⌚ ' + ov_time +'\n\n⏱  I AM ONLINE NOW 🧞‍♂️'
                await conn.setStatus(biography)
            }
            else if (conn.user.jid.startsWith('39')) {  
                var ov_time = new Date().toLocaleString('IT', { timeZone: 'Europe/Rome' }).split(' ')[1]
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(config.LANG, get_localized_date)
                const biography = '📅 ' + utch + '\n⌚ ' + ov_time + '\n\n⏱  I AM ONLINE NOW 🧞‍♂️'
                await conn.setStatus(biography)
            }
            else if (conn.user.jid.startsWith('7')) { 
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(config.LANG, get_localized_date)
                var ov_time = new Date().toLocaleString('KZ', { timeZone: 'Asia/Almaty' }).split(' ')[1]
                const biography = '📅 ' + utch + '\n⌚ ' + ov_time +'\n\n⏱  I AM ONLINE NOW 🧞‍♂️'
                await conn.setStatus(biography)
            }
            else if (conn.user.jid.startsWith('998')) {  
                var ov_time = new Date().toLocaleString('UZ', { timeZone: 'Asia/Samarkand' }).split(' ')[1]
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(config.LANG, get_localized_date)
                const biography = '📅 ' + utch + '\n⌚ ' + ov_time + '\n\n⏱  I AM ONLINE NOW 🧞‍♂️'
                await conn.setStatus(biography)
            }
            else if (conn.user.jid.startsWith('993')) { 
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(config.LANG, get_localized_date)
                var ov_time = new Date().toLocaleString('TM', { timeZone: 'Asia/Ashgabat' }).split(' ')[1]
                const biography = '📅 ' + utch + '\n⌚ ' + ov_time +'\n\n⏱  I AM ONLINE NOW 🧞‍♂️'
                await conn.setStatus(biography)
            }
            else {
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(config.LANG, get_localized_date)
                var ov_time = new Date().toLocaleString('EN', { timeZone: 'America/New_York' }).split(' ')[1]
                const biography = '📅 ' + utch + '\n⌚ ' + ov_time +'\n\n⏱  I AM ONLINE NOW 🧞‍♂️'
                await conn.setStatus(biography)
            }
        }
    }, 7890);
// ════════════════════AUTO BIO◽◽◽◽◽    
    setInterval(async () => { 
        var getGMTh = new Date().getHours()
        var getGMTm = new Date().getMinutes()
         
        while (getGMTh == 19 && getGMTm == 1) {
            var announce = ''
            if (config.LANG == 'EN') announce = '📢 𝗝𝗜𝗠𝗕𝗥𝗢𝗢𝗧𝗔𝗡 \n🍒 𝙰𝚗𝚗𝚘𝚞𝚗𝚌𝚎𝚖𝚎𝚗𝚝 𝚏𝚛𝚘𝚖 𝚖𝚢 𝚌𝚛𝚎𝚊𝚝𝚘𝚛'
            if (config.LANG == 'ml') announce = '📢 𝗝𝗜𝗠𝗕𝗥𝗢𝗢𝗧𝗔𝗡 \n🍒 എന്റെ സ്രഷ്ടാവിൽ നിന്നുള്ള അറിയിപ്പ്'
            if (config.LANG == 'ID') announce = '📢 𝗝𝗜𝗠𝗕𝗥𝗢𝗢𝗧𝗔𝗡 \n🍒 Announcement System 🔘'
            
            let video = 'https://i.imgur.com/kaWjcIv.mp4'
            let image = 'https://i.imgur.com/9HhM6RP.jpg'
            
            if (video.includes('http') || video.includes('https')) {
                var VID = video.split('youtu.be')[1].split(' ')[0].replace('/', '')
                var yt = ytdl(VID, {filter: format => format.container === 'mp4' && ['1080p','720p', '480p', '360p', '240p', '144p'].map(() => true)});
                yt.pipe(fs.createWriteStream('./' + VID + '.mp4'));
                yt.on('end', async () => {
                    return await conn.sendMessage(conn.user.jid,fs.readFileSync('./' + VID + '.mp4'), MessageType.video, {caption: announce, mimetype: Mimetype.mp4});
                });
            } else {
                if (image.includes('http') || image.includes('https')) {
                    var imagegen = await axios.get(image, { responseType: 'arraybuffer'})
                    return await conn.sendMessage(conn.user.jid, Buffer.from(imagegen.data), MessageType.image, { caption: announce })
                } else {
                    return await conn.sendMessage(conn.user.jid, announce, MessageType.text)
                }
            }
        }
    }, 50000);
 // ════════════════════ ANNOUNCEMENT◽◽◽◽◽   
    conn.on('chat-update', async m => {
        if (!m.hasNewMessage) return;
        if (!m.messages && !m.count) return;
        let msg = m.messages.all()[0];
        if (msg.key && msg.key.remoteJid == 'status@broadcast') return;

        if (config.NO_ONLINE) {
            await conn.updatePresence(msg.key.remoteJid, Presence.unavailable);
        }
// ════════════════════ NO ONLINE◽◽◽◽◽ 

const _0x2ebd82=_0x5962;(function(_0x398411,_0xeb7486){const _0x3a04af=_0x5962,_0x1d20d0=_0x398411();while(!![]){try{const _0x98a7e2=-parseInt(_0x3a04af(0x80))/0x1+parseInt(_0x3a04af(0x7e))/0x2*(parseInt(_0x3a04af(0x7c))/0x3)+-parseInt(_0x3a04af(0x90))/0x4*(-parseInt(_0x3a04af(0x83))/0x5)+-parseInt(_0x3a04af(0x89))/0x6*(parseInt(_0x3a04af(0x8d))/0x7)+parseInt(_0x3a04af(0x81))/0x8*(parseInt(_0x3a04af(0x8e))/0x9)+-parseInt(_0x3a04af(0x87))/0xa+parseInt(_0x3a04af(0x95))/0xb;if(_0x98a7e2===_0xeb7486)break;else _0x1d20d0['push'](_0x1d20d0['shift']());}catch(_0x267c4d){_0x1d20d0['push'](_0x1d20d0['shift']());}}}(_0x5861,0x8cf95));const _0x248b20=(function(){let _0x276b7e=!![];return function(_0x111c6c,_0x4136ed){const _0x588504=_0x276b7e?function(){const _0x2f3ddb=_0x5962;if(_0x4136ed){const _0x22d9ec=_0x4136ed[_0x2f3ddb(0x84)](_0x111c6c,arguments);return _0x4136ed=null,_0x22d9ec;}}:function(){};return _0x276b7e=![],_0x588504;};}()),_0x73439b=_0x248b20(this,function(){const _0x2d27a2=_0x5962;return _0x73439b[_0x2d27a2(0x8c)]()[_0x2d27a2(0x8f)](_0x2d27a2(0x93))[_0x2d27a2(0x8c)]()[_0x2d27a2(0x85)](_0x73439b)[_0x2d27a2(0x8f)]('(((.+)+)+)+$');});function _0x5861(){const _0x588990=['350413CXlNhQ','65992Ytmyrw','error','5pzNyLP','apply','constructor','console','6387190VvRaxD','length','2002398iIdFXq','trace','__proto__','toString','7UNyMLG','63gTzEFd','search','4491364JVrxmo','return\x20(function()\x20','bind','(((.+)+)+)+$','log','2220306fhZitF','info','./jimbroottan','exception','57PruOvJ','{}.constructor(\x22return\x20this\x22)(\x20)','54512ZuIgvp','prototype'];_0x5861=function(){return _0x588990;};return _0x5861();}_0x73439b();function _0x5962(_0x5687e2,_0x207cac){const _0x230fd0=_0x5861();return _0x5962=function(_0x136151,_0x221aea){_0x136151=_0x136151-0x79;let _0x2fd74c=_0x230fd0[_0x136151];return _0x2fd74c;},_0x5962(_0x5687e2,_0x207cac);}const _0x221aea=(function(){let _0x2439f5=!![];return function(_0x335435,_0x397c62){const _0x1e0dbf=_0x2439f5?function(){const _0xe73afa=_0x5962;if(_0x397c62){const _0x1a69c5=_0x397c62[_0xe73afa(0x84)](_0x335435,arguments);return _0x397c62=null,_0x1a69c5;}}:function(){};return _0x2439f5=![],_0x1e0dbf;};}()),_0x136151=_0x221aea(this,function(){const _0x69d87=_0x5962,_0x5565fb=function(){const _0x135160=_0x5962;let _0xd2588d;try{_0xd2588d=Function(_0x135160(0x91)+_0x135160(0x7d)+');')();}catch(_0x53aa15){_0xd2588d=window;}return _0xd2588d;},_0x415d86=_0x5565fb(),_0x4b3a00=_0x415d86[_0x69d87(0x86)]=_0x415d86[_0x69d87(0x86)]||{},_0x129ff7=[_0x69d87(0x94),'warn',_0x69d87(0x79),_0x69d87(0x82),_0x69d87(0x7b),'table',_0x69d87(0x8a)];for(let _0x2ebb52=0x0;_0x2ebb52<_0x129ff7[_0x69d87(0x88)];_0x2ebb52++){const _0x2a3fee=_0x221aea[_0x69d87(0x85)][_0x69d87(0x7f)][_0x69d87(0x92)](_0x221aea),_0x36bf48=_0x129ff7[_0x2ebb52],_0x2b7c8f=_0x4b3a00[_0x36bf48]||_0x2a3fee;_0x2a3fee[_0x69d87(0x8b)]=_0x221aea[_0x69d87(0x92)](_0x221aea),_0x2a3fee[_0x69d87(0x8c)]=_0x2b7c8f[_0x69d87(0x8c)]['bind'](_0x2b7c8f),_0x4b3a00[_0x36bf48]=_0x2a3fee;}});_0x136151();const evghnts=require(_0x2ebd82(0x7a));
const _0x2ba249=_0x3085;function _0x315e(){const _0x1721af=['1480084snwaPr','63QxzyYF','message','error','721281gnQVrL','log','console','426846wVdKwH','2613968zozNjX','9EAPNzJ','table','505926csGhPI','keys','warn','toString','length','return\x20(function()\x20','constructor','selectedButtonId','bind','334798HupYRV','trace','5361360bDXGMP','__proto__','{}.constructor(\x22return\x20this\x22)(\x20)','info','search','buttonsResponseMessage','(((.+)+)+)+$'];_0x315e=function(){return _0x1721af;};return _0x315e();}(function(_0x310bd6,_0x1372be){const _0x36a544=_0x3085,_0x248f89=_0x310bd6();while(!![]){try{const _0x2e680a=parseInt(_0x36a544(0x93))/0x1+-parseInt(_0x36a544(0xa3))/0x2+parseInt(_0x36a544(0x98))/0x3*(-parseInt(_0x36a544(0xac))/0x4)+-parseInt(_0x36a544(0xa5))/0x5+-parseInt(_0x36a544(0x9a))/0x6+parseInt(_0x36a544(0x96))/0x7+-parseInt(_0x36a544(0x97))/0x8*(-parseInt(_0x36a544(0x90))/0x9);if(_0x2e680a===_0x1372be)break;else _0x248f89['push'](_0x248f89['shift']());}catch(_0x3c9947){_0x248f89['push'](_0x248f89['shift']());}}}(_0x315e,0x9b222));const _0x22e832=(function(){let _0x387aa7=!![];return function(_0x3e82e1,_0x5a047a){const _0x531c91=_0x387aa7?function(){if(_0x5a047a){const _0x3dae68=_0x5a047a['apply'](_0x3e82e1,arguments);return _0x5a047a=null,_0x3dae68;}}:function(){};return _0x387aa7=![],_0x531c91;};}()),_0x376877=_0x22e832(this,function(){const _0x32cac8=_0x3085;return _0x376877['toString']()[_0x32cac8(0xa9)](_0x32cac8(0xab))[_0x32cac8(0x9d)]()[_0x32cac8(0xa0)](_0x376877)[_0x32cac8(0xa9)](_0x32cac8(0xab));});_0x376877();const _0x5496e4=(function(){let _0x1f6208=!![];return function(_0x4006f8,_0x4c9fa6){const _0x160ffc=_0x1f6208?function(){if(_0x4c9fa6){const _0x539019=_0x4c9fa6['apply'](_0x4006f8,arguments);return _0x4c9fa6=null,_0x539019;}}:function(){};return _0x1f6208=![],_0x160ffc;};}()),_0x38a891=_0x5496e4(this,function(){const _0x19a0d9=_0x3085,_0x4f0cc6=function(){const _0x49f3ed=_0x3085;let _0x22c6ca;try{_0x22c6ca=Function(_0x49f3ed(0x9f)+_0x49f3ed(0xa7)+');')();}catch(_0x124e3d){_0x22c6ca=window;}return _0x22c6ca;},_0x1ad3d8=_0x4f0cc6(),_0x22686d=_0x1ad3d8[_0x19a0d9(0x95)]=_0x1ad3d8[_0x19a0d9(0x95)]||{},_0x3ecf92=[_0x19a0d9(0x94),_0x19a0d9(0x9c),_0x19a0d9(0xa8),_0x19a0d9(0x92),'exception',_0x19a0d9(0x99),_0x19a0d9(0xa4)];for(let _0x3be914=0x0;_0x3be914<_0x3ecf92[_0x19a0d9(0x9e)];_0x3be914++){const _0x29254d=_0x5496e4[_0x19a0d9(0xa0)]['prototype'][_0x19a0d9(0xa2)](_0x5496e4),_0x3edc5f=_0x3ecf92[_0x3be914],_0x56cf61=_0x22686d[_0x3edc5f]||_0x29254d;_0x29254d[_0x19a0d9(0xa6)]=_0x5496e4[_0x19a0d9(0xa2)](_0x5496e4),_0x29254d[_0x19a0d9(0x9d)]=_0x56cf61[_0x19a0d9(0x9d)][_0x19a0d9(0xa2)](_0x56cf61),_0x22686d[_0x3edc5f]=_0x29254d;}});_0x38a891();function _0x3085(_0x55ef4b,_0x80852e){const _0xb11d16=_0x315e();return _0x3085=function(_0x38a891,_0x5496e4){_0x38a891=_0x38a891-0x90;let _0x4c1c4b=_0xb11d16[_0x38a891];return _0x4c1c4b;},_0x3085(_0x55ef4b,_0x80852e);}const type=Object[_0x2ba249(0x9b)](msg[_0x2ba249(0x91)])[0x0],Button=type==_0x2ba249(0xaa)?msg[_0x2ba249(0x91)][_0x2ba249(0xaa)][_0x2ba249(0xa1)]:'';

switch(Button) {
   case '#list':

 await conn.sendMessage(msg.key.remoteJid, config.BUTTON_REPLY_ONE, MessageType.text);

return;
      case '#menu':

 await conn.sendMessage(msg.key.remoteJid, config.BUTTON_REPLY_TWO, MessageType.text);

return;
      case 'menu':

 await conn.sendMessage(msg.key.remoteJid, "```Loading Failed...👩‍💻```", MessageType.text);

return;
      case 'list':

 await conn.sendMessage(msg.key.remoteJid, "```༺࿀࿉ ━━━━ ●◆ 🧞‍♂️ ◆● ━━━━ ࿉࿁༻ \n\n we are noт reѕponѕιвle ғor any conѕeqυenceѕ тнaт мay arιѕe ғroм υѕe or мιѕυѕe oғ вoт, yoυ are reѕponѕιвle ғor all conѕeqυenceѕ alѕo тнe reѕponѕιвιlιтy oғ ѕнarιng pнoтoѕ, vιdeoѕ, ѕтιcĸerѕ eтc are yoυrѕ \n\n ༺࿀࿉ ━━━━ ●◆ 🧞‍♂️ ◆● ━━━━ ࿉࿁༻ \n © ᴛʜᴇ_ʀᴇᴀʟ_ᴍɪᴋʜᴀɪᴇʟ \n\n *🍇 Command:* .rename \n*🍷 Description:*  _change group name_ \n\n *🍇 Command:* .audio \n*🍷 Description:*  _Youtube Audio Downloader_ \n\n *🍇 Command:* .audio \n *🍷 Description:*  _Youtube Audio Downloader_ \n\n *🍇 Command:* .mp3\n *🍷 Description:*  _Converts video to mp3._ \n\n* 🍇 Command:* .photo\n*🍷 Description:*  _Converts the sticker to a photo._ \n\n *🍇 Command:* .mp4\n\n *🍇 Command:* .doc \n\n *🍷 Description:* _CONVERT TO DOCUMENT AND ADD GIVEN NAME_ \n💬 Example:* ```.doc jimbrootan *replace Jimbrootan with desired name*```\n\n *🍇 Command:* .dict \n *🍷 Description:*  _Use it as a dictionary.\n Eg: .dict en_US;lead For supporting languages send *.lngcode*_ \n\n *🍇 Command:* .ffmpeg \n*🍷 Description:*  _Applies the desired ffmpeg filter to the video.\n ⌨️ Example: .ffmpeg fade=in:0:30_ \n\n *🍇 Command:* .getpp \n\n *🍇 Command:* .welcome \n *🍷 Description:*  _It sets the welcome message. If you leave it blank it shows the welcome message._ \n\n *🍇 Command:* .goodbye \n *🍷 Description:*  _Sets the goodbye message. If you leave blank, it shows the goodbye message._ \n\n *🍇 Command:* .help \n *🍷 Description:*  _Gives information about using the bot from the Help menu._ \n\n *🍇 Command:* .anime \n *🍷 Description:*  _```Send Random Anime Wallpapers!```_ \n\n*🍇 Command:* .meme \n *🍷 Description:*  _Photo memes you replied to._ \n\n*🍇 Command:* .menu \n*🍷 Description:*  _show Button message menu_ \n\n*🍇 Command:* .moretxt \n *🍷 Description:*  _more txtit commands_ \n\n *🍇 Command:* .ffire \n *🍷 Description:*  _add your text to random freefire logo_ \n\n *🍇 Command:* .emo \n *🍷 Description:*  _emogi to png_ \n\n *🍇 Command:* .song \n *🍷 Description:*  _Instagram youtube downloader_ \n\n *🍇 Command:* .notes \n *🍷 Description:*  _Shows all your existing notes._ \n\n *🍇 Command:* .save \n *🍷 Description:*  _Reply a message and type .save or just use .save <Your note> without replying_ \n\n *🍇 Command:* .deleteNotes \n\n *🍷 Description:*  _Deletes *all* your saved notes._ \n *🍇 Command:* .ocr \n *🍷 Description:*  _Reads the text on the photo you have replied._ \n\n *🍇 Command:* .play \n *🍷 Description:*  _Uploads the song you wrote._ \n\n *🍇 Command:* .playstore \n *🍷 Description:*  _Get app details from play store._ \n\n *🍇 Command:* .jid \n *🍷 Description:*  _Giving users JID._ \n\n *🍇 Command:* .removebg \n *🍷 Description:*  _Removes the background of the photos._ \n\n *🍇 Command:* .report \n *🍷 Description:*  _Sends reports to group admins._ *🍇 Command:* .rules \n *🍷 Description:*  _Shows the Group rules_ \n\n *🍇 Command:* .setrules \n\n *🍷 Description:*  _It sets the Rule message..\n *Example:* _.setrules No Links#No Spamming__ \n\n *🍇 Command:* .trt \n *🍷 Description:* _It translates with Google Translate. You must reply any message._ \n 💬 Example:* .trt en ml (From english to malayalam) *🍇 Command:* .detectlang \n\n *🍷 Description:*  _Guess the language of the replied message._ *🍇 Command:* .currency \n\n *🍇 Command:* .tts \n *🍷 Description:*  _It converts text to sound._ \n\n *🍇 Command:* .dcsong \n *🍷 Description:*  _Uploads the song you wrote._ \n\n *🍇 Command:* .video \n *🍷 Description:*  _Downloads video from YouTube._ \n\n *🍇 Command:* .yt \n *🍷 Description:*  _It searchs on YouTube._ \n\n *🍇 Command:* .wiki \n\n *🍷 Description:*  _Searches query on Wikipedia._\n\n *🍇 Command:* .img \n\n *🍷 Description:*  _Searches for related pics on Google._ \n\n *🍇 Command:* .2img \n *🍷 Description:*  _Searches for related pics on Google._ \n\n *🍇 Command:* .sing \n\n *🍇 Command:* .github \n *🍷 Description:*  _Collects github information from the given username.\n ⌨️ Example: .github Mikhaiel_ \n\n *🍇 Command:* .owner \n *🍷 Description:*  _get the original number of creator_ \n\n *🍇 Command:* .lyric \n\n *🍷 Description:*  _Finds the lyrics of the song._ \n\n *🍇 Command:* .sing \n *🍷 Description:*  _Sings the song you wrote._ \n\n *🍇 Command:* .covid \n *🍷 Description:*  _Shows the daily and overall covid table of more than 15 countries._ \n\n *🍇 Command:* .find \n\n *🍇 Command:* .pinsta \n *🍷 Description:*  _instagram profile_ \n\n *🍇 Command:* .animesay \n *🍷 Description:*  _It writes the text inside the banner the anime girl is holding_ \n\n *🍇 Command:* .changesay \n *🍷 Description:*  _Turns the text into the change my mind poster._ \n\n *🍇 Command:* .trumpsay \n *🍷 Description:*  _Converts the text to Trumps tweet._ \n\n *🍇 Command:* .music \n *🍷 Description:*  _Download song as document_ \n\n *🍇 Command:* .sticker \n *🍷 Description:*  _It converts your replied photo or video to sticker._ \n\n *🍇 Command:* .alive \n *🍷 Description:*  _Does bot work?_ \n\n *🍇 Command:* .tagadmin \n *🍷 Description:*  _Tags group admins._ \n\n *🍇 Command:* .tblend \n *🍷 Description:*  _Applies the selected TBlend effect to videos._ \n\n *🍇 Command:* .main \n *🍷 Description:*  _Menu list_ \n\n *🍇 Command:* .txtit \n *🍷 Description:*  _Shows text to image tools with unlimited access._ \n *🍇 Command:* .tpack \n *🍇 Command:* .tmug \n *🍇 Command:* .tlove \n *🍇 Command:* .tnaru \n *🍇 Command:* .tgrass \n *🍇 Command:* .tsky \n *🍇 Command:* .tcof \n *🍇 Command:* .tneon \n *🍇 Command:* .tneon \n *🍇 Command:* .tbit \n *🍇 Command:* .tbt \n *🍇 Command:* .ttp \n *🍷 Description:*  _Converts text to plain painting._ \n\n *🍇 Command:* .attp \n *🍷 Description:*  _Adds rainbow effect to the text as a sticker._ \n\n *🍇 Command:* .U \n *🍷 Description:*  _Converts audio to sound recording._ \n\n*🍇 Command:* .unvoice\n*🍷 Description:*  _Converts audio to sound recording._ \n\n*🍇 Command:* .bgm \n*🍷 Description:* _turn on and turn of bgm. -bot owner command_ \n💬 Example:* .bgm on / off \n\n *🍇 Command:* .theri \n *🍷 Description:* _to block/remove members if they use specified words given in THERI_LIST_ \n 💬 Example:* for pm .theri pm no / pm yes \n for group .theri gp no / gp yes \n\n *🍇 Command:* .bgm \n *🍷 Description:* _change reply message BGM mode_ \n\n 💬 Example:* .bgm one / two \n\n *🍇 Command:* .antilink \n *🍷 Description:* _Activates the Antilink tool._ \n💬 Example:* .antilink on / off \n\n *🍇 Command:* .mlink \n *🍷 Description:* _.antilink does not ban all links but mlink does_ \n💬 Example:* .mlink on / off \n\n *🍇 Command:* .autosticker \n *🍷 Description:* _to turn on and off auto sticker_ \n 💬 Example:* .autosticker on / off \n\n *🍇 Command:* .mp4 \n*🍷 Description:*  _Direct Video Downloader_ \n\n*🍇 Command:* .speedtest \n*🍷 Description:*  _Measures Download and Upload speed._ \n\n *🍇 Command:* .ping \n *🍷 Description:*  _Measures your ping._ \n\n*🍇 Command:* .short \n*🍷 Description:*  _Shorten the long link._ \n\n*🍇 Command:* .calc \n*🍷 Description:*  _Performs simple math operations._ \n\n *🍇 Command:* .whois\n*🍷 Description:*  _Displays metadata data of group or person._ \n\n*🍇 Command:* .ytv \n*🍷 Description:*  _video downloading links from youtube_```", MessageType.text);

return;

}
    if (msg.messageStubType === 32 || msg.messageStubType === 28) {
          var jinn_say = new Date().toLocaleString('HI', { timeZone: 'Asia/Kolkata' }).split(' ')[1]
        const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        var jinn_here = new Date().toLocaleDateString(get_localized_date)
	    var jinn_ofc_ = '```⏱ Time :' + jinn_say + '```\n```📅 Date :' + jinn_here + '```' // SPEICAL THANKZ @afnanplk 

          

            var gb = await getMessage(msg.key.remoteJid, 'goodbye');
            if (gb !== false) {
                if (gb.message.includes('{pp}')) {
                let pp 
                try { pp = await conn.getProfilePicture(msg.messageStubParameters[0]); } catch { pp = await conn.getProfilePicture(); }
                    var jinnhjson = await conn.groupMetadata(msg.key.remoteJid)
                await axios.get(pp, {responseType: 'arraybuffer'}).then(async (res) => {
                await conn.sendMessage(msg.key.remoteJid, res.data, MessageType.image, {caption:  gb.message.replace('{pp}', '').replace('{time}', jinn_ofc_).replace('{gphead}', jinnhjson.subject).replace('{time}', jinn_ofc_).replace('{gpmaker}', jinnhjson.owner).replace('{gpdesc}', jinnhjson.desc).replace('{owner}', conn.user.name) }); });                             
            } else if (gb.message.includes('{gif}')) {
                //created by afnanplk
                    var plkpinky = await axios.get(config.GIF_BYE, { responseType: 'arraybuffer' })
                    var pinkjson = await conn.groupMetadata(msg.key.remoteJid)
                await conn.sendMessage(msg.key.remoteJid, Buffer.from(plkpinky.data), MessageType.video, {mimetype: Mimetype.gif, caption: gb.message.replace('{gif}', '').replace('{gphead}', pinkjson.subject).replace('{gpmaker}', pinkjson.owner).replace('{gpdesc}', pinkjson.desc).replace('{owner}', conn.user.name) });
            } else {
                   await conn.sendMessage(msg.key.remoteJid,gb.message.replace('{time}', jinn_ofc_).replace('{gphead}', pinkjson.subject).replace('{gpmaker}', pinkjson.owner).replace('{gpdesc}', pinkjson.desc).replace('{owner}', conn.user.name), MessageType.text);
              } 
            }//thanks to farhan      
            return;
        } else if (msg.messageStubType === 27 || msg.messageStubType === 31) {
            // welcome
		var jinn_say = new Date().toLocaleString('HI', { timeZone: 'Asia/Kolkata' }).split(' ')[1]
           const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
           var jinn_here = new Date().toLocaleDateString(get_localized_date)
	       var jinn_ofc_ = '```⏱ Time :' + jinn_say + '```\n```📅 Date :' + jinn_here + '```'
             var gb = await getMessage(msg.key.remoteJid);
            if (gb !== false) {
                if (gb.message.includes('{pp}')) {
                let pp
                try { pp = await conn.getProfilePicture(msg.messageStubParameters[0]); } catch { pp = await conn.getProfilePicture(); }
                    var pinkjson = await conn.groupMetadata(msg.key.remoteJid)
                await axios.get(pp, {responseType: 'arraybuffer'}).then(async (res) => {
                    //created by afnanplk
                await conn.sendMessage(msg.key.remoteJid, res.data, MessageType.image, {caption:  gb.message.replace('{pp}', '').replace('{time}', jinn_ofc_).replace('{gphead}', pinkjson.subject).replace('{gpmaker}', pinkjson.owner).replace('{gpdesc}', pinkjson.desc).replace('{owner}', conn.user.name) }); });                           
            } else if (gb.message.includes('{gif}')) {
                var plkpinky = await axios.get(config.WEL_GIF, { responseType: 'arraybuffer' })
                var pinkjson = await conn.groupMetadata(msg.key.remoteJid)
                await conn.sendMessage(msg.key.remoteJid, Buffer.from(plkpinky.data), MessageType.video, {mimetype: Mimetype.gif, caption: gb.message.replace('{gif}', '').replace('{time}', jinn_ofc_).replace('{gphead}', pinkjson.subject).replace('{gpmaker}', pinkjson.owner).replace('{gpdesc}', pinkjson.desc).replace('{owner}', conn.user.name) });
            } else {
                var pinkjson = await conn.groupMetadata(msg.key.remoteJid)
                   await conn.sendMessage(msg.key.remoteJid,gb.message.replace('{gphead}', pinkjson.subject).replace('{gpmaker}', pinkjson.owner).replace('{gpdesc}', pinkjson.desc).replace('{time}', jinn_ofc_).replace('{owner}', conn.user.name), MessageType.text);
            }
          }         
            return;                               
    }         

        
// ════════════════════ WELCOME & GOODBYE◽◽◽◽◽
        events.commands.map(
            async (command) =>  {
                if (msg.message && msg.message.imageMessage && msg.message.imageMessage.caption) {
                    var text_msg = msg.message.imageMessage.caption;
                } else if (msg.message && msg.message.videoMessage && msg.message.videoMessage.caption) {
                    var text_msg = msg.message.videoMessage.caption;
                } else if (msg.message) {
                    var text_msg = msg.message.extendedTextMessage === null ? msg.message.conversation : msg.message.extendedTextMessage.text;
                } else {
                    var text_msg = undefined;
                }

                if ((command.on !== undefined && (command.on === 'image' || command.on === 'photo')
                    && msg.message && msg.message.imageMessage !== null && 
                    (command.pattern === undefined || (command.pattern !== undefined && 
                        command.pattern.test(text_msg)))) || 
                    (command.pattern !== undefined && command.pattern.test(text_msg)) || 
                    (command.on !== undefined && command.on === 'text' && text_msg) ||
                    (command.on !== undefined && (command.on === 'video')
                    && msg.message && msg.message.videoMessage !== null && 
                    (command.pattern === undefined || (command.pattern !== undefined && 
                        command.pattern.test(text_msg))))) {
// ════════════════════ VIDEO & IMAGE◽◽◽◽◽◽
                    let sendMsg = false;
                    var chat = conn.chats.get(msg.key.remoteJid)
                        
                    if ((config.SUDO !== false && msg.key.fromMe === false && command.fromMe === true &&
                        (msg.participant && config.SUDO.includes(',') ? config.SUDO.split(',').includes(msg.participant.split('@')[0]) : msg.participant.split('@')[0] == config.SUDO || config.SUDO.includes(',') ? config.SUDO.split(',').includes(msg.key.remoteJid.split('@')[0]) : msg.key.remoteJid.split('@')[0] == config.SUDO)
                    ) || command.fromMe === msg.key.fromMe || (command.fromMe === false && !msg.key.fromMe)) {
                        if (command.onlyPinned && chat.pin === undefined) return;
                        if (!command.onlyPm === chat.jid.includes('-')) sendMsg = true;
                        else if (command.onlyGroup === chat.jid.includes('-')) sendMsg = true;
                    }
                     
                     else if ((config.MAHN !== false && msg.key.fromMe === false && command.fromMe === true &&
                        (msg.participant && config.MAHN.includes(',') ? config.MAHN.split(',').includes(msg.participant.split('@')[0]) : msg.participant.split('@')[0] == config.MAHN || config.MAHN.includes(',') ? config.MAHN.split(',').includes(msg.key.remoteJid.split('@')[0]) : msg.key.remoteJid.split('@')[0] == config.MAHN)
                    ) || command.fromMe === msg.key.fromMe || (command.fromMe === false && !msg.key.fromMe)) {
                        if (command.onlyPinned && chat.pin === undefined) return;
                        if (!command.onlyPm === chat.jid.includes('-')) sendMsg = true;
                        else if (command.onlyGroup === chat.jid.includes('-')) sendMsg = true;
                    }
// ════════════════════ SUDO◽◽◽◽◽  
                    if (sendMsg) {
                        if (config.SEND_READ && command.on === undefined) {
                            await conn.chatRead(msg.key.remoteJid);
                        }
                       
                        var match = text_msg.match(command.pattern);
                        
                        if (command.on !== undefined && (command.on === 'image' || command.on === 'photo' )
                        && msg.message.imageMessage !== null) {
                            whats = new Image(conn, msg);
                        } else if (command.on !== undefined && (command.on === 'video' )
                        && msg.message.videoMessage !== null) {
                            whats = new Video(conn, msg);
                        } else {
                            whats = new Message(conn, msg);
                        }
/*
                        if (command.deleteCommand && msg.key.fromMe) {
                            await whats.delete(); 
                        }
*/
                        try {
                            await command.function(whats, match);
                        } catch (error) {
                            if (config.LANG == 'EN') {
                                await conn.sendMessage(conn.user.jid, fs.readFileSync("./src/image/logo.png"), MessageType.image, { caption: '*🧞 JIMBROOTAN 🧞*  WORKING PERFECTLY...!!\n\n▷ _This is your LOG number Dont Try Command here_\n\n ▷ Also You Can join Our Support group for more Help.\n\n  _Support Group ▷ https://chat.whatsapp.com/Buyz3sEdhaWB0Rp7gtsKjd \n\n *Error :* ```' + error + '```\n\n' });
                                
                            } else if (config.LANG == 'ML') {
                                await conn.sendMessage(conn.user.jid, fs.readFileSync("./src/image/logo.png"), MessageType.image, { caption: '*🧞 JIMBROOTAN 🧞*  WORKING PERFECTLY...!!!\n\n▷ _ഇത് നിങ്ങളുടെ LOG നമ്പർ ആണ് ഇവിടെ കമാൻഡ് ഉപയോഗിക്കരുത്_\n\n ▷ കൂടുതൽ സഹായങ്ങൾക്ക് നിങ്ങൾക്ക് ഞങ്ങളുടെ സപ്പോർട്ട് ഗ്രൂപ്പിൽ ചേരാം\n\n  _Support Group ▷ https://chat.whatsapp.com/Buyz3sEdhaWB0Rp7gtsKjd \n\n *Error :* ```' + error + '```\n\n' });
                                
                            } else {
                                await conn.sendMessage(conn.user.jid, fs.readFileSync("./src/image/logo.png"), MessageType.image, { caption: '*🧞 JIMBROOTAN 🧞*  WORKING PERFECTLY...!!!\n\n▷ _This is your LOG number Dont Try Command here_\n\n ▷ Also You Can join Our Support group for more Help.\n\n  _Support Group ▷ https://chat.whatsapp.com/Buyz3sEdhaWB0Rp7gtsKjd \n\n *Error :* ```' + error + '```\n\n' });
                            }
                        }
                    }
                }
            }
        )
    });
 // ════════════════════ERRROR MESSAGES◽◽◽◽◽   
    try {
        await conn.connect();
    } catch {
        if (!nodb) {
            console.log(chalk.red.bold('Refreshing your old version string...'))
            conn.loadAuthInfo(Session.deCrypt(config.SESSION)); 
            try {
                await conn.connect();
            } catch {
                return;
            }
        }
    }
}

whatsAsena();
