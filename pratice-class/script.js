class Person{
    constructor(){
        this.name = '',
        this.lastName = ''

    }

    namePerson(firstName){
        this.name = firstName;
        console.log('My name is: ' + this.name);

    }

    secondName(secondName){
        this.lastName = secondName;
        console.log('My last name is: ' + this.secondName);

    }

    completName(){
        let completName = this.name + ' ' + this.secondName;
        console.log("My name complet is: " + completName);

    }

};

let person1 = new Person();

person1.namePerson('Maria');
person1.secondName('Barroso');

person1.completName();