const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter numbers separated by spaces: ", (input) => {

  const numbers = input.split(" ").map(Number);

  let currentSum = numbers[0];
  let maximumSum = numbers[0];

  for (let i = 1; i < numbers.length; i++) {

    currentSum = Math.max(
      numbers[i],
      currentSum + numbers[i]
    );

    maximumSum = Math.max(
      maximumSum,
      currentSum
    );
  }

  console.log("Maximum subarray sum:", maximumSum);

  rl.close();
});