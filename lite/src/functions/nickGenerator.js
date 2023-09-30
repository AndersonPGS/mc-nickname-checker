const config = require('../../../config.json');

async function* nickGenerator() {
  const characters = config.characters;
  const minNumber = config.minNumber;
  const maxNumber = config.maxNumber;

  async function* generateCombinationHelper(prefix, length) {
    if (length === 0) {
      yield prefix;
      return;
    }

    for (let i = 0; i < characters.length; i++) {
      const newPrefix = prefix + characters[i];
      yield* generateCombinationHelper(newPrefix, length - 1);
    }
  }

  for (let length = minNumber; length <= maxNumber; length++) {
    yield* generateCombinationHelper('', length);
  }
}

module.exports = nickGenerator;