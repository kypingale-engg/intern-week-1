const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter a string: ", (text) => {
  const frequency = {};

  for (let i = 0; i < text.length; i++) {
    const character = text[i];

    if (character === " ") {
      continue;
    }

    if (frequency[character]) {
      frequency[character]++;
    } else {
      frequency[character] = 1;
    }
  }

  console.log("Character frequency:");

  for (const character in frequency) {
    console.log(character + ":", frequency[character]);
  }

  rl.close();
});