function listNames(...names){
    console.log(names);

}

listNames("Maria", "João", "Matheus");

function listNumbers(...numbers){
    console.log(numbers);

}

listNumbers(1,2,3,4,5,6);


function registerUser(user, ...newUsers){
    let totalUsers = {
        ...user,
        ...newUsers
    };

    return console.log(totalUsers);
}

let user = ["Jhon", "Mary"];

let newUsers = registerUser(user, "Claudia", "Lucas");