const verifyUsername = require('./functions/verifyUsername');
const nickGenerator = require('./functions/nickGenerator');

async function main() {
  const generator = nickGenerator();
  
  const generateAndVerify = async () => {
    const { value, done } = await generator.next();
    if (!done) {
      await verifyUsername(value);
      generateAndVerify();
    } else {
      console.log("Todos os fetches concluídos.");
    }
  };

  generateAndVerify();
}

main();