const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter a string: ", (text) => {
  let reversed = "";

  for (let i = text.length - 1; i >= 0; i--) {
    reversed += text[i];
  }

  console.log("Reversed string:", reversed);

  rl.close();
});