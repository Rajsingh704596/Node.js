const a=[2,4,5,6,7];

console.log(a.map((cur)=>cur));


//!terminal part-  
      //# CLI["command line interface"] used to run js file"node.js"-
        // PS D:\Node.js> node node.js  
        // PS D:\Node.js> node node.js
        // [ 2, 4, 5, 6, 7 ]

      //# REPL ( Read evaluation print loop use ) used when we write node in terminal4+   
        // PS D:\Node.js> node
        // Welcome to Node.js v20.18.1.
        // Type ".help" for more information.
        // > .help
        // .break    Sometimes you get stuck, this gets you out
        // .clear    Alias for .break
        // .editor   Enter editor mode
        // .exit     Exit the REPL
        // .help     Print this help message
        // .load     Load JS from a file into the REPL session
        // .save     Save all evaluated commands in this REPL session to a file

        // Press Ctrl+C to abort current expression, Ctrl+D to exit the REPL
        // >
        
      //# Repl k through single line code ko run kar sk te hai   
        // > 4+5
        //   9

//# Windows - browser ka global obj.   ,global -node js ka global obj.

 globalThis.console.log("Rock");    //globalThis is special keyword to work with any java script environment and get that global object
 global.console.log("rock") 

//* common js
// console.log(document)        //it's not run // it's run in js (browser)

 console.log(process);
 console.log(module);    //module is constant not a part of global object
 globalThis.console.log(module)
 console.log(globalThis.module)

 //$ In Node js is all about module

