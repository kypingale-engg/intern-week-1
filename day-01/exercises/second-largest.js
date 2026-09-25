const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter numbers separated by spaces: ", (input) => {
  const numbers = input
    .split(" ")
    .map(Number);

  if (numbers.length < 2) {
    console.log("Please enter at least two numbers.");
    rl.close();
    return;
  }

  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > largest) {
      secondLargest = largest;
      largest = numbers[i];
    } else if (
      numbers[i] > secondLargest &&
      numbers[i] !== largest
    ) {
      secondLargest = numbers[i];
    }
  }

  if (secondLargest === -Infinity) {
    console.log("Second largest number does not exist.");
  } else {
    console.log("Second largest number:", secondLargest);
  }

  rl.close();
});