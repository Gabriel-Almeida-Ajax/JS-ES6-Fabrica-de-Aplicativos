function add(...numbers){
    //this is a anonymous function

    // let total = numbers.reduce((total, next) =>  total + next );

    let total = numbers.reduce((total, next) => {
        let sum = total + next;

        return sum;
    });

    console.log(total);

}

add(1,2,3,4,5,6);