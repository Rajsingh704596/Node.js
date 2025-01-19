import readline from 'readline/promises';

//OpenWeather Map API Details
const API_KEY=`27cfc8d0c4b8df5f08069ec450b5cff7`;  
const BASE_URL ='https://api.openweathermap.org/data/2.5/weather';

//CLI read and write -createInterface
const rl= readline.createInterface({
    input:process.stdin,
    output:process.stdout,
})

// here we use fetch inbuilt feature for api call rather than https method
//Async fun
const getWeather= async(city)=>{
    const url=`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`;

    try{
        const response= await fetch(url);    //fetch api call

        //if response not get then error throw
        if(!response.ok){
            throw new Error(`City not found. Please check the city name.`);
        }

       const weatherData=await response.json();     //response data change json string to json object format
       console.log(weatherData);

       console.log((`\nWeather Information:`));
       console.log(`City: ${weatherData.name}`);
       console.log(`Temperature: ${weatherData.main.temp}°C`);
       console.log(`Description: ${weatherData.weather[0].description}`);
       console.log(`Humidity:${weatherData.main.humidity}%`);
       console.log(`Wind Speed: ${weatherData.wind.speed}m/s\n`);
    }
    catch(error){
        console.log(error);
    }
}


const city= await rl.question('Enter a city name to get its weather:');               // ask question in cLI
await getWeather(city);  //fun call
rl.close();


//o/p-
//Node.js v20.18.1
// PS D:\Node.js\Mini_Project> node ./WeatherApp.js
// Enter a city name to get its weather:jaipur
// {
//   coord: { lon: 75.8167, lat: 26.9167 },
//   weather: [ { id: 721, main: 'Haze', description: 'haze', icon: '50n' } ],
//   base: 'stations',
//   main: {
//     temp: 16.62,
//     feels_like: 15.98,
//     temp_min: 16.62,
//     temp_max: 16.62,
//     pressure: 1015,
//     humidity: 63,
//     sea_level: 1015,
//     grnd_level: 966
//   },
//   visibility: 1700,
//   wind: { speed: 1.54, deg: 40 },
//   clouds: { all: 0 },
//   dt: 1734706214,
//   sys: {
//     type: 1,
//     id: 9170,
//     country: 'IN',
//     sunrise: 1734658864,
//     sunset: 1734696461
//   },
//   timezone: 19800,
//   id: 1269515,
//   name: 'Jaipur',
//   cod: 200
// }

// Weather Information:
// City: Jaipur
// Temperature: 16.62°C
// Description: haze
// Humidity:63%
// Wind Speed: 1.54m/s

// PS D:\Node.js\Mini_Project> 