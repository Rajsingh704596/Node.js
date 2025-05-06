//! fs(file system) module in Node.js is a core module that allows "to work with the file system, enabling you to read, write, update/append, delete, and watch/open files, Rename".

//$ CRUD operation in Synchronous way-

//@ 1. txt file m Data ko write/create kar na hai-
//# fs.writeFileSync(): Writes data to a file. If the file doesn't exist, it will be created. If the file exists, it overwrites the content.
//* Syntax-  fs.writeFileSync(filePath, data, options);
//? filePath: The file path to write to.
//? data: The content to write to the file.
//? options: (Optional) Including encoding ('utf-8'), node, or flags.       [other- utf-8, ascii, base64, hex, latin1, ucs2, utf16le, binary]

//^ utf-8 (short for "8-bit unicode Transformation Format") Encodes characters from nearly all written language, symbols, and emojis.

// const fs=require('fs');          // fs module import /require first
// const fileName="test.txt";

// const writeFile= fs.writeFileSync(fileName,"the Initial Data","utf-8");
// console.log(writeFile);                        // so test.txt file create and write there-  the initial data

//^ better way-
// const fs=require('fs');
// const path=require('path');

// const fileName="test.txt";
// const filePath= path.join(__dirname, fileName);        //it's make sure particular folder path(__dirname) m ye fileName(test.txt) join ho jaye
// console.log(__dirname);           //o/p-  D:\Node.js\page\FileSystemModule

// const writeFile= fs.writeFileSync(filePath, "The initial data updated again", "utf-8");
// console.log(writeFile);  // o/p- uss filePath m test.txt file m data overwrite kar tho

//@ 2. txt file m Data ko Read kar na hai-
//# fs.readFileSync(): Reads a file's content and returns it as a string or Buffer.
//* syntax- fs.readFileSync(filePath, options);
//? filePath: Path of the file to read.
//? options: (Optional) Encoding ('utf-8') to get data as a string. (kis formate m data read karna hai)

// const fs= require('fs');
// const path= require('path');

// const fileName="test.txt";
// console.log(__dirname)            //o/p- D:\Node.js\page\FileSystemModule4
// const filePath= path.join(__dirname, fileName);                   //o/p- D:\Node.js\page\FileSystemModule4\test.txt

// //^ 1 st way-
// const readFile= fs.readFileSync(filePath);
//console.log(readFile);                      //o/p- <Buffer 54 68 65 20 69 6e 63 6c 75 64 65 64 20 64 61 74 61 20 75 70 64 61 74 65 64 20 61 67 61 69 6e>
// console.log(readFile.toString());         // o/p- The included data updated again   //here toString method used to convert binary data into string form
//$  Use .toString() if working with binary data (Buffer): For example, if you need both the raw binary data and its string representation.

// //^ 2 nd way-(no need .toString())
// const readFile2 =fs.readFileSync(filePath,"utf-8");
// console.log(readFile2);                 //o/p- The included data updated again

//@ 3. txt file m Data ko update/append kar na hai-
//# fs.appendFileSync(): Append data to a file. If the file does not exist, it creates the file.
//* syntax- fs.appendFileSync(filePath, data, options);
//? filePath: File Path to append to.
//? data: Content to add to the file.
//? options: (Optional) Encoding options ('utf-8').

const fs=require('fs');
const path=require('path');

const fileName="test.txt";
const filePath= path.join(__dirname, fileName);        //it's make sure particular folder path m ye fileName join ho ja ye agar nhi hai to           // join is li ye use ki ya hai ta ki uss folder m jake kis file ko Read /write / update kar na hai wo path create ho ja ye
// console.log(filePath);     //o/p- D:\Node.js\page\FileSystemModule4\test.txt
const appendFile= fs.appendFileSync(filePath, "\n The initial data updated again", "utf-8");         //or uss particular file name data add ho ja ye
 console.log(appendFile);                // test.txt file m new data add hoke update ho ja ye ga, old data bhi rhega

//@ 4 txt file m data ko delete kar na hai-
//# fs.unlinkSync(): Delete a file by its path.
//* syntax- fs.unlinkSync(filePath);
//? filePath: The path of the file to delete.

// const fs=require('fs');
// const path=require('path');

// const fileName="test.txt";
// const filePath= path.join(__dirname, fileName);

// const fileDelete= fs.unlinkSync(filePath);
// console.log(fileDelete);                         //o/p- test.txt file delete

//@ 5. txt file ka name change (Rename) kar ne k li ye
//# Rename File (fs.renameSync): Renames a file from one name to another.
//* syntax- fs.renameSync(oldPath, newPath);
//? oldPath: Current File path.
//? newPath: New File Path or name.

// const fs = require("fs");
// const path = require("path");
// const fileName = "test.txt";
// const filePath = path.join(__dirname, fileName);

// const newUpdatedFileName = "updateTest.txt";
// const newFilePath = path.join(__dirname, newUpdatedFileName);
// const renameFile = fs.renameSync(filePath, newFilePath);
// console.log(renameFile);
