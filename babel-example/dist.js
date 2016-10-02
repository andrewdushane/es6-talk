'use strict';

// Object shorthand, array spread, destructuring, default paramenters, arrow functions

var name = 'Box',
    quantity = 50,
    price = 0.5;

var items = [{
  name: name,
  quantity: quantity,
  price: price
}, {
  name: 'Tape',
  quantity: 3,
  price: 2
}];

var itemsWithAddedProduct = [].concat(items, [{
  name: 'Horse Blanket',
  quantity: 15,
  price: 1
}]);

var calculateTotal = function calculateTotal() {
  var previousAmount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var _ref$quantity = _ref.quantity;
  var quantity = _ref$quantity === undefined ? 0 : _ref$quantity;
  var _ref$price = _ref.price;
  var price = _ref$price === undefined ? 0 : _ref$price;
  return previousAmount + quantity * price;
};

var total = itemsWithAddedProduct.reduce(calculateTotal, 0);

console.log('Thanks for your purchase, your card will be charged ' + total + '.');
