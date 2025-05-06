//! Challenge: "Event Maestro: Handle It All!"

//! Objective
//* Create a program using Node.js EventEmitter that:

//? Listens for multiple types of user events (e.g. login, logout, purchase, and profile update).
//? Tracks how many times each event is emitted(trigger/call).
//? Logs a summary of all event occurrences when a special summary event is triggered.

//! Requirements
//? Create at least four custom events (e.g. user-login, user-logout, user-purchase, profile-update).
//? Emit these events multiple times with different arguments (e.g. username, item purchased).
//? Track and store the count of each event type.
//? Define a summary event that logs a detailed report of how many times each event was triggered.


// //* step1 Import EventEmitter class 
// const EventEmitter = require("events");

// //* Step-2 Create an instance of EventEmitter
// const emitter = new EventEmitter();


// //$ tracks how many times each event is emitted (summary event), so that's why we create a object 
// const eventCounts = {
//   "user-login": 0,
//   "user-logout": 0,
//   "user-purchase": 0,
//   "profile-update": 0,
// };

// //$ Event listeners (event define)
// emitter.on("user-login", (username) => {         // .on("event name", call back func (argument)=>{})
//   eventCounts["user-login"]++;                   // object property access (user-login key's value increase by 1 )for event count which is basically define in object
//   console.log(`${username} logged in!`);         // console.log m username pass    //o/p-  Rock logged in!
// });

// emitter.on("user-purchase", (username, item) => {
//   eventCounts["user-purchase"]++;                      //use for event counts
//   console.log(`${username} purchased ${item}!`);      //o/p- Rock purchased Laptop!
// });

// emitter.on("profile-update", (username, field) => {
//   eventCounts["profile-update"]++;
//   console.log(`${username} updated their ${field}!`);  //o/p- Rock updated their email!
// });

// emitter.on("user-logout", (username) => {
//   eventCounts["user-logout"]++;                    //here special character(-) use that why we access like this type ["using square-bracket"] otherwise we can normally access by eventCounts.userLogout   
//   console.log(`${username} logged out!`);              //o/p- Rock logged out!
// });


// //$ Emit events (event call with different argument) /we can also say .emit means "Event call /signal produce /trigger"
// emitter.emit("user-login", "Rock");                  // it means userName Rock want to login                  
// emitter.emit("user-purchase", "Rock", "Laptop");     // it means user Rock purchase Laptop
// emitter.emit("profile-update", "Rock", "email");     // it means user Rock update email 
// emitter.emit("user-logout", "Rock");                 // it means user Rock logout



// //* Event listener
// emitter.on("summary", () => {          //here summary event listen
//   console.log(eventCounts);                      //object pass in console which has all event emitted time
// });

// //* Show the summary (by event call)

// emitter.emit("summary");                   //o/p- {
//                                                       //   'user-login': 1,
//                                                       //   'user-logout': 1,
//                                                       //   'user-purchase': 1,
//                                                       //   'profile-update': 1
//                                                       // }

// //@ previous session ko khi bhi local storage m store nhi kar rhe hai is li ye  har bar event trigger (all 4 custom event tracking time) hone pr bhi 1 hi answer aay-ega 



//^ 2nd Method here when event emit , evenCounts obj store in eventCount.json file using fs module(AsyncAwait)

const fs = require('fs').promises; // Use fs.promises for async/await
const EventEmitter = require('events');
const emitter = new EventEmitter();

// Initialize default event counts
let eventCounts = {
  "user-login": 0,
  "user-logout": 0,
  "user-purchase": 0,
  "profile-update": 0,
};

// Load event counts from file (async)
async function loadEventCounts() {
  try {
    const data = await fs.readFile('eventCounts.json', 'utf8');
    eventCounts = JSON.parse(data);
  } catch (err) {
    // If file doesn't exist, keep default counts
    console.log("No existing counts found. Starting fresh.");
  }
}

// Save event counts to file (async)
async function saveEventCounts() {
  try {
    await fs.writeFile('eventCounts.json', JSON.stringify(eventCounts), 'utf8');
  } catch (err) {
    console.error("Failed to save event counts:", err);
  }
}

// Event listeners (now async)
emitter.on("user-login", async (username) => {
  eventCounts["user-login"]++;
  console.log(`${username} logged in!`);
  await saveEventCounts(); // Await the save
});

emitter.on("user-purchase", async (username, item) => {
  eventCounts["user-purchase"]++;
  console.log(`${username} purchased ${item}!`);
  await saveEventCounts();
});

emitter.on("profile-update", async (username, field) => {
  eventCounts["profile-update"]++;
  console.log(`${username} updated their ${field}!`);
  await saveEventCounts();
});

emitter.on("user-logout", async (username) => {
  eventCounts["user-logout"]++;
  console.log(`${username} logged out!`);
  await saveEventCounts();
});

// Summary event (async)
emitter.on("summary", () => {
  console.log("Event Counts Summary:");
  console.log(eventCounts);
});

// Initialize and run (wrapped in async IIFE)
(async () => {
  await loadEventCounts(); // Load counts before emitting events

  // Emit events
  emitter.emit("user-login", "Rock");
  emitter.emit("user-purchase", "Rock", "Laptop");
  emitter.emit("profile-update", "Rock", "email");
  emitter.emit("user-logout", "Rock");

  // Show summary
  emitter.emit("summary");
})();