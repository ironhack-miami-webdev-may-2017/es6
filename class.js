// class
//    A nicer way to make constructor functions and prototypes.


class Product {
//     -------------------------------------------------------
//     |                                                  // |
  constructor (productName, productPrice) {               // |
    this.name = productName;                              // |
    this.price = productPrice;                            // |
  }                                                       // |
                                                          // |
  priceAfterTax () {                                      // |
    return this.price * 1.07;                             // |
  }                                                       // |
}                                                         // |
                                                          // |
class Electronic extends Product {                        // |
  constructor (productName, productPrice, productBrand) { // |
    super(productName, productPrice);                     // |
//    |                                                   // |
//    --------------------------------------------------------
// Invoke constructor() of the Product class

    this.brand = productBrand;
  }
}


var myEcho = new Electronic('Amazon Echo', 179.99, 'Amazon');
console.log('Echo will set you back $' + myEcho.priceAfterTax() );


var myBlanket = new Product('Heating Blanket', 42.95);
console.log('Blanket will set you back $' + myBlanket.priceAfterTax() );


var myStick = new Product('Fire Stick', 29.99);
console.log('Stick will set you back $' + myStick.priceAfterTax() );


// --------------------------------------------------------

// function Product (productName, productPrice) {
//   this.name = productName;
//   this.price = productPrice;
// }
//
// Product.prototype.priceAfterTax = function () {
//   return this.price * 1.07;
// };
//
//
// function Electronic (productName, productPrice, productBrand) {
//   Product.call(this, productName, productPrice);
//   this.brand = productBrand;
// }
//
// Electronic.prototype = Object.create(Product.prototype);
