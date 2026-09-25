const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const stack = [];

function push(item) {
  stack.push(item);
  console.log(item, "pushed into stack.");
}

function pop() {
  if (stack.length === 0) {
    console.log("Stack is empty.");
  } else {
    console.log("Popped:", stack.pop());
  }
}

function display() {
  if (stack.length === 0) {
    console.log("Stack is empty.");
  } else {
    console.log("Stack:", stack.join(" "));
  }
}

function menu() {
  console.log("\n--- Stack ---");
  console.log("1. Push");
  console.log("2. Pop");
  console.log("3. Display");
  console.log("4. Exit");

  rl.question("Enter your choice: ", (choice) => {

    switch (choice) {
      case "1":
        rl.question("Enter value: ", (value) => {
          push(value);
          menu();
        });
        break;

      case "2":
        pop();
        menu();
        break;

      case "3":
        display();
        menu();
        break;

      case "4":
        rl.close();
        break;

      default:
        console.log("Invalid choice.");
        menu();
    }
  });
}

menu();