const list = [1,2,3,4,5,6];

// function MAP

const newList = list.map(function (item, index){
    return item + index;
});

console.log(newList);

// function reduce

const sum = list.reduce(function(total, next){
    return total + next;
});

console.log(sum);

// function find

const find = list.find(function(item){
    return item == 6;
});

console.log(find);