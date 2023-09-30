const verifyUsername = require('./src/functions/verifyUsername');
const nickGenerator = require('./src/functions/nickGenerator');

// Colors
const RED = '\x1b[31m';
const GREEN = '\x1b[32m';
const YELLOW = '\x1b[33m';
const RESET = '\x1b[0m';

async function main() {
  console.log(GREEN + `Iniciando aplicação... | [AndersonPGS](https://github.com/AndersonPGS/mc-nickname-checker)` + RESET);

  const generator = nickGenerator();
  
  const generateAndVerify = async () => {
    const { value, done } = await generator.next();
    if (!done) {
      await verifyUsername(value);
      generateAndVerify();
    } else {
      console.log(GREEN + `Todos os nicks foram gerados e verificados.` + RESET);
      return
    }
  };

  generateAndVerify();
}

main();