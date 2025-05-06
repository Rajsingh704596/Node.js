//# Synchronous v/s Asynchronous
//* Synchronous-  Task are executed sequentially, Each task blocks the next until previous task not completed.
//* Asynchronous-  Task don't block execution (not wait for previous task completed). Uses callbacks, promises, async/await


const fs = require('fs');              //common js require(import) fs module              //so package.json se   "type": "module", ko hat-ana pad-ega because wo ecma script 6 ka feature use kane k li ye ho ta hai like import , Export..

//Synchronous task
console.log("start");

//Synchronous task
const data= fs.readFileSync('file.txt','utf-8');
console.log("Sync",data);

//Asynchronous task
fs.readFile('file.txt','utf-8',(err,data)=>{
    if(err) throw err;
    console.log("Async".data);
});

//Synchronous task
console.log("end");


//o/p-     start
        // Sync File executed successfully
        // end
        // Async File executed successfully



//$ Node.js Elements-  (inside node.js 2 elements use - V8 engine , Libuv)        
//# V8 engine- Google's high-performance JavaScript engine that ' compiles JavaScript into machine code.'  (V8 engineHandle Synchronous Operation)

//# Libuv - it is C library that provide Node.js with cross-platform support for asynchronous I/O operations, file system, networking, and more. Includes the "event loop" and "thread pool", enabling non-blocking tasks like file reading, networking, and timers. (Libuv handle Asynchronous operation where " event loop handel non-blocking task and thread pool handle asynchronous operation )


//$ How Node.js Program starts -
//* Main thread [ Initialize Program  -->  Top level code(code which is outside function, variable declare) -->  Imports Modules(load that library which is depended on prog./application) -->  Registers Event Callbacks(to set a function that will run with certain event occurs like Reading file , handling a request) --> Start Event loop-----Offloading-----> *Thread Pool (Thread#1  Thread#2 Thread#3 Thread#4)[handle Asynchronous operation ( data run in background by thread pool)]

//@ Main thread handled light weight task ,synchronous task 

//@ Thread Pool by default has 4 threads.  //# Event loop, and thread pool are part of Libuv which offloads heavy tasks to thread pool.
//@ Heavy asynchronous tasks handle include file system, cryptography, compression, etc.

