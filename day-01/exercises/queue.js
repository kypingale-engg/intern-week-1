const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const queue = [];

function enqueue(item) {
  queue.push(item);
  console.log(item, "added to queue.");
}

function dequeue() {
  if (queue.length === 0) {
    console.log("Queue is empty.");
  } else {
    console.log("Removed:", queue.shift());
  }
}

function display() {
  if (queue.length === 0) {
    console.log("Queue is empty.");
  } else {
    console.log("Queue:", queue.join(" "));
  }
}

function menu() {
  console.log("\n--- Queue ---");
  console.log("1. Enqueue");
  console.log("2. Dequeue");
  console.log("3. Display");
  console.log("4. Exit");

  rl.question("Enter your choice: ", (choice) => {

    switch (choice) {
      case "1":
        rl.question("Enter value: ", (value) => {
          enqueue(value);
          menu();
        });
        break;

      case "2":
        dequeue();
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