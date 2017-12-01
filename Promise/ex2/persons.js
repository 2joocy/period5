var fetch = require('node-fetch');
var luke = {};


function httpFetchNoPromise(link){
    fetch(link)
    .then(function(res) {
        return res.json();
    }).then(function(json) {
        console.log(json);
    });
}

function getLukeSkywalker(){
    fetch("https://swapi.co/api/people/1/")
    .then(function(res) {

        return res.json();
    }).then(function(json) {
        for(var i = 0; i < json.films.length; i++){
            httpFetchNoPromise(json.films[i]);
        }
    });
}

getLukeSkywalker();

function httpFetch(link){
    return new Promise((resolve, reject)=>{
        fetch(link + "/?format=json").then(function(response) {
            return response.json();
        }).then(function(data){
            resolve(data);
        });
    })
}

function getPlanetforFirstSpeciesInFirstMovieForPerson(id){
    return new Promise((resolve, reject)=>{
        fetch("https://swapi.co/api/people/1/" + id + "/?format=json").then(function(response) {
            return httpFetch();
        }).then(function(data){
            resolve(data);
        });
    })
};