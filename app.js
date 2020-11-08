const lugar = require('./lugar/lugar');


const clima = require('./clima/clima');

const argv = require('./config/yargs').argv;


const getInfo = async(direccion) => {
    try {
        const coords = await lugar.getLugar(direccion);
        const temp = await clima.getClima(coords.lat, coords.lng);
        return `El clima de ${ coords.direccion } es de ${ temp }.`;
    } catch (e) {
        return `No se pudo determinar el clima de ${ direccion }`;
    }
}
 
getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);

//clima.getClima(10.62854, 63.83845)
  //   .then( console.log)

//lugar.getLugar(argv.direccion)
  //   .then(console.log)


