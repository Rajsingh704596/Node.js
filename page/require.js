// //common js
// const getData = require("./module.export");
// console.log(getData);       


//@Individually module get by require method with destructuring method (Es6)
const {Add,Sub,Mul,Div}= require("./module.exports");
console.log(Add(5,10));
console.log(Sub(5,10));
console.log(Mul(5,10));
console.log(Div(5,10));

//Note- Exports k time jo bhi variable object m define kar rhe hai , wo same name destructure bhi kar na important hai object destructuring k time

//@other way to get data-
// const Logic= require("./module.exports");
// console.log(Logic.Add(5,10));
// console.log(Logic.Sub(5,10));
// console.log(Logic.Mul(5,10));
// console.log(Logic.Div(5,10));

// o/p-
// PS D:\Node.js\page> node require.js
// 15
// -5
// 50
// 0.5