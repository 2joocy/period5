import React, {Component} from 'react';
const URL = "https://swapi.co/api/people/";

export default class SwapiFacade extends Component{
    constructor(props){
        super(props);
        this.state = {
            maxVal: 0
        };
    }

    componentWillMount(){
        //this.init();
    }

    // async init(){
    //     const response = await fetch(URL + "/?format=json");
    //     const body = await response.json();
    //     this.setState({maxVal: body.count});
    // }

    async getRandomPerson(){
        const randomId = Math.floor((Math.random() * 10) + 1); //Random value between 1 and maxVal
        const response = await fetch("https://swapi.co/api/people/" + randomId + "/?format=json");
        const body = await response.json();
        return body;
    }

    render() {
        const randomPerson = getRandomPerson();
        return (
            <Text>{randomPerson.name}</Text>
        )
      }
}