/*
    objects
*/ 

const person = {
    name: "Clara",
    lastname: "Barroso",
    age: 20,
    office: "intern"
};

let { name } = person;
let { lastname } = person;
let{ age, office } = person;

//change the variable

let{ office:programmer } = person;

/*
    arrays
*/

let names = ['Maria', 'Clara', 'Rafael', 'Carlos'];

let { 1:secondName } = names;
let{ 0:firstName, 2:mascName } = names;

let [firstName, secondName, mascName] = names;

console.log(firstName);
console.log(secondName);
console.log(mascName);