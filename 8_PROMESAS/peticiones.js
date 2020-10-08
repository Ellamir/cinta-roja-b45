const request = require('request');

let obtenerPersonaje = (idPersonaje) => {
    const URL_BASE = 'https://swapi.dev/api/people/';

    return new Promise( (resolve, reject) => {

        request(`${URL_BASE}${idPersonaje}`, (error, respuesta, body) => {
            if(respuesta.statusCode === 200) {
                let infoPersonaje = JSON.parse(body);
                resolve(infoPersonaje);
            } else {
                reject('NO SE ENCONTRARÓ EL PERSONAJE');
            }
        } )
    })
};

obtenerPersonaje(1)
    .then(personaje => console.log(personaje.hair_color))
    .catch(error => console.log(error));

obtenerPersonaje(1)
    .then(personaje => {
        console.log(personaje.hair_color);
        console.log(personaje.name)
    })
    .catch(error => console.log(error));


let hola = obtenerPersonaje(10);


hola
    .then(personaje => console.log(personaje.hair_color))
    .catch(error => console.log(error));
