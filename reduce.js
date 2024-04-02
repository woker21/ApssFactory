

let characters;
let collectedCharacters = [];
let collectedCharacters2 = [];



const collectByName2 = (characterName) => {
    
    let foundCharacter = collectedCharacters2.find(character => character.name === characterName);

        collectedCharacters2.push(foundCharacter);

}



fetch('https://swapi.py4e.com/api/people')
    .then(res => res.json())
    .then(data => {
        characters = data.results;
        // Aquí ejecutaremos las llamadas a las funciones que definiremos más arriba
        console.log(characters);
        collectByName2()
    });


console.log(collectedCharacters2);