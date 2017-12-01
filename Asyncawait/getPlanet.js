var fetch = require('node-fetch');

//No error handling?
async function getPlanetforFirstSpeciesInFirstMovieForPersonAsync(id){
    //Get person object first with references etc
    const responsePerson = await fetch("https://swapi.co/api/people/" + id + "/?format=json");
    const person = await responsePerson.json();

    const fetchArr = [
        await fetch(person.films[4] + "?format=json"),
        await fetch(person.species[0] + "?format=json"),
        await fetch(person.homeworld + "?format=json"),
    ];
    const resArr = await Promise.all(fetchArr);

    const movie = await resArr[0].json();
    const species = await resArr[1].json();
    const homeworld = await resArr[2].json();

    console.log(person.name);
    console.log(movie.title);
    console.log(species.name);
    console.log(homeworld.name);
};

getPlanetforFirstSpeciesInFirstMovieForPersonAsync(1);

    // Gammel kode
    // const responseMovie = await fetch(person.films[4] + "?format=json");
    // const movie = await responseMovie.json();

    // const responseSpecies = await fetch(person.species[0] + "?format=json");
    // const species = await responseSpecies.json();

    // const responseHomeworld = await fetch(person.homeworld + "?format=json");
    // const homeworld = await responseHomeworld.json();

