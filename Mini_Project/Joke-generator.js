//! here we use actual API (Application programming interface) , get data using Fetch / Axios / React Query

import https from 'https';     //if we deal with api in node js we use https module so that's why we import https module
import chalk from 'chalk';     //use chalk package for colorful and stylist text in terminal

//callback function
const getJoke=()=>{

    const url ="https://official-joke-api.appspot.com/random_joke";      //Api link

    //# Get method where url call , and call back fun we get parameter that is https.incomingmessage which is object and we give any name so now here we use response (which is readable stream) that allows to listen to the event like " data , end , error ".
    https.get(url,(response)=>{         
        
        let data="";      //empty string

        //* Multiple event listen using .on method
        response.on('data',(chunk)=>{           //^ here data is event , it will trigger till we get piece of chunk data from the server (jb tk data one by one chunk k rup m mil ta rhe-ga tb tk data name ka event trigger ho ta rhe-ga)
            data+=chunk;                  //^ jo bhi chunk data mil rha hai one by one wo data variable m store ho jay-ega
        });

        response.on('end',()=>{           //^ end event listen , when all data get and no more data left , so here not get any parameter in callback fun. just show the data in cli inside callback fun
            const joke= JSON.parse(data);        //^ data(json string format) change into json format
            //console.log(joke);
            console.log(`Here is a random ${joke.type} joke:`);
            console.log(chalk.red(`${joke.setup}`));
            console.log(chalk.blue.bgGreenBright.bold(`${joke.punchline}`));
        });
        
        response.on(`error`,(err)=>{       //^ error event listen , when api is not work /we have issue to get data from server
            console.log(`Error Fetching the Joke, ${err.message}`);
       });

    });   
};

getJoke();


//@o/p in Terminal-
        //PS D:\Node.js\Mini_Project> node ./Joke-generator.js
        // Here is a random general joke:
        // How does a penguin build it’s house?
        // Igloos it together.