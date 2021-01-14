"use strict";
const axios = require("axios");

const apikey = "bbe84f511956626abe98dc23569e9070" ; 

const getWeather = location => {
return new Promise(async (resolve, reject) => {
try{
	const weatherConditions = await axios.get( //get weather info from the api
	"http://api.weatherstack.com/current", {
	params: {
	access_key: apikey ,
	query: location 
	}
	});
	resolve(weatherConditions.data) 
	// console.log(weatherConditions.data);
	} catch(error){
	console.log('no');
	reject(error); }
	});
	}





module.exports = getWeather;
