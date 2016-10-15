# ES6 And Beyond:  
###The Future Is Now

### What is ES6?  What is ES2015?  

ECMAScript 6 aka ES2015  
New, better JavaScript syntax

### Why do I care?

Write more concise, easier-to-read and easier-to-maintain code

---

## Const and Let

`const` - assignment doesn't change*  

`let`   - reassignable, but scopes like a normal (non-JavaScript) variable

Block scoping - no global-scope var weirdness

Borrowed from MDN:

```javascript
function varTest() {
  var x = 1;
  if (true) {
    var x = 2;
    console.log(x); /* 2 */
  }
  console.log(x); /* 2 */
}
```

```javascript
function letTest() {
  let x = 1;
  if (true) {
    let x = 2;
    console.log(x); /* 2 */
  }
  console.log(x); /* 1 */
}
```

---

## Arrow Functions

Before:

```javascript
var addKnownAndUnknown = function addKnownAndUnknown(x) {
  return function(y) {
    return x + y;
  }
}
```

Now:

```javascript
const addKnownAndUnknown = x => y => x + y;
```

Functions-as-arguments that you can read  

```javascript
items.forEach(function(item) {
  console.log(item);
})
```  
Becomes  

```javascript
items.forEach(item => console.log(item))
```

---

## Arrow Functions continued

Ever done this?

```javascript
someElement.on('click', function(e) {
  e.preventDefault();
  var that = this;
  doSomeAsyncThing().then(function(result) {
    doSomethingWith(result, that);
  })
})
```

ugh.

With arrow functions, `this` continues to be the `this` of the parent

```javascript
someElement.on('click', e => {
  e.preventDefault();
  doSomeAsyncThing().then(result => doSomethingWith(result, this));
})
```

Implicit return 

```javascript
const makeAnObject = conditionalThing => ({
  stuff: coniditionalThing ? 'this stuff' : 'that stuff',
  thing: conditionalThing,
});
```

---

## Destructuring


Before:
```javascript
function makePizza(toppings) {
  var pepperoni = toppings.pepperoni;
  var peppers = toppings.peppers;
  var tomatoes = toppings.tomatoes;
  ...
}
```


Now:
```javascript
const makePizza = ({ pepperoni, peppers, tomatoes }) => ...
```

---

## Default Parameter Values


Before:
```javascript
function totalWithTax(price) {
  if (price === undefined) {
    price = 50;
  }
  return price * 1.08;
}
```


Now:
```javascript
const totalWithTax = (price = 50) => price * 1.08;
```

---

## Default Parameter Values continued

Nested defaults with destructuring

```javascript
const processPurchase = ({
  discount = 0,
  shipping = 5,
  item: {
    price = 50,
    weight = 1,
    name
  },
  customer: {
    name: customerName,
    address
  }
}) => {
  ...
}

```

---

## Object Literal Shorthand


Before:
```javascript
var listItems = {
  bananas: bananas,
  bread: bread,
  milk: milk,
  eggs: eggs
};
```


Now:
```javascript
const listItems = {
  bananas,
  bread,
  milk,
  eggs
};
```

---

## Template Literals and String Interpolation


Before:
```javascript
var greet = function greet(info) {
  var greeting = 'Hi, my name is ' + info.firstName + '.';
  greeting = greeting + ' I live in ' + info.city + '.';
  return greeting;
}
```


Now:
```javascript
const greet = ({ firstName, city }) => (
  `Hi, my name is ${firstName}. I live in ${city}.`
);
```

---

## Classes

```javascript
class Animal {
  constructor({ img, name }) {
    this.abilities = ['live', 'move', 'grow'];
    this.pic = document.createElement('img');
    this.pic.src = img;
    this.name = name;
  }
  greet() {
    console.log(`Hi, I'm ${this.name}`);
  }
   render(elementId) {
    document.getElementById(elementId).appendChild(this.pic);
  }
}
```

### Extension:

```javascript
class Dog extends Animal {
  constructor(args) {
    super(args);
    this.abilities = [...this.abilities, 'companionate'];
  }
}

const Fido = new Dog({
  img: 'http://pics.com/doggy-pic.jpg',
  name: 'Fido'
});
Fido.render('dog-house');
```

---

## Array Spread

Before:
```javascript
var newArray = oldArray.slice(0, indexOfThingToReplace)
.concat(newThing)
.concat(oldArray.slice(indexOfThingToReplace + 1));
```


Now:
```javascript
const newArray = [
  ...oldArray.slice(0, indexOfThingToReplace),
  newthing,
  ...oldArray.slice(indexOfThingToReplace + 1)
];
```

---

## ES7/ES2016

### Array `.includes`

```javascript
['x'].includes('x')
```

This is about the same as:

```javascript
['x'].indexOf('x') !== -1
```

With the exception of `NaN`. MM k.

### Exponent operator

```javascript
2 ** 3 === Math.pow(2, 3) // 8
```

---

## Object Spread (Stage 2 Proposal)

```javascript
const user = {
  name,
  age,
  dateOfBirth,
  interests,
  occupation,
  whatever,
};

const { name, age, dateOfBirth, ...rest } = user;
// rest == { interests, occupation, whatever }
```

Combine objects (without mutating the originals)

```javascript
const newObj = {
  ...obj1,
  ...obj2,
  foo: 'bar'
};
```

---

## Up and running with Babel

0. Install [node.js](https://nodejs.org/en/) 
1. In your command line, `mkdir` a new directory and `cd` into it 
2. Run `npm init`  
3. Run `npm install --save-dev babel-cli babel-preset-es2015`  
4. `touch` a file, we can call it src.js 
5. Open the directory in your editor of choice 
6. Write some marvelous ES6 in src.js 
7. To the `scripts` in package.json, add  
   `"babel": "babel src.js --presets es2015 -o dist.js"`
8. `npm run babel`
9. Check out the transpiled, browser-ready code in dist.js 

---

## Resources & Further Reading

* [Babel](https://babeljs.io/) Transpile ES6 (and beyond) to widely supported ES5
* [JSBin](http://jsbin.com/) Play around with ES6
* [CodePen](http://codepen.io/) Play some more
* [Node 6 ES6 Support](http://node.green) ES6 in your API
* [MDN: Promises (ES6)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) Better API for asynchronous requests
* [Async/Await (Proposal)](https://github.com/yortus/asyncawait) Even better async API
* [create-react-app](https://github.com/facebookincubator/create-react-app) Up-and-running with Babel and React easily
