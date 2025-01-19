//! CRUD operation Fs in Asynchronous way-

const path=require("path");
const fs=require("fs");

const fileName="FsAsync.txt"
const filePath=path.join(__dirname, fileName);


//@ 1. write in file ( file m write data ko overwrite kar ke replace kar de ta hai )

//# fs.writerFile(): writes data to a file, replacing the file if it already exists.
//* syntax- fs.writeFile(path, data, options, callback);
//? path: file path to write to.
//? data: Content to write.
//? options: (Optional) Specifies encoding ('utf-8'), mode, or flag.
//? callback: A function with an err parameter.

    // fs.writeFile(filePath, "The data initialize into file", "utf-8",
    //   (err)=>{
    //     if(err) console.error(err);
    //     else console.log("File has been saved");            //o/p- File has been saved    ( FsAsync.txt k name se file create ho jay-egi jis me data add ho jay-ega  )
    // })



//@ 2. Read in file 

//# fs.readFile(): Reads the contents of a file asynchronously and returns the data as a buffer or string.
//* syntax- fs.readFile(path, options, callback);
//? path: file path to read from.
//? options: (Optional) An Object or string specifying the encoding ('utf-8') or flag ('r' for reading).
//? callback: A function with 2 parameter(err, data).

// fs.readFile(filePath, (err, data)=>{
//     if(err) console.error(err);
//     else console.log(data.toString());                               //o/p-The data initialize into file
// })

// fs.readFile(filePath, "utf-8", (err, data)=>{
//     if(err) console.error(err);
//     else console.log(data);                               //o/p-The data initialize into file
// })



//@ 3. Update/Append in file      ( existing data m extra data add kar de ta hai)
 
//# fs.appendFile(): Appends data to a file. If the file doesn't exist, it is created.
//* syntax- fs.appendFile(path, data, options, callback);

// fs.appendFile(filePath, "\nThe data initialize Updated data into file", "utf-8",
//       (err)=>{
//         if(err) console.error(err);
//         else console.log("File has been saved");            //o/p- The data initialize into file
//                                                             //     The data initialize Updated data into file
//     })


 //@4. Delete file
 //# fs.unlink(): Deletes a file asynchronously.
 //* syntax- fs.unlink(path, callback);

//  fs.unlink(filePath,  (err)=>{
//                                 if(err) console.error(err);
//                                 else console.log("File has been deleted");           //o/p- FsAsync.txt file deleted
                                                          
//   })


 //@5 Rename file  
 //* Syntax- fs.rename(oldpath, newpath, callback)

 const newUpdatedFileName="updateTest2.txt";
 const newFilePath= path.join(__dirname, newUpdatedFileName);
 
 fs.rename(filePath, newFilePath,
      (err)=>{
        if(err) console.error(err);
        else console.log("File name changed");            //o/p- File has been saved    ( FsAsync.txt k name se file create ho jay-egi jis me data add ho jay-ega  )
    })