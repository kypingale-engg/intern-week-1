const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter first sorted array: ", (input1) => {
  rl.question("Enter second sorted array: ", (input2) => {

    const array1 = input1.split(" ").map(Number);
    const array2 = input2.split(" ").map(Number);

    const merged = [];
    let i = 0;
    let j = 0;

    while (i < array1.length && j < array2.length) {
      if (array1[i] < array2[j]) {
        merged.push(array1[i]);
        i++;
      } else {
        merged.push(array2[j]);
        j++;
      }
    }

    while (i < array1.length) {
      merged.push(array1[i]);
      i++;
    }

    while (j < array2.length) {
      merged.push(array2[j]);
      j++;
    }

    console.log("Merged array:", merged.join(" "));

    rl.close();
  });
});