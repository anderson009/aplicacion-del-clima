
const argv = require('yargs').options({
	direccion:{
		alias:'d',
		desc: 'nombre de la ciudad para odtener el clima',
		demand: true
	}
}).argv;


module.exports = {
	argv
}