/*
 Copyright (C) 2021 Mikhaiel.

Licensed under the  GPL-3.0 License;

you may not use this file except in compliance with the License.
*/

const Jimbru = require('../events');

const config = require('../config');

const Heroku = require('heroku-client');

const heroku = new Heroku({

    token: config.HEROKU.API_KEY

});

let baseURI = '/apps/' + config.HEROKU.APP_NAME;

    var l_dsc = ''

    var alr_on = ''

    var alr_off = ''

    var LINK_on = ''

    var LINK_off = ''

   

    if (config.LANG == 'EN') {

        l_dsc = 'Remove Whatsapp group link'

        alr_on = '!'

        alr_off = '!'

        LINK_on = '*Whatsapp Link Blocking System Turned ON 👿*'

        LINK_off = '*Whatsapp Link Blocking System Turned OFF 😖*'

    }

    if (config.LANG == 'ML') {

        l_dsc = '*Whatsapp Group Link Remover.*'

        alr_on = '!' 

        alr_off = '!'

        LINK_on = '*whatsapp ലിങ്ക് ബ്ലോക്ക് ചെയ്യൽ ഓണാക്കി.*'

        LINK_off = '*whatsapp ലിങ്ക് ബ്ലോക്ക് ഓഫ് ആക്കി.*'

    }

   

    Jimbru.addCommand({pattern: 'whatsblock ?(.*)', fromMe: true, desc: l_dsc, usage: '.whatsblock on / of' }, (async (message, match) => {

        if (match[1] == 'off') {

                await heroku.patch(baseURI + '/config-vars', { 

                    body: { 

                        ['WHATS_LINK_BLOCK']: 'false'

                    } 

                });

                await message.sendMessage(LINK_off)

        } else if (match[1] == 'on') {

                await heroku.patch(baseURI + '/config-vars', { 

                    body: { 

                        ['WHATS_LINK_BLOCK']: 'true'

                    } 

                });

                await message.sendMessage(LINK_on)

        }

    }));
