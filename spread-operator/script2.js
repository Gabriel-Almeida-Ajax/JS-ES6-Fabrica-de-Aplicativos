function register(info){
    let newData = {
        ...info,
        year: 2018,
        code: 6586
    };

    return newData;
}

register({name:"Maria", lastName:"Barroso", age:20, office:"Developer"});