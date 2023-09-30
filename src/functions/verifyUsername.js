const axios = require('axios');
const jsdom = require('jsdom');
const addAvailableNick = require('./addAvailableNick');
const { JSDOM } = jsdom;

// Colors
const RED = '\x1b[31m';
const GREEN = '\x1b[32m';
const YELLOW = '\x1b[33m';
const RESET = '\x1b[0m';

async function verifyUsername(username) {
  return new Promise((resolve, reject) => {
    console.log(YELLOW  + `[${username}] Verificando...` + RESET);
    axios.get(`https://mcname.info/pt/search?q=${username}`)
      .then((response) => {
        if (response.status === 200) {
          const html = response.data;
          const dom = new JSDOM(html);
          const document = dom.window.document;

          const divElement = document.querySelector('#status-bar > div > div.col-lg-4.text-center.my-1 > div > div:nth-child(1) > div:nth-child(2)');

          if (divElement) {
            const divText = divElement.textContent.trim();

            if (divText === 'Available') {
              console.log(GREEN + `[${username}] Username Available` + RESET);

              addAvailableNick(username)
            } else if (divText === 'Unavailable') {
              console.log(RED + `[${username}] Username Unavailable` + RESET);
            } else {
              console.log(YELLOW  + `[${username}] Username: ${divText}` + RESET);
            }
          } else {
            console.log(RED + `[${username}] Não foi possível verificar o status do nick.` + RESET);
          }
          resolve();
        }
      })
      .catch((error) => {
        console.log(RED + `[${username}] Não foi possível verificar o status do nick. ERRO: ${error}` + RESET);
        reject(error);
      });
  });
  
}

module.exports = verifyUsername