
//@ first and second way
import addition, { multi } from "./export.js";  //^ Default import &  named import


console.log(addition(2,4));            //o/p-  6                        // (in Terminal)  node --watch ./import.js


console.log(multi(2,4));               //o/p- Restarting './import.js'
                                            // 8
                                            // Completed running './import.js'



//@ third way
import {sub,div} from './export.js';        //^ multiple named import at once

console.log(sub(4,2));                    // 2
console.log(div(10,5));                   // 2


import * as math from './export.js';        //^ Aliased import (for all multiple named import)
 
console.log(math.sub(4,4));            // 0
console.log(math.div(8,8));            // 1
console.log(math.multi(3,3));          // 9


