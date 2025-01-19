//! Currency Converter -

//here we deal with Real so we use https module

import https from 'https';
import readline from 'readline';
import chalk from 'chalk';

//if we want read and write in CLI , we need to create interface of readline

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
})

const apiKey='3d951d74ad62b7bc50712932'; 
const url= `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;

const convertCurrency=(amount, rate)=>{
    return (amount * rate).toFixed(2);         //.toFixed method use after 2 decimal value get
}

//get method (url, callback fun)
https.get(url,(response)=>{        //response is object that is readable stream which is use to get 3 argument to listen (data, end, error)

    let data="";   //empty string create for chunk data store
    response.on('data',(chunk)=>{
      data += chunk;
    })

    response.on('end',()=>{
        // console.log(JSON.parse(data)); 
        const rates= JSON.parse(data).conversion_rates;    //api data change json string into json object  //here .conversion_rates is object key

        //formula
        // amount= 90
        // currency=   inr
        // 90usd =how much inr
        // 1usd = 84.9667 inr
        // 90usd = ?

        // 90 * 84.9667 
        
        //Ask ques. to user
        rl.question('Enter the amount in USD:',(amount)=>{  //here amount is parameter get when user enter amount
            rl.question('Enter the target currency (e.g. INR, EUR, NPR):',(currency)=>{   //here currency is parameter get when user type target currency 
                // main formula
                const rate=rates[currency.toUpperCase()];  // api data that is object form so get access by object property rates.currency but we want to change in proper way to uppercase when user print currency so here we use 2nd type of object access
                console.log(amount, rate, currency);
                if(rate){
                 console.log(chalk.blue.bgRed.bold(`${amount} USD is approximately ${convertCurrency(amount, rate)} ${currency}`));
                }
                else{
                    console.log("Invalid Currency Code");
                }
          rl.close()
            })
        })

    })

})


//@ O/p in terminal
// PS D:\Node.js\Mini_Project> node ./Currency_Converter.js
// Enter the amount in USD:1
// Enter the target currency (e.g. INR, EUR, NPR):inr
// 1 85.0159 inr
// 1 USD is approximately 85.02 inr

