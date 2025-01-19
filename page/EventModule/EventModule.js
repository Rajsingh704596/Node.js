//! Event Module in Node.js-(e.g. button click pr event trigger but here deal with server)
//# EventEmitter is a core module in Node.js used to create and handle custom events.

//$ Key Methods - (eventEmitter class m many method available but most probably these 2 methods use) 
//^ 1 Function define kar_ne k li use method -  .on(eventName,listener)
//^ 2 Function call kar_ne k li ye use method -  .emit(eventName,[args])      

//todo- Steps 1,2 always use -
//* Step-1 Import EventEmitter class
const EventEmitter=require('events');       //EventEmitter class get from event module

//* Step-2 Create an instance of EventEmitter
const emitter= new EventEmitter();          


//@ Normal way -
//^ Define an event listener (addListener)
emitter.on("greet",()=>{                 //here greet is fun. name
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