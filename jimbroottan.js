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
 OA_NAME: process.env.DEPLOYER === undefined ? 'Mikhaiel is my creator' : process.env.DEPLOYER,
 PHONE: process.env.NUMBER === undefined ? '+919544846609' : process.env.NUMBER,    

};
