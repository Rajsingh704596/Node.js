//! Streams(file ko small chunks m separate kar ke send kar na) and Buffers (small chunks ko temporary store m get kar na )-

//# Streams in Node.js are a way to handle continuous flow of data.
//# They enable reading or writing data piece by piece instead of loading the entire data into memory.

//# A Buffer in Node.js is a temporary storage area for binary data.
//# Buffer work as chunks of data, enabling efficient data manipulation in streams.
//# It helps to decrease memory consumption of our web server.

//# There are 4 types of streams in Node.js : Writeable, Readable, Duplex, Transform.

// 1 st file data ko --> 2nd file m copy kar ke paste kar na hai  , we also use this task with fs.writeFile and fs.readFile for small file but it's take too much time for big data or take more memory consuming and system crash issue face so we avoid it.

//^ so here we send input.txt data into output.txt using createReadStream , createWriteStream
import {createReadStream, createWriteStream} from "fs";               //get with fs module
import path from "path";

const inputFilePath = path.join(import.meta.dirname, "input.txt");          //after es module we use import.meta.dirname for directory get
const outputFilePath = path.join(import.meta.dirname, "output.txt");        // path.join se current directory m add  
// it's automatically create if output.txt not present 

//^ for data read
const readableStream = createReadStream(inputFilePath,{encoding:"utf-8", highWaterMark:16})         // (file path insert,{encoding data, meta data we use but here we use highWaterMark to set chunk amount (here 16 character is one chunk)})

//^ for file create
const writeableStream= createWriteStream(outputFilePath);

//^ now read data(input.txt) add into outputFile (output.txt) , so we use built in method pipe
//* pipe method used to connect our readableStream to our WriteableStream

// readableStream.pipe(writeableStream);       // and we get result here 

//if we want to show chunk in terminal we use this code---     Listen for data chunks (event listener .on use)
readableStream.on("data",(chunk)=>{
    console.log("Buffer (chunk):", Buffer.from(chunk));  // convert the chunk to a buffer
    console.log("Received chunk:", chunk);   //Logs each 16-byte chunk
    writeableStream.write(chunk);        // write each chunk to output file
})

//Handle stream end
readableStream.on("end",()=>{
    console.log("File read completed");            // when all data get these line will fire
    writeableStream.end();
})

//for handle errors
readableStream.on("error", (err)=> console.error("Error:", err));
writeableStream.on("error", (err)=> console.error("Error:", err));



//o/p-
// Restarting '.\\Streams_Buffers.js'
// Buffer (chunk): <Buffer 68 65 72 65 20 77 65 20 75 73 65 20 73 65 6e 64>
// Received chunk: here we use send
// Buffer (chunk): <Buffer 20 64 61 74 61 20 69 6e 70 75 74 2e 74 78 74 20>
// Received chunk:  data input.txt 
// Buffer (chunk): <Buffer 74 6f 20 6f 75 74 70 75 74 2e 74 78 74 20 75 73>
// Received chunk: to output.txt us
// Buffer (chunk): <Buffer 69 6e 67 20 0d 0a 53 74 72 65 61 6d 73 20 61 6e>
// Received chunk: ing 
// Streams an
// Buffer (chunk): <Buffer 64 20 42 75 66 66 65 72 73 20 6d 65 74 68 6f 64>
// Received chunk: d Buffers method
// Buffer (chunk): <Buffer 0d 0a 31 20 73 74 20 66 69 6c 65 20 2d 2d 2d 3e>
// Received chunk:
// 1 st file --->
// Buffer (chunk): <Buffer 20 32 20 6e 64 20 46 69 6c 65 20 0d 0a 0d 0a 74>
// Received chunk:  2 nd File

// t
// Buffer (chunk): <Buffer 68 69 73 20 70 72 6f 63 65 73 73 20 75 73 65 64>
// Received chunk: his process used
// Buffer (chunk): <Buffer 20 73 61 6d 65 20 77 68 65 6e 20 77 65 20 75 70>
// Received chunk:  same when we up
// Buffer (chunk): <Buffer 6c 6f 61 64 20 66 69 6c 65 20 6f 72 20 64 6f 77>
// Received chunk: load file or dow
// Buffer (chunk): <Buffer 6e 6c 6f 61 64 20 66 69 6c 65 0d 0a 0d 0a 0d 0a>
// Received chunk: nload file



// Buffer (chunk): <Buffer 53 74 72 65 61 6d 73 20 69 6e 20 4e 6f 64 65 2e>
// Received chunk: Streams in Node.
// Buffer (chunk): <Buffer 6a 73 0d 0a 0d 0a 53 74 72 65 61 6d 73 20 61 6c>
// Received chunk: js

// Streams al
// Buffer (chunk): <Buffer 6c 6f 77 20 75 73 20 74 6f 20 72 65 61 64 20 61>
// Received chunk: low us to read a
// Buffer (chunk): <Buffer 6e 64 20 77 72 69 74 65 20 64 61 74 61 20 65 66>
// Received chunk: nd write data ef
// Buffer (chunk): <Buffer 66 69 63 69 65 6e 74 6c 79 2e 0d 0a 4c 65 74 27>
// Received chunk: ficiently.
// Let'
// Buffer (chunk): <Buffer 73 20 70 72 6f 63 65 73 73 20 74 68 69 73 20 66>
// Received chunk: s process this f
// Buffer (chunk): <Buffer 69 6c 65 20 69 6e 20 63 68 75 6e 6b 73 20 6f 66>
// Received chunk: ile in chunks of
// Buffer (chunk): <Buffer 20 31 36 20 62 79 74 65 73 21>
// Received chunk:  16 bytes!
// File read completed
// Completed running '.\\Streams_Buffers.js'






