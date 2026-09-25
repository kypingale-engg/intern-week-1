const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter numbers separated by spaces: ", (input) => {
  const numbers = input.split(" ").map(Number);

  const n = numbers.length + 1;
  const expectedSum = (n * (n + 1)) / 2;

  let actualSum = 0;

  for (let i = 0; i < numbers.length; i++) {
    actualSum += numbers[i];
  }

  const missing = expectedSum - actualSum;

  console.log("Missing number:", missing);

  rl.close();
});