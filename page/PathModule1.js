//! Path module - it provide utilities of "working with file and directory paths".(It's built in module)  

//$ Special Node.js Constants-

//todo- Note these are only available in commonjs-
//^   __filename = Provides the absolute path of the currently executing file.
//^   __dirname  = Provides the absolute directory path of the currently executing file.
//console.log(__filename);           //o/p- D:\Node.js\page\PathModule.js
//console.log(__dirname);            //o/p- D:\Node.js\page


//$ Path module Methods-  
const path=require ("path");       //when path module feature use firstly must use require (import) path module

// if we want to create path like this - folder/student/data.txt   , so we use path.join() function  
const filePath = path.join("folder","students","data.txt");
console.log(filePath);             //o/p- folder\students\data.txt            (windows m back slash hi mil-ta hai file path \) (Linux or macOS m forward slash mil-ta hai /)

const parseData= path.parse(filePath);
const resolvedPath= path.resolve(filePath);
const extname= path.extname(filePath);
const basename= path.basename(filePath);
const dirname= path.dirname(filePath);
const separator= path.sep;                                  //@ note path.sep is not a function
console.log({parseData, resolvedPath, extname, basename, dirname, separator});        

//o/p-
// {
//     parseData: {
//       root: '',
//       dir: 'folder\\students',
//       base: 'data.txt',
//       ext: '.txt',
//       name: 'data'
//     },

// resolvedPath: 'D:\\Node.js\\page\\folder\\students\\data.txt',
// extname: '.txt',
// basename: 'data.txt',
// dirname: 'folder\\students',
// separator: '\\'
// }

//^ o/p is not a actual json it's look  like json ,here key not have double cot ""
//todo- Note- here we got double backward slash \\ because when console.log we pass variable inside object so it work json.stringify and if result is path, so \ single back slash is work for'escape character in json(object)' so that's why here double back slash used (in object case) , but normal console we got single backward slash \  where data not pass in object.