const axios = require('axios');




const getLugar = async (direccion) =>{


	let encodeURL = encodeURI(direccion);
    console.log(encodeURL);


    const instance = axios.create({
	    baseURL:` https://geocode.xyz/${encodeURL}?json=1&key=197777775372363242653x93276`
    });


      const resp = await instance.get();

      if (resp.data.length === 0) {

      	throw new Error(`no hay resultados para ${direccion}`);

      }else{

      	const data = resp.data;
      	const direccion = data.standard.city;
      	const lat = data.latt;
      	const lng = data.longt;

      	return {
      	direccion,
      	lat,
      	lng
      	}
      	
      }      
}


module.exports = {

	 getLugar 

}

