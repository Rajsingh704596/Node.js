// const PI=3.214;
//  module.exports=PI; 

// //todo Q.Write a java script program to print the English alphabet from 'a' to 'z'.

//  console.log('a'.charCodeAt(0))        //ascii value get

//  console.log('z'.charCodeAt(0))

//  for(i='a'.charCodeAt(0);i<='z'.charCodeAt(0);i++){
//     console.log(String.fromCharCode(i))            //a to z print
//  }

//! Named & Aggregate Exports in Node.js-
    //^ module.exports is a single object or value.
    //^ When you reassign module.exports (e.g. module.exports= add ) , it completely replaces whatever was previously assigned.
    //^ If you reassign it again( module.exports= mul ), the previous value(add) is replace with mul.
    //^ so module.export ek ba-ar li-kha jat-a hai , or agar multiple ba-ar lik-hte hai to jo sb-se last m lik-ha hai wo wa-li value sb-me count ho ja-ti hai

 //! We have 2 way for multiple logic/module export in one file -
 //$ Use Consistent syntax for clarity:

   //^ 1.Assign everything at once with - 
      //*   module.exports={..., ..., ...};

   //^ 2.Assign properties individually with-
      //*   module.exports.property

const Add=(a,b)=>{
    return a+b;
}
const Sub=(a,b)=>{
    return a-b;
}
const Mul=(a,b)=>{
    return a*b;
}
const Div=(a,b)=>{
    return a/b;
}

//@By Individual name module export
        // module.exports.Add=Add;
        // module.exports.Sub=Sub;
        // module.exports.Mul=Mul;
        // module.exports.Div=Div;

//@ multiple module export inside object       
 module.exports={Add,Sub,Mul,Div};
 
