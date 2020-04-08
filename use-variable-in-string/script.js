let name = "Matheus";
let lastName = "Fraga";
let age = 45;

let person = "My name is: "+name+" "+ lastName + " and my age is: "+age;

console.log(person);

//Better...

let person2 = `My name is: ${name} ${lastName} and I have ${age} years.`;

console.log(person2);