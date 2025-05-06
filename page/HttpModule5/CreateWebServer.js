//! HTTP module- 
//# The http module in node.js allows developers to create an Http server and handle client requests and server responses.
//# use- "creation of REST APIs, web pages, and other networked applications".

//! Web Server-
//# it serves web content(html,css,js) to client over internet.It uses protocol like 'HTTP /HTTPS' to handle requests and responses.

//@ Note- HTTP module wo hi http protocol hai jo node js provide kar rha hai 


//* step-1 require http module
const http =require("http");


//$ http method-

//* 1. Method .createServer() - use for create web server      
 //? behind the scene server is eventEmitter
//^ web server
const server= http.createServer((req,res)=>{            //inside createserver call back function pass where 2 parameter pass- req,res
    //default home page
    if(req.url === "/"){
        res.write("Welcome Rock");  //data write for response
        res.end();     //data send
    }

    if(req.url === "/contact"){
        res.setHeader("Content-Type","text/plain");  // .setHeader() is me property define kar te hai Pascal case m- Content-Type , us ka type (kis type ka data bhej rhe hai)
        res.write("thx for contact");  //data write for response  (here we send plain text)
        res.end();     //data send
    }

    if(req.url === "/source-code"){
        res.setHeader("Content-Type","text/html");  // .setHeader() is me property define kar te hai Pascal case m- Content-Type , data ka type jo bhej rhe hai
        res.write("<h1>thx for contacts</h1>");  //data write for response  (here we send html code)
        res.end();     //data send
    }

    });    
            

const PORT=3000 ;          //^ Port no create

//# server.listen() ka use server ko start karne or ek specific port pr incoming request ko handle karne k liye hota hai 24/7.

//^ start HTTP server listening for connection(2 argument pass - PORT ,callback)       (now server handle incoming request from the client)  
server.listen(PORT,()=>{
    console.log(`Listening on PORT ${PORT}`);                            //o/p- localhost:3000  - Welcome Rock
})                                                                       //o/p- localhost:3000/contact -thx for contact
                                                                         //o/p- localhost:3000/source-code

//@ server start one time if we change the code first terminate the server ctrl+c -close , then restart ...so this is the main issue                                                                         

//! note- but we use express.js to simplify code to create server

//!$ note- The --watch flag was introduced in Node.js version 18.11.0 (released in October 2022). This flag allows Node.js to automatically restart the server whenever any changes are made to the files being executed.
//*syntax in terminal for run-        node --watch ./filename

//@ now we don't need nodemon (third party package) for auto restart the node js app server 
//* syntax in terminal        npm i nodemon       
//  for run                   nodemon ./filename

//! package.json file- it is a configuration file used in node.js project. it contains metadata about the project and information on project dependencies.
//^ " npm init " to initialize the project to create package.json (@ must be initialize in root folder "using this cd..")
// PS D:\Node.js> npm init
// package name: (node)
// version: (1.0.0) 
// description: Node and Express series
// entry point: (node.js
// test command: 
// git repository:
// keywords:
// author: Rock
// license: (ISC)
// Is this OK? (yes) y          ( now it's done package.json file created)

//^ or we can use for automatic create file package.json without take to much time in terminal-    npm init -y


