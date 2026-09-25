const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter numbers separated by spaces: ", (input) => {

  const numbers = input.split(" ").map(Number);

  for (let i = 0; i < numbers.length - 1; i++) {

    for (let j = 0; j < numbers.length - 1 - i; j++) {

      if (numbers[j] > numbers[j + 1]) {

        const temp = numbers[j];

        numbers[j] = numbers[j + 1];

        numbers[j + 1] = temp;
      }
    }
  }

  console.log("Sorted array:", numbers.join(" "));

  rl.close();
});