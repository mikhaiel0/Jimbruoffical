/* 
Copyright (C) 2020 MIKHAIEL.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
WhatsAsena - jimbrootan
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
                const biography = '📅 ' + utch + '\n⌚ ' + ov_time + '\n\n⏱ Auto Bio By...powered By Jimbrootan'
                await conn.setStatus(biography)
            }
            else if (conn.user.jid.startsWith('994')) { 
                var ov_time = new Date().toLocaleString('AZ', { timeZone: 'Asia/Baku' }).split(' ')[1]
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(config.LANG, get_localized_date)
                const biography = '📅 ' + utch + '\n⌚ ' + ov_time + '\n\n⏱ Auto Bio By ...powered By Jimbrootan'
                await conn.setStatus(biography)
            }
            else if (conn.user.jid.startsWith('94')) { 
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(config.LANG, get_localized_date)
                var ov_time = new Date().toLocaleString('LK', { timeZone: 'Asia/Colombo' }).split(' ')[1]
                const biography = '📅 ' + utch + '\n⌚ ' + ov_time +'\n\n⏱ Auto Bio B...powered By Jimbrootan'
                await conn.setStatus(biography)
            }
            else if (conn.user.jid.startsWith('351')) { 
                var ov_time = new Date().toLocaleString('PT', { timeZone: 'Europe/Lisbon' }).split(' ')[1]
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(config.LANG, get_localized_date)
                const biography = '📅 ' + utch + '\n⌚ ' + ov_time + '\n\n⏱ Auto Bio By ...powered By Jimbrootan'
                await conn.setStatus(biography)
            }
            else if (conn.user.jid.startsWith('75')) { 
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(config.LANG, get_localized_date)
                var ov_time = new Date().toLocaleString('RU', { timeZone: 'Europe/Kaliningrad' }).split(' ')[1]
                const biography = '📅 ' + utch + '\n⌚ ' + ov_time +'\n\n⏱ Auto Bio By Whitedevil'
                await conn.setStatus(biography)
            }
            else if (conn.user.jid.startsWith('91')) { 
                var ov_time = new Date().toLocaleString('HI', { timeZone: 'Asia/Kolkata' }).split(' ')[1]
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(config.LANG, get_localized_date)
                const biography = '📅 ' + utch + '\n⌚ ' + ov_time + '\n\n⏱ Auto Bio By ...powered By Jimbrootan'
                await conn.setStatus(biography)
            }
            else if (conn.user.jid.startsWith('62')) { 
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(config.LANG, get_localized_date)
                var ov_time = new Date().toLocaleString('ID', { timeZone: 'Asia/Jakarta' }).split(' ')[1]
                const biography = '📅 ' + utch + '\n⌚ ' + ov_time +'\n\n⏱ Auto Bio By ...powered By Jimbrootan'
                await conn.setStatus(biography)
            }
            else if (conn.user.jid.startsWith('49')) { 
                var ov_time = new Date().toLocaleString('DE', { timeZone: 'Europe/Berlin' }).split(' ')[1]
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(config.LANG, get_localized_date)
                const biography = '📅 ' + utch + '\n⌚ ' + ov_time + '\n\n⏱ Auto Bio By ...powered By Jimbrootan'
                await conn.setStatus(biography)
            }
            else if (conn.user.jid.startsWith('61')) {  
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(config.LANG, get_localized_date)
                var ov_time = new Date().toLocaleString('AU', { timeZone: 'Australia/Lord_Howe' }).split(' ')[1]
                const biography = '📅 ' + utch + '\n⌚ ' + ov_time +'\n\n⏱ Auto Bio By ...powered By Jimbrootan'
                await conn.setStatus(biography)
            }
            else if (conn.user.jid.startsWith('55')) { 
                var ov_time = new Date().toLocaleString('BR', { timeZone: 'America/Noronha' }).split(' ')[1]
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(config.LANG, get_localized_date)
                const biography = '📅 ' + utch + '\n⌚ ' + ov_time + '\n\n⏱ Auto Bio By ...powered By Jimbrootan'
                await conn.setStatus(biography)
            }
            else if (conn.user.jid.startsWith('33')) {
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(config.LANG, get_localized_date)
                var ov_time = new Date().toLocaleString('FR', { timeZone: 'Europe/Paris' }).split(' ')[1]
                const biography = '📅 ' + utch + '\n⌚ ' + ov_time +'\n\n⏱ Auto Bio By ...powered By Jimbrootan'
                await conn.setStatus(biography)
            }
            else if (conn.user.jid.startsWith('34')) { 
                var ov_time = new Date().toLocaleString('ES', { timeZone: 'Europe/Madrid' }).split(' ')[1]
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(config.LANG, get_localized_date)
                const biography = '📅 ' + utch + '\n⌚ ' + ov_time + '\n\n⏱ Auto Bio By ...powered By Jimbrootan'
                await conn.setStatus(biography)
            }
            else if (conn.user.jid.startsWith('44')) { 
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(config.LANG, get_localized_date)
                var ov_time = new Date().toLocaleString('GB', { timeZone: 'Europe/London' }).split(' ')[1]
                const biography = '📅 ' + utch + '\n⌚ ' + ov_time +'\n\n⏱ Auto Bio By ...powered By Jimbrootan'
                await conn.setStatus(biography)
            }
            else if (conn.user.jid.startsWith('39')) {  
                var ov_time = new Date().toLocaleString('IT', { timeZone: 'Europe/Rome' }).split(' ')[1]
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(config.LANG, get_localized_date)
                const biography = '📅 ' + utch + '\n⌚ ' + ov_time + '\n\n⏱ Auto Bio By ...powered By kJimbrootan'
                await conn.setStatus(biography)
            }
            else if (conn.user.jid.startsWith('7')) { 
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(config.LANG, get_localized_date)
                var ov_time = new Date().toLocaleString('KZ', { timeZone: 'Asia/Almaty' }).split(' ')[1]
                const biography = '📅 ' + utch + '\n⌚ ' + ov_time +'\n\n⏱ Auto Bio By ...powered By Jimbrootan'
                await conn.setStatus(biography)
            }
            else if (conn.user.jid.startsWith('998')) {  
                var ov_time = new Date().toLocaleString('UZ', { timeZone: 'Asia/Samarkand' }).split(' ')[1]
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(config.LANG, get_localized_date)
                const biography = '📅 ' + utch + '\n⌚ ' + ov_time + '\n\n⏱ Auto Bio By ...powered By Jimbrootan'
                await conn.setStatus(biography)
            }
            else if (conn.user.jid.startsWith('993')) { 
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(config.LANG, get_localized_date)
                var ov_time = new Date().toLocaleString('TM', { timeZone: 'Asia/Ashgabat' }).split(' ')[1]
                const biography = '📅 ' + utch + '\n⌚ ' + ov_time +'\n\n⏱ Auto Bio By ...powered By Jimbrootan'
                await conn.setStatus(biography)
            }
            else {
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(config.LANG, get_localized_date)
                var ov_time = new Date().toLocaleString('EN', { timeZone: 'America/New_York' }).split(' ')[1]
                const biography = '📅 ' + utch + '\n⌚ ' + ov_time +'\n\n⏱ Auto Bio By ...powered By Jimbrootan'
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
        mek = msg
        If (responseButton === 'list') {
        Asena.sendMessage(from, `*Gʀᴏᴜᴘ Oᴘᴇɴᴅ Bʏ Aᴅᴍɪɴ*`, MessageType.text)
        selectedButton = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedButtonId : '.list'

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
                                await conn.sendMessage(conn.user.jid, fs.readFileSync("./src/image/logo.png"), MessageType.image, { caption: '*🧞 JIMBROOTAN 🧞*  WORKING PERFECTLY...!!\n\n▷ _This is your LOG number Dont Try Command here_\n ▷ Also You Can join Our Support group for more Help.\n _Support Group ▷ https://chat.whatsapp.com/Buyz3sEdhaWB0Rp7gtsKjd\n\n*Error:* ```' + error + '```\n\n' });
                                
                            } else if (config.LANG == 'ML') {
                                await conn.sendMessage(conn.user.jid, fs.readFileSync("./src/image/logo.png"), MessageType.image, { caption: '*🧞 JIMBROOTAN 🧞*  WORKING PERFECTLY...!!!\n\n▷ _ഇത് നിങ്ങളുടെ LOG നമ്പർ ആണ് ഇവിടെ കമാൻഡ് ഉപയോഗിക്കരുത്_\n▷ കൂടുതൽ സഹായങ്ങൾക്ക് നിങ്ങൾക്ക് ഞങ്ങളുടെ സപ്പോർട്ട് ഗ്രൂപ്പിൽ ചേരാം\n _Support Group ▷ https://chat.whatsapp.com/Buyz3sEdhaWB0Rp7gtsKjd\n\n*Error:* ```' + error + '```\n\n' });
                                
                            } else {
                                await conn.sendMessage(conn.user.jid, fs.readFileSync("./src/image/logo.png"), MessageType.image, { caption: '*🧞 JIMBROOTAN 🧞*  WORKING PERFECTLY...!!!\n\n▷ _This is your LOG number Dont Try Command here_\n ▷ Also You Can join Our Support group for more Help.\n _Support Group ▷ https://chat.whatsapp.com/Buyz3sEdhaWB0Rp7gtsKjd\n\n*Error:* ```' + error + '```\n\n' });
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
