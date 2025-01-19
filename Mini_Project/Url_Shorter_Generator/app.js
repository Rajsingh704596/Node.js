//! Creating a Server and Serve HTML file -  (Backend part)

import {createServer} from 'http';         //here we destructure createServer from http module
import {readFile, writeFile } from 'fs/promises';           //we use FS Promises (Async await) version to read and write the files Asynchronously  
import path from "path";
import crypto from 'crypto';

const Data_File= path.join("data",'links.json');  //data file create must , if links.json not create so below we create empty object in link.json file


// const server= createServer(async(req, res)=>{
//    console.log(req.url);

//     if(req.method === "GET"){
//         if(req.url==="/"){
//             try {
//                 const data= await readFile(path.join("public","index.html"))                 //data get using readFile , here we don't need to use fs.readfile because we already destructure,       path.join ("public folder add kar ke",us me "index.html" ko read kar-e) 
//                 res.writeHead(200, {'Content-Type':"text/html"});   
//                 res.end(data);           //public folder ke and_er ka data dik-ha de ga
//             } catch (error) {
//                 res.writeHead(404, {'Content-Type':"text/html"});            //writeHead method( status code , status message or Headers)
//                 res.end("404 Page not found")
//             }
//         }

//         else if(req.method === "GET"){
//             if(req.url==="/style.css"){
//                 try {
//                     const data= await readFile(path.join("public","style.css"))                 //data get using readFile , here we don't need to use fs.readfile because we already destructure,       path.join ("public folder add kar ke",us me "index.html" ko read kar-e) 
//                     res.writeHead(200, {'Content-Type':"text/css"});   
//                     res.end(data);           //public folder ke and_er ka data dik-ha de ga
//                 } catch (error) {
//                     res.writeHead(404, {'Content-Type':"text/html"});            //writeHead method( status code , status message or Headers)
//                     res.end("404 Page not found")
//                 }
//             }
//         }    
//     }
// })

//$ better way

const serveFile=async(res, filePath, contentType)=>{
    try {
        const data= await readFile(filePath)                
        res.writeHead(200, {'Content-Type':contentType});   
        res.end(data);        
    } catch (error) {
        res.writeHead(404, {'Content-Type': "text/plain"});            
        res.end("404 Page not found")
    }
}

//# data get from data server using fs/promises async/await  , FS module return promises 
const loadLinks =async()=>{
    try {
        const data = await readFile(Data_File, "utf-8");      // link.json file read
        return JSON.parse(data);                       //data change into javascript object form which we want when we get data from server
    } catch (error) {
        if(error.code === "ENOENT"){  //ENOENT  - Error No Entry ,   it means file not exist/present
           await writeFile(Data_File , JSON.stringify( {} ))    // file(links.json) not exist so server m empty object file(links.json) create kar tho jis se json string formate m change kar tho server m bhe-jne k li ye 
           return {};          // return empty obj
        }
     console.error("Error reading file:", error);  // Log any other errors
       throw error;  
    }
}

//# fun create for data(frontend data) add/write inside links.json file using Fs/ promises async/await to write file
const saveLinks= async(links)=>{         //links get as a parameter where key and value pass which is object formate
    await writeFile(Data_File, JSON.stringify(links))     //data ko object format se JSON string format m change kar ke Data_File m write kar ege
        
}

//# Create the server
const server= createServer(async(req, res)=>{
    console.log("Request URL:", req.url);  // Log the requested URL
    console.log("Request Method:", req.method);  // Log the method

     if(req.method === "GET"){
        // home page req.
         if(req.url === "/" ){
            return serveFile( res,  path.join("public", "index.html"), "text/html")             //3 argument pass   //here both index.html or style.css run because inside index.html style.css link
          } 
          else if(req.url==="/style.css"){
             return serveFile( res,  path.join("public", "style.css"), "text/css")
             } 
             
        //API setup- Creating an API(req.for /links) to share links.json Data to frontend
        else if(req.url==="/links"){
            const links = await loadLinks();         //here loadLinks is fun. which is define above and use for data(links.json) get from server
            console.log("Loaded links:", links);  // Add this log to debug
            res.writeHead( 200, {"Content-Type":"application/json"} );      //data share in json formate thats why we application/json
            return res.end(JSON.stringify(links))      // object data change into json string format   
        } 
        //Redirect Logic when user click in links(short URLs)
        else{
            const links =await loadLinks();
            const shortCode=req.url.slice(1);        // EK forward slash ko remove kar na k li ye slice operator use
            console.log("link redirect",req.url);          //o/p in console-  link redirect   /google-site      (here we get / forward slash thats why we use slice method to remove this forward slash)

            if(links[shortCode]){                         // agar particular shortcode exist kar ta hai tb redirect kar na hai
               res.writeHead(302,{location: links[shortCode]})  //location wa li value pr page ko redirect kar de ga  means location: links[google-site]===> 
                                                                                                                         // location:  http://google.com
               return res.end();
            }
            //agar wo shortcode location not work properly
            res.writeHead(404, {"Content-Type":"text/plain"});
            return res.end("Shortened URL is not found");
         } 
        }
  //# Form Submission        
    // handling Post method for form data -
    if(req.method === "POST" && req.url === "/shorten"){   //it trigger when post method use to call this api "/shorten"
        console.log("Handling /shorten route");
        
        //first data get from frontend and store in body variable one by one-
        let body ="";
        req.on("data",(chunk)=>{
          return   body += chunk;     //body = body + chunk;      //note- constant variable m koi bhi value assign nhi kar sk te is li ye let use to create body variable
        });

        // when data end then end trigger event-
        req.on("end", async()=>{
            console.log("Received body:",body);
            
            const {url, shortCode}=JSON.parse(body);   //url or shortcode destructure kar li ya directly body se ji se javascript object formate m change ki ya JSON.parse method k through body se 
          
            //if url value is empty then (Validating URL input )
            if(!url){
              res.writeHead( 400, {"Content-Type":"text/plain"} );  
              return res.end("URL is required");
            }
            
             // store in our new variable = if shortcode exist then store || if short code not exist so made our random short code and store
            const finalShortCode = shortCode || crypto.randomBytes(4).toString("hex");   
           
             // data get from server when hit the /shorten url  (Reading data from links.json )
            const links = await loadLinks();         //here loadLinks is fun. which is define above and use for data(links.json) get from server
    
            
            //checking for Duplicate URLs/Short Codes exist -
            if(links[finalShortCode]){         // here it's  object property for access like links.finalShortCode  (if true send err)
                res.writeHead( 400, {"Content-Type":"text/plain"} );  
                return res.end("Short Code already exist, please choose another.");              //then send error
            }    
          
            // Writing Data to links.json 
            links[finalShortCode] = url;         //url value pass for particular ShortCode  (so now links.json file m data is formate m store {finalShortcode : url}...)

            await saveLinks(links)          //links(key:value) pass as argument to saveLinks fun
             
            //agar sb successful write ho gaya file 
            res.writeHead( 200, {"Content-Type":"application/json"} );  
            res.end(JSON.stringify({success: true, shortCode: finalShortCode}));       

        })
    }
    else {
        res.writeHead(404, {"Content-Type": "text/plain"});
        return res.end("404 Not Found");
    }
} )
 

const PORT= 3000;        //port no create

//listen to Our sever
server.listen(PORT ,()=>{
  console.log(`Server running at http://localhost:${PORT}`)
})