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
 BTN1: process.env.BTN1 === undefined ? 'Button one' : process.env.BTN1,
 BTN2: process.env.BTN2 === undefined ? 'Button two' : process.env.BTN2,

};
