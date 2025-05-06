//! Event Module in Node.js-(e.g. button click pr event trigger but here deal with server)
//# EventEmitter is a core module in Node.js used to 'create and handle custom events'. It's part of event module and "used for building event driven systems" in Node.js .

//@ like In Js , event listener handle DOM(for UI interaction) create by addEventListener(eventName, callback) ,here event loop available for handling asynchronous events. Event Propagation also use default bubbling phase apply. here Same Name of Multiple listeners sequentially trigger when event trigger(call).
//@ In Node.js, Event Emitter handle custom/server side task manage(file manage),  here event loop is the core of Node.js for handling non-blocking events. here Event Propagation not exist. But same name name of Event sequentially trigger when event emit(call).


//$ Key Methods - (eventEmitter class m many method available but most probably these 2 methods use) 
//^ 1 Function define karne k liye use method -  .on(eventName,listener)
//^ 2 Function call karne k liye use method -  .emit(eventName,[args])      

//todo- Steps 1,2 always use -
//* Step-1 Import EventEmitter class
const EventEmitter=require('events');       //EventEmitter class get from event module

//* Step-2 Create an instance of EventEmitter
const emitter= new EventEmitter();          


//@ Normal way -
//^ Define an event listener (addListener)
emitter.on("greet",()=>{                 //here greet is event name
    console.log(`hello Rock`);            //statement
})
//^ Trigger (emit) the "greet" event
emitter.emit("greet")                     //o/p- hello Rock


//@ when pass argument while emitting-
//^ Define an event listener (addListener)
emitter.on("greet1",(userName,prof)=>{                 //here greet1 is fun. name  , and 2 Parameter use to get data from argument when fun call
    console.log(`hello ${userName} , your profession is ${prof}`);            //statement
})
//^ Trigger (emit) the "greet" event
emitter.emit("greet1","Rock","Full Stack dev")        //o/p- hello Rock , your profession is Full Stack dev



//@ but it's best idea to take a single argument as an object
//^ Define an event listener (addListener)
emitter.on("greet2",(parameter)=>{                 //here greet1 is fun. name  , and 2 Parameter use to get data from argument when fun call
    console.log(`hello ${parameter.userName} , your profession is ${parameter.prof}`);            //statement
})
//^ Trigger (emit) the "greet" event
emitter.emit("greet2",{userName:"Rock",prof:"Full Stack dev"})        //o/p- hello Rock , your profession is Full Stack dev