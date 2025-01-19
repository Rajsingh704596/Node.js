//! Todo Application-

import readline from "readline";                 //readline module use - for interact with CLI       (inbuilt module of node.js)

const rl=readline.createInterface({              //createInterface method use where object pass (Read , Write property)
  
    //2 property create
    input:process.stdin,          //process.stdin use for our data read
    output:process.stdout,        //process.stdout use for write in CLI
})

const todos= [];      //here data store in array

//function create
const showMenu=()=>{
      console.log("\n1. Add a Task");
      console.log("2. View tasks");
      console.log("3. Exit");
      
      rl.question("Choose an Option:", handleInput);              //question method(string, callback fun pass)      
}

const handleInput=(option)=>{  //user n kya choose ki ya hai us se option k rup m get kar-ege
    if(option === "1"){
        rl.question("Enter the Task:",(task)=>{
            todos.push(task);                         // task push in todos(which is array)
            console.log("Task added:", task);
            showMenu();
        })
    }
    else if(option === "2"){
            console.log("\nYour Todos List:");
            // foreach loop use array of element show  , we also use map method
            todos.forEach((task, index)=>{
                console.log(`${index+1}.${task}`);
            })
            showMenu();
    }

    else if(option === "3"){      
            console.log("end the Task, Good bye");
            rl.close();                         //close method use for closed the program
    }

    else{
        console.log("Invalid Option, Please try again");
        showMenu();
    }
}

showMenu();

//o/p in Terminal-

// PS D:\Node.js> cd .\Mini_Project
// PS D:\Node.js\Mini_Project> node --watch ./CLI_Todo_App.js

// 1. Add a Task
// 2. View tasks
// 3. Exit
// Choose an Option:1
// Enter the Task:apple
// Task added: apple

// 1. Add a Task
// 2. View tasks
// 3. Exit
// Choose an Option:1
// Enter the Task:boy
// Task added: boy

// 1. Add a Task
// 2. View tasks
// 3. Exit
// Choose an Option:2

// Your Todos List:
// 1.apple
// 2.boy

// 1. Add a Task
// 2. View tasks
// 3. Exit
// Choose an Option:3
// end the Task, Good bye
// Completed running './CLI_Todo_App.js'
