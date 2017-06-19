// let and const
//    different ways of declaring variables in different scopes

// WORKS -------------------
const nizar = {
  name: 'Nizar',
  age: 30
};

//    assigning/updating keys
nizar.name = 'Nazir';
nizar.country = 'Mexico';
// --------------------------



// DOESN'T WORK-------------------
//    replacing the whole variable
// nizar = {
//   name: 'Kevin'
// };
// --------------------------------



// WORKS -------------------
const foods = ['cookie', 'sandwich'];

// adding/removing things from array
foods.push('pickle');
// -------------------------




// DOESN'T WORK-------------------
//    replacing the whole variable
// foods = ['pickles', 'liver', 'arugula'];
// --------------------------------




const PI = 3.1415;
const oneSecond = 1000;

let isHungry = false;
let x = 0;

setTimeout(function () {
  isHungry = true;
  x++;
  x += 8;
}, 3 * 60 * 60 * 1000);


for (let i = 1; i <= 42; i+= 1) {
  let food = 'cookies';

  console.log(i);
}


console.log(food);
    // ERROR
console.log(i);
    // ERROR


function hello () {
  var name = 'Nizar';
  console.log('Hello ' + name);
}


hello();


console.log(name);
