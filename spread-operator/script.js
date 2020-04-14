let first = [ 0, 1, 2, 3 ];
let numbers = [... first, 4, 5, 6, 7, 8, 9 ];

console.log(numbers);

let person = {
    name: "Maria",
    office: "developer",
    age: 20

};

let newPerson = {
    ...person,
    lastname: "Barroso",
    city: "New York"

};

console.log(newPerson);