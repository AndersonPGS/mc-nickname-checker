const fs = require('fs');
const path = require('path');

// Colors
const RED = '\x1b[31m';
const GREEN = '\x1b[32m';
const YELLOW = '\x1b[33m';
const RESET = '\x1b[0m';

function addAvailableNick(username) {
  const filePath = path.join(__dirname, '..', '..', '..', 'available.txt');

  const nickWithBreakLine = username + '\n'

  fs.appendFile(filePath, nickWithBreakLine, (err) => {
    if (err) {
      console.log(RED + `[${username}] Erro ao escrever no arquivo de texto: ${err}` + RESET);
    } else {
      console.log(YELLOW + `[${username}] Adicionado no arquivo de texto. ` + RESET);
    }
  })
}

addAvailableNick("apgs")

module.exports = addAvailableNick