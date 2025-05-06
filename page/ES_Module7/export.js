//# first way - Default Export (when a module has one primary export (e.g a single function or class))
const add = (a, b) => {
  return a + b;
};
export default add; //default export

//# Second way- Named Export (when need to export multiple functions, constants, or Variables)
export const multi = (a, b) => {
  //named export
  return a * b;
};

//# third way- Aggregate Export ( When grouping multiple exports into one statement for modularity)
const sub = (a, b) => {
  return a - b;
};

const div = (a, b) => {
  return a / b;
};

export { sub, div }; //export all at once

//^ Aggregate Export- Aggregate export ka matlab hota hai ki aap kisi export module ko ek file se import karke usse  re-export kar dete ho. Isse ek Central module bn jata hai jahan se sb kuch export hota hai

//@ e.g
//index.js file use(aggregate export(behind scene first import and re-export))
// export * from "./export.js"

//import.js file
// import {sub,div} from "./index.js"

//! note-
//$ small project-  Named exports use
//$ Large/Scalable project- Aggregate exports use
