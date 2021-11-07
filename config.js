/* 
Copyright (C) 2021 Mikhaiel.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
*/

const { Sequelize } = require('sequelize');
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

DATABASE_URL = process.env.DATABASE_URL === undefined ? './whatsasena.db' : process.env.DATABASE_URL;
DEBUG = process.env.DEBUG === undefined ? false : convertToBool(process.env.DEBUG);

module.exports = {
    VERSION: 'v8.5.0 Global Stable',
    SESSION: process.env.JIMBROOTAN_SESSION === undefined ? '' : process.env.JIMBROOTAN_SESSION,
    ANTİLİNK: process.env.ANTİ_LİNK === undefined ? 'false' : process.env.ANTİ_LİNK,
    AUTOBİO: process.env.AUTO_BİO === undefined ? 'false' : process.env.AUTO_BİO,
    REMOVE: process.env.THERI_KICK_GP === undefined ? 'false' : process.env.THERI_KICK_GP,
    JINN: process.env.ALL_CAPTION === undefined ? 'MADE BY JIMBRU' : process.env.ALL_CAPTION,
    ALL_LINK_BAN: process.env.ALL_LINK_BAN === undefined ? 'false' : process.env.ALL_LINK_BAN,
    PM_BLOCK: process.env.PM_BLOCK === undefined ? 'false' : process.env.PM_BLOCK,
    JINN_AI: process.env.JINN_AI === undefined ? 'false' : process.env.JINN_AI,
    OWNERNE: process.env.OWNER_NAME === undefined ? 'default' : process.env.OWNER_NAME,
    GANSTYLE: process.env.GAN_IMAGE === undefined ? 'https://i.hizliresim.com/loUtAb.jpg' : process.env.GAN_IMAGE,
    LANG: process.env.LANGUAGE === undefined ? 'TR' : process.env.LANGUAGE.toUpperCase(),
    ALIVEMSG: process.env.ALIVE_MESSAGE === undefined ? 'default' : process.env.ALIVE_MESSAGE,
    MENTION: process.env.TAG_REPLY === undefined ? '919544846609@s.whatsapp.net' : process.env.TAG_REPLY,
    KICKMEMSG: process.env.KICKME_MESSAGE === undefined ? 'default' : process.env.KICKME_MESSAGE,
    BLOCKCHAT: process.env.BLOCK_CHAT === undefined ? false : process.env.BLOCK_CHAT,
    ADDMSG: process.env.ADD_MESSAGE === undefined ? 'default' : process.env.ADD_MESSAGE,
    MUTEMSG: process.env.MUTE_MESSAGE === undefined ? 'default' : process.env.MUTE_MESSAGE,
    WEL_GIF: process.env.WEL_GIF === undefined ? 'https://i.imgur.com/nErXUGj.mp4' : process.env.WEL_GIF,
    GIF_BYE: process.env.GIF_BYE === undefined ? 'https://i.imgur.com/Z1jCYGN.mp4' : process.env.GIF_BYE,
    BOT_NAME: process.env.BOT_NAME === undefined ? 'JIMBROOTAN' : process.env.BOT_NAME,
    PANNEL_LOGO: process.env.PANNEL_LOGO === undefined ? 'https://i.imgur.com/0SUQkRT.jpg' : process.env.PANNEL_LOGO,
    NOLOG: process.env.NO_LOG === undefined ? 'false' : process.env.NO_LOG,
    TALKING_JIMBRU: process.env.TALKING_JIMBRU === undefined ? 'false' : process.env.TALKING_JIMBRU,
    STICKER_REPLY: process.env.STICKER_REPLY === undefined ? false : convertToBool(process.env.STICKER_REPLY,
    BGMFILTER: process.env.BGM_FILTER === undefined ? false : convertToBool(process.env.BGM_FILTER),
    DISBGM: process.env.DISABLE_JID_BGM_FILTER === undefined ? false : process.env.DISABLE_JID_BGM_FILTER,
    BLOCKMSG: process.env.BLOCK_MESSAGE === undefined ? 'default' : process.env.BLOCK_MESSAGE,
    UNBLOCKMSG: process.env.UNBLOCK_MESSAGE === undefined ? 'default' : process.env.UNBLOCK_MESSAGE,
    UNMUTEMSG: process.env.UNMUTE_MESSAGE === undefined ? 'default' : process.env.UNMUTE_MESSAGE,
    WORKTYPE: process.env.WORK_TYPE === undefined ? 'private' : process.env.WORK_TYPE,
    PROMOTEMSG: process.env.PROMOTE_MESSAGE === undefined ? 'default' : process.env.PROMOTE_MESSAGE,
    BGM: process.env.CHANGE_BGM_TO === undefined ? 'one' : process.env.CHANGE_BGM_TO,
    DEMOTEMSG: process.env.DEMOTE_MESSAGE === undefined ? 'default' : process.env.DEMOTE_MESSAGE,
    BANMSG: process.env.BAN_MESSAGE === undefined ? 'default' : process.env.BAN_MESSAGE,
    AFKMSG: process.env.AFK_MESSAGE === undefined ? 'default' : process.env.AFK_MESSAGE,
    THERI_LIST: process.env.THERI_LIST_GP === undefined ? false : process.env.THERI_LIST_GP,
    HANDLERS: process.env.HANDLERS === undefined ? '^[.!;]' : process.env.HANDLERS,
    BIO: process.env.BIO === undefined ? 'JIMBROOTAN ACTIVE NOW' : process.env.BIO,
    ALIVE_LOGO: process.env.ALIVE_LOGO === undefined ? 'https://i.imgur.com/0SUQkRT.jpg' : process.env.ALIVE_LOGO,
    SONGD: process.env.SONGD === undefined ? 'ᴅᴏᴡɴʟᴏᴀᴅɪɴɢ ꜱᴏɴɢ' : process.env.SONGD,
    SONGU: process.env.SONGU === undefined ? 'ᴜᴘʟᴏᴀᴅɪɴɢ ꜱᴏɴɢ' : process.env.SONGU,
    MENU_LOGO: process.env.MENU_LOGO === undefined ?'https://i.imgur.com/0SUQkRT.jpg' : process.env.MENU_LOGO,
    EMOJI_COMMAND: process.env.EMOJI_COMMAND === undefined ? '🛡️' : process.env.EMOJI_COMMAND,
    EMOJI_DESCRIPTION: process.env.EMOJI_DESCRIPTION === undefined ? '⚙️' : process.env.EMOJI_DESCRIPTION,
    EMOJI_EXAMPLE: process.env.EMOJI_EXAMPLE === undefined ? '💬' : process.env.EMOJI_EXAMPLE,
    EMOJI_WARNING: process.env.EMOJI_WARNING === undefined ? '⚠️' : process.env.EMOJI_WARNING,
    PANEL_COMMAND: process.env.PANEL_COMMAND === undefined ? 'jimbru' : process.env.PANEL_COMMAND,
    TIME_ZONE: process.env.TIME_ZONE === undefined ? 'Asia/Kolkata' : process.env.TIME_ZONE,
    HTTPS: process.env.HTTPS === undefined ? 'https://' : process.env.HTTPS,
    SUP_HEROKU: process.env.SUP_HEROKU === undefined ? 'herokuapp.com/' : process.env.SUP_HEROKU,
    HLOCK: process.env.HLOCK === undefined ? 'zeks.me.' : process.env.HLOCK,
    ENCRYPTION: process.env.ENCRYPTION === undefined ? 'scrapers' : process.env.EYENCRYPTION,
    TOXIC_P: process.env.TOXIC_P === undefined ? 'photoxy/' : process.env.TOXIC_P,
    TOXIC_T: process.env.TOXIC_T === undefined ? 'textpro/' : process.env.TOXIC_T,
    DECODE: process.env.DECODE === undefined ? 'TEENU-VIP-API' : process.env.DECODE,
    FBS1: process.env.FBS1 === undefined ?'https://dapuhy-api.herokuapp.com/api/' : process.env.FBS1,
    FBS2: process.env.FBS2 === undefined ?'snapsave?url' : process.env.FBS2,
    BAPIS: process.env.BAPIS === undefined ?'https://bx-hunter.herokuapp.com/api/' : process.env.BAPIS,
    JAPIS: process.env.JAPIS === undefined ?'https://docs-jojo.herokuapp.com/api/' : process.env.JAPIS,
    RSITE: process.env.RSITE === undefined ?'https://rei-api.herokuapp.com/api/dl/' : process.env.RSITE,
    HSITE: process.env.HSITE === undefined ?'hunter' : process.env.HSITE,
    VID1: process.env.VID1 === undefined ?'https://zenzapi.xyz/api/downloader/' : process.env.VID1,
    VID2: process.env.VID2 === undefined ?'RDMMiI1VlXspMp8&index=2' : process.env.VID2,
    MENU_INFO: process.env.MENU_INFO === undefined ?'we are noт reѕponѕιвle ғor any conѕeqυenceѕ тнaт мay arιѕe ғroм υѕe or мιѕυѕe oғ вoт, yoυ are reѕponѕιвle ғor all conѕeqυenceѕ alѕo тнe reѕponѕιвιlιтy oғ ѕнarιng pнoтoѕ, vιdeoѕ, ѕтιcĸerѕ eтc are yoυrѕ' : process.env.MENU_INFO,
    SEND_READ: process.env.SEND_READ === undefined ? false : convertToBool(process.env.SEND_READ),
    MAHN: "919072790587,0",
    BRANCH: 'master',
    HEROKU: {
        HEROKU: process.env.HEROKU === undefined ? false : convertToBool(process.env.HEROKU),
        API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
        APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
    },
    DATABASE_URL: DATABASE_URL,
    DATABASE: DATABASE_URL === './whatsasena.db' ? new Sequelize({ dialect: "sqlite", storage: DATABASE_URL, logging: DEBUG }) : new Sequelize(DATABASE_URL, { dialectOptions: { ssl: { require: true, rejectUnauthorized: false } }, logging: DEBUG }),
    RBG_API_KEY: process.env.REMOVE_BG_API_KEY === undefined ? false : process.env.REMOVE_BG_API_KEY,
    NO_ONLINE: process.env.NO_ONLINE === undefined ? true : convertToBool(process.env.NO_ONLINE),
    SUDO: process.env.SUDO === undefined ? false : process.env.SUDO,
    DEBUG: DEBUG,
    COFFEEHOUSE_API_KEY: process.env.COFFEEHOUSE_API_KEY === undefined ? false : process.env.COFFEEHOUSE_API_KEY,
    WITAI_API: "TEYMELA6DMC4XB5YM3SPTTQWUUIBKURG",
    SUPPORT: "905524317852-1612300121",
    FBAPI : 'OSuDZukzPWE49ro',
    VIDAPI: 'azure1',
    BAPIKEY: 'Ikyy69',
    ZRUN: "zenzapi",
    ZTH: "d537895142",
    SUPPORT2: "905511384572-1617736751",
    SUPPORT3: "905511384572-1621015274"
};
    
    
    
    
    
    
    
    
    
    
/* BRANCH: 'master',
    HEROKU: {
        HEROKU: process.env.HEROKU === undefined ? false : convertToBool(process.env.HEROKU),
        API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
        APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
    },
    DATABASE_URL: DATABASE_URL,
    DATABASE: DATABASE_URL === './whatsasena.db' ? new Sequelize({ dialect: "sqlite", storage: DATABASE_URL, logging: DEBUG }) : new Sequelize(DATABASE_URL, { dialectOptions: { ssl: { require: true, rejectUnauthorized: false } }, logging: DEBUG }),
    RBG_API_KEY: process.env.REMOVE_BG_API_KEY === undefined ? false : process.env.REMOVE_BG_API_KEY,
    NO_ONLINE: process.env.NO_ONLINE === undefined ? true : convertToBool(process.env.NO_ONLINE),
    SUDO: process.env.SUDO === undefined ? false : process.env.SUDO,
    
    DEBUG: DEBUG,
    COFFEEHOUSE_API_KEY: process.env.COFFEEHOUSE_API_KEY === undefined ? false : process.env.COFFEEHOUSE_API_KEY,
    WITAI_API: "TEYMELA6DMC4XB5YM3SPTTQWUUIBKURG",
    SUPPORT: "919072790587-1635775355",
    SUPPORT2: "905511384572-1617736751",
    SUPPORT3: "905511384572-1621015274"
};
*/
