//! Create a CLI File Creation App using Node.js -
//^ (2 prompt) enter the file name ,  enter the content

//here we use readline module and file system module

import readline from 'readline';
import fs from 'fs';

//# using readline we createInterface where we read or write obj. property
 const rl=readline.createInterface({
    input: process.stdin,           // for data read
    output: process.stdout,         // for data write
 })


 const fileCreation=()=>{

    //rl.question("string prompt show in CLI", callbackFun.(data get as a parameter which is write by user))
    rl.question('Enter your filename:',(filename)=>{
      rl.question("Enter the Content for your file:",(content)=>{
         
        //file create using Async await -    .writeFile method( path, data(content jo write kar na hai ), options(utf-8 optional), callback fun)  //agar path nhi hai to uss name se file create kar-ega
        fs.writeFile(`${filename}.txt`,content,(err)=>{
            if(err){
                console.log(`Error writing the file:,${err.message}`)
            }
            else{
                console.log(`File "${filename}.txt" created successfully !`)
            }

            rl.close();       //todo- Note Once prog. done we need to use .close method of readline module for interface connection close
        })

      })
    })
 }

 fileCreation();


