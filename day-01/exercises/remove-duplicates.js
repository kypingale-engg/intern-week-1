const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter numbers separated by spaces: ", (input) => {
  const numbers = input
    .split(" ")
    .map(Number);

  const uniqueNumbers = [...new Set(numbers)];

  console.log("Array without duplicates:", uniqueNumbers.join(" "));

  rl.close();
});