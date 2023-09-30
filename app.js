const verifyUsername = require('./src/functions/verifyUsername');
const nickGenerator = require('./src/functions/nickGenerator');
const fs = require('fs');

// Colors
const RED = '\x1b[31m';
const GREEN = '\x1b[32m';
const YELLOW = '\x1b[33m';
const RESET = '\x1b[0m';

async function main() {
  console.log(GREEN + `Iniciando aplicação... | [AndersonPGS](https://github.com/AndersonPGS/mc-nickname-checker)` + RESET);

  // Cria o arquivo checked.txt se não existir
  if (!fs.existsSync('checked.txt')) {
    fs.writeFileSync('checked.txt', '');
  }

  function loadCheckedNicks() {
    try {
      const data = fs.readFileSync('checked.txt', 'utf8');
      const checkedNicks = data.split('\n').filter(Boolean);
      return new Set(checkedNicks); // Usando um Set para evitar duplicatas
    } catch (err) {
      return new Set();
    }
  }
  
  const checkedNicksSet = loadCheckedNicks();

  const generator = nickGenerator();
  
  const generateAndVerify = async () => {
    const { value, done } = await generator.next();
    if (!done) {
      if (!checkedNicksSet.has(value)) {
        await verifyUsername(value);
        checkedNicksSet.add(value);
        fs.appendFileSync('checked.txt', value + '\n');
      }
      generateAndVerify();
    } else {
      console.log(GREEN + `Todos os nicks foram gerados e verificados.` + RESET);
      return
    }
  };

  generateAndVerify();
}

main();