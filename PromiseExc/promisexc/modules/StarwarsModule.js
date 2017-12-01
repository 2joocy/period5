var fetch = require('node-fetch');

//Example of bad use of mass promises / mass fetches instead of using graphql

function httpFetchFilmName(link){
    return new Promise((resolve, reject)=>{
        fetch(link + "?format=json").then(function(response) {
            return response.json();
        }).then(function(data){
            resolve(data.title);
        });
    })
}

function httpFetchSpeciesName(link){
    return new Promise((resolve, reject)=>{
        fetch(link + "?format=json").then(function(response) {
            return response.json();
        }).then(function(data){
            resolve(data.name);
        });
    })
}

function httpFetchHomeworldName(link){
    return new Promise((resolve, reject)=>{
        fetch(link + "?format=json").then(function(response) {
            return response.json();
        }).then(function(data){
            resolve(data.name);
        });
    })
}

function getPlanetforFirstSpeciesInFirstMovieForPerson(id){
    let arrPromise = [
        //Name
        new Promise(function(resolve, reject){
            fetch("https://swapi.co/api/people/" + id + "/?format=json").then(function(response) {
                return response.json();
            }).then(function(data){
                resolve(data.name);
            });
        }),
        //First Film
        new Promise(function(resolve, reject){
            fetch("https://swapi.co/api/people/" + id + "/?format=json").then(function(response) {
                return response.json();
            }).then(function(data){
                resolve(httpFetchFilmName(data.films[4]));
            });
        }),
        //Species
        new Promise(function(resolve, reject){
            fetch("https://swapi.co/api/people/" + id + "/?format=json").then(function(response) {
                return response.json();
            }).then(function(data){
                resolve(httpFetchSpeciesName(data.species[0]));
            });
        }),
        //Homeworld
        new Promise(function(resolve, reject){
            fetch("https://swapi.co/api/people/" + id + "/?format=json").then(function(response) {
                return response.json();
            }).then(function(data){
                resolve(httpFetchSpeciesName(data.homeworld));
            });
        }),
    ];

    return Promise.all(arrPromise);
};


module.exports = {
    getPlanetforFirstSpeciesInFirstMovieForPerson: getPlanetforFirstSpeciesInFirstMovieForPerson
};