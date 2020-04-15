// list of products

const products = ["Computer", "Phone", "Mouse", "Keyboard"];
console.log("All the products: "+products);

console.log("The quantity of products: "+products.length);

console.log("Remove the Mouse: "+products.filter(item => item !== 'Mouse'));

const find = products.find(item => item == 'Computer');

if(find){
    alert(`Product ${find} find!`);

}else{
    console.log('Product not exist...');
}

products.slice(1,1);

// list of numbers

const numbers = [1,3,5,7,0,9];

console.log("Numbers order by: "+numbers.sort());

console.log("Now..."+numbers.shift());

console.log("Order by: "+numbers.reverse());


// Manipulation of string

let today = '20/07/2019';

const [day, month, year] = today.split('/');

console.log("Day: "+day);
console.log("Month: "+month);
console.log("Year: "+year);