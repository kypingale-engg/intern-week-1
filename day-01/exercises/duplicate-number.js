const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter numbers separated by spaces: ", (input) => {
  const numbers = input.split(" ").map(Number);

  const seen = new Set();
  let duplicate = null;

  for (let i = 0; i < numbers.length; i++) {
    if (seen.has(numbers[i])) {
      duplicate = numbers[i];
      break;
    }

    seen.add(numbers[i]);
  }

  if (duplicate !== null) {
    console.log("Duplicate number:", duplicate);
  } else {
    console.log("No duplicate number found.");
  }

  rl.close();
});