// arrow functions
//    avoids problems with "this" in anonymous functions


class Counter {
  constructor () {
    this.count = 1;
  }

  countUp () {
    console.log('Starting at ' + this.count);

    setInterval(() => {
      console.log(this.count);
      this.count += 1;
    }, 1000);
  }
}


const myCounter = new Counter();
myCounter.countUp();




const myFoods = ['cookies', 'sandwiches', 'pizza', 'bagels'];

myFoods.forEach(function (x) { console.log(x); });
myFoods.forEach((x) => { console.log(x); });


myFoods.map(function (x) { return x.toUpperCase(); });
myFoods.map((x) => {
  return x.toUpperCase();
});




setTimeout(function () {
  console.log('5 seconds later');
}, 5000);


setTimeout(() => {
  console.log('7 seconds later');
}, 7000);
