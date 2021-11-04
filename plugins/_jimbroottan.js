/*
Copyright (C) 2021 Mikhaiel.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
*/

const Jimbrootan = require('../events');
const Config = require('../config');
const {MessageType} = require('@adiwajshing/baileys');
const fs = require("fs")
const Language = require('../language');
const Lang = Language.getString('_jimbroottan');

if (Config.WORKTYPE == 'private') {

    Jimbrootan.addCommand({pattern: `${Config.PANEL_COMMAND} ?(.*)`, fromMe: true, dontAddCommandList: true}, (async (message, match) => {
        
        var CMD_HELP = '';
        if (match[1] === '') {
            Jimbrootan.commands.map(
                async (command) =>  {
                    if (command.dontAddCommandList || command.pattern === undefined) return;
                    try {
                        var match = command.pattern.toString().match(/(\W*)([A-Za-zğüşıiöç1234567890 ]*)/);
                        var mmatch = command.pattern.toString().match(/(\W*)([A-Za-züşiğ öç1234567890]*)/)[2]
                    } catch {
                        var match = [command.pattern];
                    }
    
                    var HANDLER = '';
    
                    if (/\[(\W*)\]/.test(Config.HANDLERS)) {
                        HANDLER = Config.HANDLERS.match(/\[(\W*)\]/)[1][0];
                    } else {
                        HANDLER = '.';
                    }
                    if (command.desc == '' && !command.usage == '' && command.warn == '') {
                        CMD_HELP += '*' + Config.EMOJI_COMMAND + ' '  + Lang.COMMAND + ':* ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + Config.EMOJI_EXAMPLE + ' '  + Lang.EXAMPLE + ':* ' + command.usage + '\n\n';
                    }
                    if (!command.desc == '' && command.usage == '' && command.warn == '') {
                        CMD_HELP += '*' + Config.EMOJI_COMMAND + ' '  + Lang.COMMAND + ':* ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + '*' + Config.EMOJI_DESCRIPTION + ' '  + Lang.DESC + ':*  _' + command.desc + '_ \n\n';
                    }
                    if (command.desc == '' && command.usage == '' && !command.warn == '') {
                        CMD_HELP += '*' + Config.EMOJI_COMMAND + ' '  + Lang.COMMAND + ':* ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '+\n' + '*' + Config.EMOJI_DESCRIPTION + ' '  + Lang.WARN + ':* ' + command.warn + '\n\n'
                    }
                    if (!command.desc == '' && !command.usage == '' && command.warn == '') {
                        CMD_HELP += '*' + Config.EMOJI_COMMAND + ' '  + Lang.COMMAND + ':* ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + '*' + Config.EMOJI_DESCRIPTION + ' '  + Lang.DESC + ':* _' + command.desc + '_ \n' + Config.EMOJI_EXAMPLE + ' '  + Lang.EXAMPLE + ':* ' + command.usage + '\n\n';
                    }
                    if (!command.desc == '' && command.usage == '' && !command.warn == '') {
                        CMD_HELP += '*' + Config.EMOJI_COMMAND + ' '  + Lang.COMMAND + ':* ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + '*' + Config.EMOJI_DESCRIPTION + ' '  + Lang.DESC + ':* _' + command.desc + '_\n' + '*' + Config.EMOJI_WARNING + ' '  + Lang.WARN + ':* ' + command.warn + '\n\n'
                    }
                    if (command.desc == '' && !command.usage == '' && !command.warn == '') {
                        CMD_HELP += '*' + Config.EMOJI_COMMAND + ' '  + Lang.COMMAND + ':* ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + Config.EMOJI_EXAMPLE + ' '  + Lang.EXAMPLE + ':* ' + command.usage + '_ \n' + '*' + Config.EMOJI_WARNING + ' '  + Lang.WARN + ':* ' + command.warn + '\n\n'
                    }
                    if  (command.desc == '' && command.usage == '' && command.warn == '') {
                        CMD_HELP += '*' + Config.EMOJI_COMMAND + ' '  + Lang.COMMAND + ':* ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n\n'
                    }
                    if  (!command.desc == '' && !command.usage == '' && !command.warn == '') {
                        CMD_HELP += '*' + Config.EMOJI_COMMAND + ' '  + Lang.COMMAND + ':* ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + '*' + Config.EMOJI_DESCRIPTION + ' '  + Lang.DESC + ':* _' + command.desc + '_ \n' + Config.EMOJI_EXAMPLE + ' '  + Lang.EXAMPLE + ':* ' + command.usage + '\n' + '*' + Config.EMOJI_WARNING + ' '  + Lang.WARN + ':* ' + command.warn + '\n\n'
                    }
                }
            );

            await message.client.sendMessage(message.jid, '༺࿀࿉_ _ _ _ 🧞‍♂️_ _ _ _࿉࿁༻\n\n' + Config.BOT_NAME + Config.MENU_INFO + '\n\n༺࿀࿉_ _ _ _ 🧞‍♂️_ _ _ _࿉࿁༻\n © ᴛʜᴇ_ʀᴇᴀʟ_ᴍɪᴋʜᴀɪᴇʟ\n\n' + CMD_HELP, MessageType.text,{quoted: message.data}); 
       }
       else {
            var CMD_HELP = '';
            
            Jimbrootan.commands.map(
                async (command) =>  {
                    if (command.dontAddCommandList || command.pattern === undefined) return;
                    try {
                        var cmatch = command.pattern.toString().match(/(\W*)([A-Za-zğüşıiöç1234567890 ]*)/);
                        var cmmatch = command.pattern.toString().match(/(\W*)([A-Za-züşiğ öç1234567890]*)/)[2]
                    } catch {
                        var cmatch = [command.pattern];
                    }
                    if (cmmatch.endsWith(' ')) {
                        var cmmatch = command.pattern.toString().match(/(\W*)([A-Za-züşiğ öç1234567890]*)/)[2].replace(' ', '')
                    }
                    if (cmmatch == match[1]) {
                        var HANDLER = '';
    
                        if (/\[(\W*)\]/.test(Config.HANDLERS)) {
                            HANDLER = Config.HANDLERS.match(/\[(\W*)\]/)[1][0];
                        } else {
                            HANDLER = '.';
                        }
                        if (command.desc == '' && !command.usage == '' && command.warn == '') {
                        CMD_HELP += '*' + Config.EMOJI_COMMAND + ' '  + Lang.COMMAND + ':* ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + Config.EMOJI_EXAMPLE + ' '  + Lang.EXAMPLE + ':* ' + command.usage + '\n\n';
                    }
                    if (!command.desc == '' && command.usage == '' && command.warn == '') {
                        CMD_HELP += '*' + Config.EMOJI_COMMAND + ' '  + Lang.COMMAND + ':* ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + '*' + Config.EMOJI_DESCRIPTION + ' '  + Lang.DESC + ':*  _' + command.desc + '_ \n\n';
                    }
                    if (command.desc == '' && command.usage == '' && !command.warn == '') {
                        CMD_HELP += '*' + Config.EMOJI_COMMAND + ' '  + Lang.COMMAND + ':* ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '+\n' + '*' + Config.EMOJI_DESCRIPTION + ' '  + Lang.WARN + ':* ' + command.warn + '\n\n'
                    }
                    if (!command.desc == '' && !command.usage == '' && command.warn == '') {
                        CMD_HELP += '*' + Config.EMOJI_COMMAND + ' '  + Lang.COMMAND + ':* ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + '*' + Config.EMOJI_DESCRIPTION + ' '  + Lang.DESC + ':* _' + command.desc + '_ \n' + Config.EMOJI_EXAMPLE + ' '  + Lang.EXAMPLE + ':* ' + command.usage + '\n\n';
                    }
                    if (!command.desc == '' && command.usage == '' && !command.warn == '') {
                        CMD_HELP += '*' + Config.EMOJI_COMMAND + ' '  + Lang.COMMAND + ':* ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + '*' + Config.EMOJI_DESCRIPTION + ' '  + Lang.DESC + ':* _' + command.desc + '_\n' + '*' + Config.EMOJI_WARNING + ' '  + Lang.WARN + ':* ' + command.warn + '\n\n'
                    }
                    if (command.desc == '' && !command.usage == '' && !command.warn == '') {
                        CMD_HELP += '*' + Config.EMOJI_COMMAND + ' '  + Lang.COMMAND + ':* ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + Config.EMOJI_EXAMPLE + ' '  + Lang.EXAMPLE + ':* ' + command.usage + '_ \n' + '*' + Config.EMOJI_WARNING + ' '  + Lang.WARN + ':* ' + command.warn + '\n\n'
                    }
                    if  (command.desc == '' && command.usage == '' && command.warn == '') {
                        CMD_HELP += '*' + Config.EMOJI_COMMAND + ' '  + Lang.COMMAND + ':* ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n\n'
                    }
                    if  (!command.desc == '' && !command.usage == '' && !command.warn == '') {
                        CMD_HELP += '*' + Config.EMOJI_COMMAND + ' '  + Lang.COMMAND + ':* ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + '*' + Config.EMOJI_DESCRIPTION + ' '  + Lang.DESC + ':* _' + command.desc + '_ \n' + Config.EMOJI_EXAMPLE + ' '  + Lang.EXAMPLE + ':* ' + command.usage + '\n' + '*' + Config.EMOJI_WARNING + ' '  + Lang.WARN + ':* ' + command.warn + '\n\n'
                    }
                  }
                }
            );
            if (CMD_HELP === '') CMD_HELP += Lang.NOT_FOUND;
            await message.client.sendMessage(message.jid, Config.BOT_NAME + '\n\n  \n' + CMD_HELP, MessageType.text,{quoted: message.data}); 
        }
    }));
    }
