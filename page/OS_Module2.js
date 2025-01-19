//! OS Module in Node js-

//^ Operating system Module methods- 
 //@ Note- when we use module methods first we need to import/ require that module .
 const Os = require("os") ;                        //so now Os constant k an-der os module ki sari property or method aa ga-ye hai

 //$ 1. Get the OS platform & User Info
 // Return the operating system platform (e.g 'win32', 'linux', 'darwin')
 console.log("Platform:", Os.platform());       //o/p- Platform: win32

 console.log("User:", Os.userInfo());           //o/p- User: {
                                                        //     uid: -1,
                                                        //     gid: -1,
                                                        //     username: 'royal',
                                                        //     homedir: 'C:\\Users\\royal',
                                                        //     shell: null
                                                        //   }

 //$ 2. Get the OS CPU architecture
 // Return the architecture of the CPU (e.g 'x64', 'arm', 'ia32')
 console.log("CPU Architecture:", Os.arch());           //CPU Architecture: x64

//$ 3. Get free system memory-
// Returns the amount of free system memory in bytes.
 console.log("Free Memory:",Os.freemem(),"bytes");        //o/p- Free Memory: 11048497152 bytes

//$ 4. Get total system memory
//Returns the total amount of system memory in bytes.
console.log("Total Memory:", Os.totalmem(), "bytes");        //o/p-Total Memory: 16900169728 bytes

//$ 5. Get System uptime
// Return the system uptime in seconds.
console.log("System Uptime:",Os.uptime(),"seconds");         //o/p-System Uptime: 56553.921 seconds

//$ 6. Get Home directory
// Returns the home directory of the current user.
console.log("Home Directory:", Os.homedir());                //o/p-Home Directory: C:\Users\royal

//$ 7. Get host name
// Returns the hostname of the operating system.
 console.log("Host Name:", Os.hostname());                      //o/p-Rock

//$ 8. Get Network interfaces
// Returns information about the network interfaces of the system like ip address, mac address , netmask , cidr
 console.log("Network Interfaces:", Os.networkInterfaces());

//$ 9. Get CPU information
// Returns an array of objects with details about each logical CPU/core.
 console.log("CPU Info:",Os.cpus());

//$ 10. Get Temporary directory
// Returns the operating system's default directory for temporary files.
console.log("Temporary Directory",Os.tmpdir());                   //o/p-Temporary Directory C:\Users\royal\AppData\Local\Temp

//$ 11. Get operating system name
//Returns the os name as returned by uname(3). For e.g. It returns 'Linux' on Linux, 'Darwin' on macOS, and 'Windows_NT' on Windows.
console.log("Operating System:", Os.type());                   //o/p- Operating System: Windows_NT






