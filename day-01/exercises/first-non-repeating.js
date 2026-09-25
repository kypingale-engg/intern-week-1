const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter a string: ", (text) => {
  const frequency = {};

  for (let i = 0; i < text.length; i++) {
    const character = text[i];

    if (frequency[character]) {
      frequency[character]++;
    } else {
      frequency[character] = 1;
    }
  }

  let result = null;

  for (let i = 0; i < text.length; i++) {
    if (frequency[text[i]] === 1) {
      result = text[i];
      break;
    }
  }

  if (result !== null) {
    console.log("First non-repeating character:", result);
  } else {
    console.log("No non-repeating character found.");
  }

  rl.close();
});