const axios = require('axios');


const getClima = async (lat, long) =>{


	const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=-${long}&appid=0e82870fdac5b96bdf0aa9978370b69f&units=metric`)

	return resp.data.main.temp;

};


module.exports = {
	getClima
}