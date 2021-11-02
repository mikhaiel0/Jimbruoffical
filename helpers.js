/*
Copyright (C) 2021 Mikhaiel.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
*/

function successfullMessage(msg) {
    return "🩸 *Jimbrootan*:  ```" + msg + "```"
}
function errorMessage(msg) {
    return "🩸 *Jimbrootan*:  ```" + msg + "```"
}
function infoMessage(msg) {
    return "🩸 *Jimbrootan*:  ```" + msg + "```"
}


module.exports = {
    successfullMessage,
    errorMessage,
    infoMessage
}
