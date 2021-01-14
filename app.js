'use strict';

const Readline = require('readline');
const rl = Readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
})
const matcher = require('./matcher');
const weather = require("./weather");
var colors = require('colors');


async function getWeather(city) {
  try {
    let result = await weather(city);
    return result;
  }
  catch (err) {
    return 'Error';
  }
}
rl.setPrompt('> ');
rl.prompt();
rl.on('line', reply => {
  matcher(reply, cb => {
    switch (cb.intent) {
      case "get weather":
        console.log("weather");
        break;
      case "Exit":
        console.log("See you later !".red);
        process.exit(0);
        break;
      case "Hello":
        console.log(`${cb.entities.greeting}  you too! Nice to meet you!`.green);
        break;
      case "for today":
        console.log("today");
        break;
      case "for week":
        console.log("week");
        break;
      case "Help":
        console.log("How Can I help you?".green);
        break;
      case "How are you":
        console.log("I'm fine ! You?".green);
        break;
      case "Good":
        console.log('Great ! How Can I help you?'.green);
        break;
      case "Out":
        console.log("Good Idea !".green);
        break;
      case "Thank":
        console.log("You are welcome ! I'm here for help you !".green);
        break;
      case "FirstAdvice":
        console.log("Yes ! How about going to the cinema?".green);
        break;
      case "SecondAdvice":
        console.log("You can maybe go eat an ice cream !".green);
        break;
      case "Name":
        console.log("My name is NathanBot".green);
        break;
      case 'CurrentWeather':
        // console.log(cb);
        (async () => {

          var weath = await getWeather(cb.entities.city);
          // console.log(weath);
          if (weath != 'Error') {
            console.log("Here is the current condition in " + weath.request.query + " : " + weath.current.weather_descriptions);
            var temp = weath.current.temperature;
            if (temp <= 5) console.log(" It's pretty cold ! Temperatures are around ".blue + temp + " degrees.".blue);
            else if (temp > 5 && temp <= 15) console.log(" It's moderately cold. Temperatures are around ".blue + temp + " degrees.".blue);
            else if (temp > 15 && temp <= 25) console.log(" It's pretty cool. Temperatures are around ".green + temp + " degrees.".green);
            else if (temp > 25 && temp <= 30) console.log(" It's quite warm. Temperatures are around ".yellow + temp + " degrees.".yellow);
            else if (temp > 30 && temp < 40) console.log(" It's very hot ! Temperatures are around ".red + temp + " degrees.".red);
            else {
              console.log(" Unsustainable! Temperatures are around " + temp + " degrees.");
            }
          }
          else { console.log('Error  : City Not Found.'); }
        })();
        break;
      case 'CurrentInfo':
        (async () => {
          var weath = await getWeather(cb.entities.city);
          if (weath != 'Error') {
            var dayNight = weath.current.is_day
            if (dayNight == 'yes') { dayNight = 'day' }
            else { dayNight = 'night'}
            console.log(("Information in : " + weath.request.query).red);
            console.log((weath.location.name + ", " + weath.location.region + ", " + weath.location.country).red)
            console.log(("Local Time : " + weath.location.localtime + ", UTC : " + weath.location.utc_offset + ", it's "+dayNight).yellow)
            console.log(("The weather is : " + weath.current.weather_descriptions + ", the temperature is : " + weath.current.temperature + "°C, UV index : " + weath.current.uv_index).blue)
            console.log(("Wind speed : " + weath.current.wind_speed + "km/h, humidity : " + weath.current.humidity + "%, precipitation : " + weath.current.precip + "mm").blue)

            // console.log(weath)
          }
          else { console.log('Error  : City Not Found.'); }
        })();
        break;
      default:
        console.log("Sorry, I don't understand ! Try another question");
        break;
    }
    rl.setPrompt('> ');
    rl.prompt();
  });
});