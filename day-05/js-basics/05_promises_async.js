// Promises and Async/Await

// A simple Promise
function getUserData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                id: 1,
                name: "Krushnai",
                role: "Software Engineer"
            });
        }, 1000);
    });
}

// Using Promise with .then()
console.log("Fetching user data...");

getUserData()
    .then(user => {
        console.log("User Data:", user);
    });

// Using async/await
async function displayUser() {
    try {
        console.log("\nUsing async/await...");

        const user = await getUserData();

        console.log("Name:", user.name);
        console.log("Role:", user.role);
    } catch (error) {
        console.log("Error:", error.message);
    }
}

displayUser();