if (Config.WORKTYPE == 'public') {
    
     Jimbrootan.addCommand({pattern: `${Config.PANEL_COMMAND} ?(.*)`, fromMe: false, dontAddCommandList: true}, (async (message, match) => {
         
        var CMD_HELP = '';
        if (match[1] === '') {
            amazone.commands.map(
                async (command) =>  {
                    if (command.dontAddCommandList || command.pattern === undefined) return;
                    try {
                        var match = command.pattern.toString().match(/(\W*)([A-Za-zğüşıiöç1234567890 ]*)/);
                        var mmatch = command.pattern.toString().match(/(\W*)([A-Za-züşiğ öç1234567890]*)/)[2]
                    } catch {
                        var match = [command.pattern];
                    }
    
                    var HANDLER = '';
    
                    if (/\[(\W*)\]/.test(Config.HANDLERS)) {
                        HANDLER = Config.HANDLERS.match(/\[(\W*)\]/)[1][0];
                    } else {
                        HANDLER = '.';
                    }
                    if (command.desc == '' && !command.usage == '' && command.warn == '') {
                        CMD_HELP += '*' + Config.EMOJI_COMMAND + ' '  + Lang.COMMAND + ':* ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + Config.EMOJI_EXAMPLE + ' '  + Lang.EXAMPLE + ':* ' + command.usage + '\n\n';
                    }
                    if (!command.desc == '' && command.usage == '' && command.warn == '') {
                        CMD_HELP += '*' + Config.EMOJI_COMMAND + ' '  + Lang.COMMAND + ':* ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + '*' + Config.EMOJI_DESCRIPTION + ' '  + Lang.DESC + ':*  _' + command.desc + '_ \n\n';
                    }
                    if (command.desc == '' && command.usage == '' && !command.warn == '') {
                        CMD_HELP += '*' + Config.EMOJI_COMMAND + ' '  + Lang.COMMAND + ':* ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '+\n' + '*' + Config.EMOJI_DESCRIPTION + ' '  + Lang.WARN + ':* ' + command.warn + '\n\n'
                    }
                    if (!command.desc == '' && !command.usage == '' && command.warn == '') {
                        CMD_HELP += '*' + Config.EMOJI_COMMAND + ' '  + Lang.COMMAND + ':* ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + '*' + Config.EMOJI_DESCRIPTION + ' '  + Lang.DESC + ':* _' + command.desc + '_ \n' + Config.EMOJI_EXAMPLE + ' '  + Lang.EXAMPLE + ':* ' + command.usage + '\n\n';
                    }
                    if (!command.desc == '' && command.usage == '' && !command.warn == '') {
                        CMD_HELP += '*' + Config.EMOJI_COMMAND + ' '  + Lang.COMMAND + ':* ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + '*' + Config.EMOJI_DESCRIPTION + ' '  + Lang.DESC + ':* _' + command.desc + '_\n' + '*' + Config.EMOJI_WARNING + ' '  + Lang.WARN + ':* ' + command.warn + '\n\n'
                    }
                    if (command.desc == '' && !command.usage == '' && !command.warn == '') {
                        CMD_HELP += '*' + Config.EMOJI_COMMAND + ' '  + Lang.COMMAND + ':* ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + Config.EMOJI_EXAMPLE + ' '  + Lang.EXAMPLE + ':* ' + command.usage + '_ \n' + '*' + Config.EMOJI_WARNING + ' '  + Lang.WARN + ':* ' + command.warn + '\n\n'
                    }
                    if  (command.desc == '' && command.usage == '' && command.warn == '') {
                        CMD_HELP += '*' + Config.EMOJI_COMMAND + ' '  + Lang.COMMAND + ':* ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n\n'
                    }
                    if  (!command.desc == '' && !command.usage == '' && !command.warn == '') {
                        CMD_HELP += '*' + Config.EMOJI_COMMAND + ' '  + Lang.COMMAND + ':* ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + '*' + Config.EMOJI_DESCRIPTION + ' '  + Lang.DESC + ':* _' + command.desc + '_ \n' + Config.EMOJI_EXAMPLE + ' '  + Lang.EXAMPLE + ':* ' + command.usage + '\n' + '*' + Config.EMOJI_WARNING + ' '  + Lang.WARN + ':* ' + command.warn + '\n\n'
                    }
                }
            );
            await message.client.sendMessage(message.jid, Config.BOT_NAME + '\n\n  \n' + CMD_HELP, MessageType.text,{quoted: message.data}); 
       }
       else {
            var CMD_HELP = '';
            Jimbrootan.commands.map(
                async (command) =>  {
                    if (command.dontAddCommandList || command.pattern === undefined) return;
                    try {
                        var cmatch = command.pattern.toString().match(/(\W*)([A-Za-zğüşıiöç1234567890 ]*)/);
                        var cmmatch = command.pattern.toString().match(/(\W*)([A-Za-züşiğ öç1234567890]*)/)[2]
                    } catch {
                        var cmatch = [command.pattern];
                    }
                    if (cmmatch.endsWith(' ')) {
                        var cmmatch = command.pattern.toString().match(/(\W*)([A-Za-züşiğ öç1234567890]*)/)[2].replace(' ', '')
                    }
                    if (cmmatch == match[1]) {
                        var HANDLER = '';
    
                        if (/\[(\W*)\]/.test(Config.HANDLERS)) {
                            HANDLER = Config.HANDLERS.match(/\[(\W*)\]/)[1][0];
                        } else {
                            HANDLER = '.';
                        }
                        if (command.desc == '' && !command.usage == '' && command.warn == '') {
                        CMD_HELP += '*' + Config.EMOJI_COMMAND + ' '  + Lang.COMMAND + ':* ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + Config.EMOJI_EXAMPLE + ' '  + Lang.EXAMPLE + ':* ' + command.usage + '\n\n';
                    }
                    if (!command.desc == '' && command.usage == '' && command.warn == '') {
                        CMD_HELP += '*' + Config.EMOJI_COMMAND + ' '  + Lang.COMMAND + ':* ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + '*' + Config.EMOJI_DESCRIPTION + ' '  + Lang.DESC + ':*  _' + command.desc + '_ \n\n';
                    }
                    if (command.desc == '' && command.usage == '' && !command.warn == '') {
                        CMD_HELP += '*' + Config.EMOJI_COMMAND + ' '  + Lang.COMMAND + ':* ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + '*' + Config.EMOJI_DESCRIPTION + ' '  + Lang.WARN + ':* ' + command.warn + '\n\n'
                    }
                    if (!command.desc == '' && !command.usage == '' && command.warn == '') {
                        CMD_HELP += '*' + Config.EMOJI_COMMAND + ' '  + Lang.COMMAND + ':* ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + '*' + Config.EMOJI_DESCRIPTION + ' '  + Lang.DESC + ':* _' + command.desc + '_ \n' + Config.EMOJI_EXAMPLE + ' '  + Lang.EXAMPLE + ':* ' + command.usage + '\n\n';
                    }
                    if (!command.desc == '' && command.usage == '' && !command.warn == '') {
                        CMD_HELP += '*' + Config.EMOJI_COMMAND + ' '  + Lang.COMMAND + ':* ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + '*' + Config.EMOJI_DESCRIPTION + ' '  + Lang.DESC + ':* _' + command.desc + '_\n' + '*' + Config.EMOJI_WARNING + ' '  + Lang.WARN + ':* ' + command.warn + '\n\n'
                    }
                    if (command.desc == '' && !command.usage == '' && !command.warn == '') {
                        CMD_HELP += '*' + Config.EMOJI_COMMAND + ' '  + Lang.COMMAND + ':* ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + Config.EMOJI_EXAMPLE + ' '  + Lang.EXAMPLE + ':* ' + command.usage + '_ \n' + '*' + Config.EMOJI_WARNING + ' '  + Lang.WARN + ':* ' + command.warn + '\n\n'
                    }
                    if  (command.desc == '' && command.usage == '' && command.warn == '') {
                        CMD_HELP += '*' + Config.EMOJI_COMMAND + ' '  + Lang.COMMAND + ':* ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n\n'
                    }
                    if  (!command.desc == '' && !command.usage == '' && !command.warn == '') {
                        CMD_HELP += '*' + Config.EMOJI_COMMAND + ' '  + Lang.COMMAND + ':* ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + '*' + Config.EMOJI_DESCRIPTION + ' '  + Lang.DESC + ':* _' + command.desc + '_ \n' + Config.EMOJI_EXAMPLE + ' '  + Lang.EXAMPLE + ':* ' + command.usage + '\n' + '*' + Config.EMOJI_WARNING + ' '  + Lang.WARN + ':* ' + command.warn + '\n\n'
                      }
                   }
                }
            );
            if (CMD_HELP === '') CMD_HELP += Lang.NOT_FOUND;
            await message.client.sendMessage(message.jid, Config.BOT_NAME + '\n\n  \n' + CMD_HELP, MessageType.text,{quoted: message.data}); 
        }
    }));

Jimbrootan.addCommand({pattern: `${Config.PANEL_COMMAND} ?(.*)`, fromMe: true, dontAddCommandList: true}, (async (message, match) => {
         
        var CMD_HELP = '';
        if (match[1] === '') {
            Jimbrootan.commands.map(
                async (command) =>  {
                    if (command.dontAddCommandList || command.pattern === undefined) return;
                    try {
                        var match = command.pattern.toString().match(/(\W*)([A-Za-zğüşıiöç1234567890 ]*)/);
                        var mmatch = command.pattern.toString().match(/(\W*)([A-Za-züşiğ öç1234567890]*)/)[2]
                    } catch {
                        var match = [command.pattern];
                    }
    
                    var HANDLER = '';
    
                    if (/\[(\W*)\]/.test(Config.HANDLERS)) {
                        HANDLER = Config.HANDLERS.match(/\[(\W*)\]/)[1][0];
                    } else {
                        HANDLER = '.';
                    }
                    if (command.desc == '' && !command.usage == '' && command.warn == '') {
                        CMD_HELP += '*' + Config.EMOJI_COMMAND + ' '  + Lang.COMMAND + ':* ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + Config.EMOJI_EXAMPLE + ' '  + Lang.EXAMPLE + ':* ' + command.usage + '\n\n';
                    }
                    if (!command.desc == '' && command.usage == '' && command.warn == '') {
                        CMD_HELP += '*' + Config.EMOJI_COMMAND + ' '  + Lang.COMMAND + ':* ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + '*' + Config.EMOJI_DESCRIPTION + ' '  + Lang.DESC + ':*  _' + command.desc + '_ \n\n';
                    }
                    if (command.desc == '' && command.usage == '' && !command.warn == '') {
                        CMD_HELP += '*' + Config.EMOJI_COMMAND + ' '  + Lang.COMMAND + ':* ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '+\n' + '*' + Config.EMOJI_DESCRIPTION + ' '  + Lang.WARN + ':* ' + command.warn + '\n\n'
                    }
                    if (!command.desc == '' && !command.usage == '' && command.warn == '') {
                        CMD_HELP += '*' + Config.EMOJI_COMMAND + ' '  + Lang.COMMAND + ':* ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + '*' + Config.EMOJI_DESCRIPTION + ' '  + Lang.DESC + ':* _' + command.desc + '_ \n' + Config.EMOJI_EXAMPLE + ' '  + Lang.EXAMPLE + ':* ' + command.usage + '\n\n';
                    }
                    if (!command.desc == '' && command.usage == '' && !command.warn == '') {
                        CMD_HELP += '*' + Config.EMOJI_COMMAND + ' '  + Lang.COMMAND + ':* ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + '*' + Config.EMOJI_DESCRIPTION + ' '  + Lang.DESC + ':* _' + command.desc + '_\n' + '*' + Config.EMOJI_WARNING + ' '  + Lang.WARN + ':* ' + command.warn + '\n\n'
                    }
                    if (command.desc == '' && !command.usage == '' && !command.warn == '') {
                        CMD_HELP += '*' + Config.EMOJI_COMMAND + ' '  + Lang.COMMAND + ':* ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + Config.EMOJI_EXAMPLE + ' '  + Lang.EXAMPLE + ':* ' + command.usage + '_ \n' + '*' + Config.EMOJI_WARNING + ' '  + Lang.WARN + ':* ' + command.warn + '\n\n'
                    }
                    if  (command.desc == '' && command.usage == '' && command.warn == '') {
                        CMD_HELP += '*' + Config.EMOJI_COMMAND + ' '  + Lang.COMMAND + ':* ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n\n'
                    }
                    if  (!command.desc == '' && !command.usage == '' && !command.warn == '') {
                        CMD_HELP += '*' + Config.EMOJI_COMMAND + ' '  + Lang.COMMAND + ':* ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + '*' + Config.EMOJI_DESCRIPTION + ' '  + Lang.DESC + ':* _' + command.desc + '_ \n' + Config.EMOJI_EXAMPLE + ' '  + Lang.EXAMPLE + ':* ' + command.usage + '\n' + '*' + Config.EMOJI_WARNING + ' '  + Lang.WARN + ':* ' + command.warn + '\n\n'
                    }
                }
            );
            await message.client.sendMessage(message.jid, Config.BOT_NAME + '\n\n  \n' + CMD_HELP, MessageType.text,{quoted: message.data}); 
       }
       else {
            var CMD_HELP = '';
            Jimbrootan.commands.map(
                async (command) =>  {
                    if (command.dontAddCommandList || command.pattern === undefined) return;
                    try {
                        var cmatch = command.pattern.toString().match(/(\W*)([A-Za-zğüşıiöç1234567890 ]*)/);
                        var cmmatch = command.pattern.toString().match(/(\W*)([A-Za-züşiğ öç1234567890]*)/)[2]
                    } catch {
                        var cmatch = [command.pattern];
                    }
                    if (cmmatch.endsWith(' ')) {
                        var cmmatch = command.pattern.toString().match(/(\W*)([A-Za-züşiğ öç1234567890]*)/)[2].replace(' ', '')
                    }
                    if (cmmatch == match[1]) {
                        var HANDLER = '';
    
                        if (/\[(\W*)\]/.test(Config.HANDLERS)) {
                            HANDLER = Config.HANDLERS.match(/\[(\W*)\]/)[1][0];
                        } else {
                            HANDLER = '.';
                        }
                        if (command.desc == '' && !command.usage == '' && command.warn == '') {
                        CMD_HELP += '*' + Config.EMOJI_COMMAND + ' '  + Lang.COMMAND + ':* ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + Config.EMOJI_EXAMPLE + ' '  + Lang.EXAMPLE + ':* ' + command.usage + '\n\n';
                    }
                    if (!command.desc == '' && command.usage == '' && command.warn == '') {
                        CMD_HELP += '*' + Config.EMOJI_COMMAND + ' '  + Lang.COMMAND + ':* ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + '*' + Config.EMOJI_DESCRIPTION + ' '  + Lang.DESC + ':*  _' + command.desc + '_ \n\n';
                    }
                    if (command.desc == '' && command.usage == '' && !command.warn == '') {
                        CMD_HELP += '*' + Config.EMOJI_COMMAND + ' '  + Lang.COMMAND + ':* ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + '*' + Config.EMOJI_DESCRIPTION + ' '  + Lang.WARN + ':* ' + command.warn + '\n\n'
                    }
                    if (!command.desc == '' && !command.usage == '' && command.warn == '') {
                        CMD_HELP += '*' + Config.EMOJI_COMMAND + ' '  + Lang.COMMAND + ':* ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + '*' + Config.EMOJI_DESCRIPTION + ' '  + Lang.DESC + ':* _' + command.desc + '_ \n' + Config.EMOJI_EXAMPLE + ' '  + Lang.EXAMPLE + ':* ' + command.usage + '\n\n';
                    }
                    if (!command.desc == '' && command.usage == '' && !command.warn == '') {
                        CMD_HELP += '*' + Config.EMOJI_COMMAND + ' '  + Lang.COMMAND + ':* ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + '*' + Config.EMOJI_DESCRIPTION + ' '  + Lang.DESC + ':* _' + command.desc + '_\n' + '*' + Config.EMOJI_WARNING + ' '  + Lang.WARN + ':* ' + command.warn + '\n\n'
                    }
                    if (command.desc == '' && !command.usage == '' && !command.warn == '') {
                        CMD_HELP += '*' + Config.EMOJI_COMMAND + ' '  + Lang.COMMAND + ':* ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + Config.EMOJI_EXAMPLE + ' '  + Lang.EXAMPLE + ':* ' + command.usage + '_ \n' + '*' + Config.EMOJI_WARNING + ' '  + Lang.WARN + ':* ' + command.warn + '\n\n'
                    }
                    if  (command.desc == '' && command.usage == '' && command.warn == '') {
                        CMD_HELP += '*' + Config.EMOJI_COMMAND + ' '  + Lang.COMMAND + ':* ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n\n'
                    }
                    if  (!command.desc == '' && !command.usage == '' && !command.warn == '') {
                        CMD_HELP += '*' + Config.EMOJI_COMMAND + ' '  + Lang.COMMAND + ':* ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + '*' + Config.EMOJI_DESCRIPTION + ' '  + Lang.DESC + ':* _' + command.desc + '_ \n' + Config.EMOJI_EXAMPLE + ' '  + Lang.EXAMPLE + ':* ' + command.usage + '\n' + '*' + Config.EMOJI_WARNING + ' '  + Lang.WARN + ':* ' + command.warn + '\n\n'
                      }
                   }
                }
            );
            if (CMD_HELP === '') CMD_HELP += Lang.NOT_FOUND;
            await message.client.sendMessage(message.jid, Config.BOT_NAME + '\n\n  \n' + CMD_HELP, MessageType.text,{quoted: message.data}); 
        }
    }));
}
