
//# first way - Default Export (when a module has one primary export (e.g a single function or class))
const add=(a,b)=>{
    return a+b;
}
export default add;          //default export  


//# Second way- Named Export (when need to export multiple functions, constants, or Variables)
export const multi=(a,b)=>{           //named export
    return a*b;
}

//# third way- Aggregate Export ( When grouping multiple exports into one statement for modularity)
const sub=(a,b)=>{
    return a-b;
}

const div=(a,b)=>{
    return a/b;
}

export {sub,div};          //export all at once