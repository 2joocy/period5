var fetch = require('node-fetch');
var now = require("performance-now");

const URL = "https://swapi.co/api/people/";

async function fetchPerson(url){
  const response = await fetch(url);
  const person = await response.json();
  return person;
}

//Serially after each other (2049.649 time)
async function printNamesSerial() {
  console.log("Before");
  const person1 = await fetchPerson(URL+1);
  const person2 = await fetchPerson(URL+2);
  console.log(person1.name);
  console.log(person2.name);
  console.log("After all");
}

//Running the fetches parallel (1433.445 time)
async function printNamesParallel() {
  console.log("Before");
  const peopleProm = [fetchPerson(URL+1), fetchPerson(URL+2)];
  const people = await Promise.all(peopleProm);
  console.log(people[0].name);
  console.log(people[1].name);
  console.log("After all");
}

async function bingoTid(){
  //Start time
  var start = now();

  //await printNamesSerial();
  await printNamesParallel();

  //Taking time
  var end = now();

  console.log((start-end).toFixed(3)) //
}

bingoTid();