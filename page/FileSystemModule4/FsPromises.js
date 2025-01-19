//! FileSystem module Asynchronous with Promises-

const fs= require("fs")
const path=require("path")

const fileName="fsPromises.txt";
const filePath=path.join(__dirname,fileName);


//? why use .then() and .catch() method?
//# .then()- ensures clear chaining of multiple asynchronous operations.
//# .catch()- centralizes error handling, making it easy to debug and manage failures. 


//$ jis bhi directory m us-me kon-si file hai ye dek-hne k li-ye (finding all file inside a folder)

// const filePath1=__dirname;  //^ current directory tk ka absolute path provide kar ta hai __dirname se
// fs.promises
//   .readdir(filePath1)  //^ directory m kit ne file hai ye show kar-ega
//   .then((data)=>console.log(data))                
//   .catch((err)=>console.log(err));           

   //O/p-  jis directory(FileSystemModule4) m hai us ki sari file name show ho jay-ega
   //       [
        //     'FsAsync.js',
        //     'FsPromises.js',
        //     'FsSync.js',
        //     'updateTest.txt',
        //     'updateTest2.txt'
        //   ] 

//$ CRUD Operation-

//@ 1. write to file with fs promises module-

//# create (Write a File): fs.promises.writeFile
//# creates or overwrites a file with specified content.
//# The writeFile() method writes data to a file asynchronously.
//# If the file does not exist, it is created.
//# If it exists, its content is replaced.

//* Syntax- fs.promises.writeFile(path, data, options).then().catch();
//? path: Path to the file.
//? data: Content to write.
//? options: Encoding ('utf-8'), flags, etc. (optional).

// fs.promises
//   .writeFile(filePath,"The first data write in fs file using promises","utf-8")
//   .then(console.log("File created successfully"))  
//   .catch((err)=>console.log(err))       

 //o/p- fsPromises.txt file create and also insert data(The first data write in fs file using promises)
 //! better way-
 const fs2 =require("fs/promises")
 fs2.writeFile(filePath,"The first data write in fs file using promises","utf-8")
  .then(console.log("File created successfully"))  
  .catch((err)=>console.log(err))       



//@ 2. Reading data using Fs Promises-
//# Read(Read a file): readFile()
//# The readFile() method reads data from a file.
//# It can return the data as a Buffer or string based on the encoding provided.

//* syntax- fs.promises.readFile(path,options).then(data=>...).catch(err=>...);
//? path: Path to the file
//? options: Encoding ('utf-8') or no encoding for binary data.

// fs.promises
//   .readFile(filePath,"utf-8")
//   .then((data)=>console.log(data))           
//   .catch((err)=>console.error("Error reading file",err));       

//o/p-The first data write in fs file using promises

//@ 3. Updating File data with fs promises-
//# Update (Append Content to a file): appendFile()
//# Adds content to the end of a file.
//# The appendFile() method adds content without overwriting the existing data.

//* syntax- fs.promises.appendFile(path, data, options).then().catch();
//? path: Path to the file.
//? data: Content to append.
//? options: Encoding('utf-8') or no encoding for binary data.

// fs.promises
//   .appendFile(filePath,"\nThe Updated data write in fs file using promises","utf-8")
//   .then(console.log("File updated successfully"))  
//   .catch((err)=>console.log(err)) 

//o/p-File updated successfully

//@ 4. Deleting files using fs promises
//# Delete (Remove a file): unlink()
//# Deletes a file from the filesystem.
//# The unlink() method removes the specified file asynchronously.

//* syntax- fs.promises.unlink(path).then().catch()
//? path: Path to the file.

// fs.promises
//   .unlink(filePath)
//   .then(console.log("File Deleted successfully"))  
//   .catch((err)=>console.error("Error deleting file:",err));

//o/p- File Deleted Successfully  (FsPromises.txt file delete)


//! Best way to import promises in node js

//todo-  We can actually just import(require) with fs/promises 
//todo-  Now, we don't need to using fs.promises everyTime

// const fs2 =require("fs/promises")
// fs2.unlink(filePath)
//   .then(console.log("File Deleted successfully"))  
//   .catch((err)=>console.error("Error deleting file:",err));

 //o/p- File Deleted successfully 