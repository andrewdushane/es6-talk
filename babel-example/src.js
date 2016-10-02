// Object shorthand, array spread, destructuring, default paramenters, arrow functions

const name = 'Box', quantity = 50, price = 0.5;

const items = [{
  name,
  quantity,
  price,
}, {
  name: 'Tape',
  quantity: 3,
  price: 2,
},];

const itemsWithAddedProduct = [
  ...items, 
  {
    name: 'Horse Blanket',
    quantity: 15,
    price: 1,
  }
];

const calculateTotal = (previousAmount = 0, { quantity = 0, price = 0 } = {}) =>
  previousAmount + quantity * price;

const total = itemsWithAddedProduct.reduce(calculateTotal, 0);

console.log(`Thanks for your purchase, your card will be charged ${total}.`);
