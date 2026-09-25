const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter first array: ", (input1) => {
  rl.question("Enter second array: ", (input2) => {

    const array1 = input1.split(" ").map(Number);
    const array2 = input2.split(" ").map(Number);

    const common = [];

    for (let i = 0; i < array1.length; i++) {
      if (array2.includes(array1[i]) && !common.includes(array1[i])) {
        common.push(array1[i]);
      }
    }

    if (common.length === 0) {
      console.log("No common elements.");
    } else {
      console.log("Common elements:", common.join(" "));
    }

    rl.close();
  });
});