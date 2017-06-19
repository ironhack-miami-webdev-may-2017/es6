const reptiles = ['snake', 'lizard', 'alligator'];
const mammals = ['puppy', 'kitten', 'bunny'];


let foods = ['cookies', 'sandwiches'];
foods.push('pizza');

let moreFoods = ['ice cream', ...foods, 'pizza'];


let foodsCopy = [...foods];


// let megaAnimalsArray = [];
//
// reptiles.forEach((myReptile) => {
//   megaAnimalsArray.push(myReptile);
// });
//
// mammals.forEach((myMammal) => {
//   megaAnimalsArray.push(myMammal);
// });

const megaAnimalsArray = [...reptiles, ...mammals];

console.log( megaAnimalsArray );
// ['snake', 'lizard', 'alligator', 'puppy', 'kitten', 'bunny']
