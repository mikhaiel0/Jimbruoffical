/* 
Special thanks to afnanplk 
*/

const { Sequelize } = require('sequelize');
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

// Jimbrootan Special Functions
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
 MKLO: process.env.BAD_WORDS === undefined ? false : process.env.BAD_WORDS,
 OA_NAME: process.env.DEPLOYER === undefined ? 'Mikhaiel' : process.env.DEPLOYER,
 PHONE: process.env.NUMBER === undefined ? '+919544846609' : process.env.NUMBER,    
 IG_USER: process.env.IG_USER === undefined ? '@the_real_mikhaiel' : process.env.IG_USER,
 BUTTON_ONE: process.env.BUTTON_ONE === undefined ? 'Button one' : process.env.BUTTON_ONE,
 BUTTON_TWO: process.env.BUTTON_TWO === undefined ? 'Button two' : process.env.BUTTON_TWO,
 BUTTON_DESC: process.env.BUTTON_DESC === undefined ? 'Helloo' : process.env.BUTTON_DESC,
 BUTTON_COMMAND: process.env.BUTTON_COMMAND === undefined ? 'button' : process.env.BUTTON_COMMAND,
};
