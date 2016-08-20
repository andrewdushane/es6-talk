# ES6 And Beyond: The Future Is Now

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

```
function varTest() {
  var x = 1;
  if (true) {
    var x = 2;  // same variable!
    console.log(x);  // 2
  }
  console.log(x);  // 2
}

function letTest() {
  let x = 1;
  if (true) {
    let x = 2;  // different variable
    console.log(x);  // 2
  }
  console.log(x);  // 1
}
```

---

## Arrow Functions

Before:

```
var addKnownAndUnknown = function addKnownAndUnknown(x) {
  return function(y) {
    return x + y;
  }
}
```

Now:

`const addKnownAndUnknown = x => y => x + y;`

Functions-as-arguments that you can read  

```
items.forEach(function(item) {
  console.log(item);
})
```  
Becomes  

`items.forEach(item => console.log(item))`

---

## Arrow Functions continued

Ever done this?

```
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

```
someElement.on('click', e => {
  e.preventDefault();
  doSomeAsyncThing().then(result => doSomethingWith(result, this));
})
```

---

## Destructuring


Before:
```
function makePizza(toppings) {
  var pepperoni = toppings.pepperoni;
  var peppers = toppings.peppers;
  var tomatoes = toppings.tomatoes;
  ...
}
```


Now:
```
const makePizza = ({ pepperoni, peppers, tomatoes }) => ...
```

---

## Default Parameter Values


Before:
```
function totalWithTax(price) {
  if (price === undefined) {
    price = 50;
  }
  return price * 1.08;
}
```


Now:
```
const totalWithTax = (price = 50) => price * 1.08;
```

---

## Default Parameter Values continued

Nested defaults with destructuring

```
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
```
var listItems = {
  bananas: bananas,
  bread: bread,
  milk: milk,
  eggs: eggs
};
```


Now:
```
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
```
var greet = function greet(info) {
  var greeting = 'Hi, my name is ' + info.firstName + '.';
  greeting = greeting + ' I live in ' + info.city + '.';
  return greeting;
}
```


Now:
```
const greet = ({ firstName, city }) => (
  `Hi, my name is ${firstName}. I live in ${city}.`
);
```

---

## Classes

(Let's not even talk about before)
```
class Animal {
  constructor({ img, name }) {
    this.planet = 'earth';
    this.abilities = ['live', 'move', 'grow'];
    this.pic = document.createElement('img');
    this.pic.src = img;
    this.name = name;
  }
  exist() {
    console.log('I\'m alive!');
  }
  greet() {
    console.log(`Hi, I'm ${this.name}`);
  }
   render(elementId) {
    document.getElementById(elementId).appendChild(this.pic);
  }
}
```

---

## Classes Continued

### Extension:

```
class Dog extends Animal {

  constructor(args) {
    super(args);
    this.abilities = [...this.abilities, 'companionate'];
  }

  bark() {
    console.log('woof, woof');
  }

}

const Fido = new Dog({
  img: 'http://pics.com/doggy-pic.jpg',
  name: 'Fido'
});

Fido.render('dog-house');

Fido.exist();
```

---

## Array Spread

Before:
```
var newArray = oldArray.slice(0, indexOfThingToReplace)
.concat(newThing)
.concat(oldArray.slice(indexOfThingToReplace + 1));
```


Now:
```
const newArray = [
  ...oldArray.slice(0, indexOfThingToReplace),
  newthing,
  ...oldArray.slice(indexOfThingToReplace + 1)
];
```

---

## Object Spread (Stage 2 Proposal)

```
const me = {
  name,
  age,
  dateOfBirth,
  interests,
  occupation,
  whatever
};

const { name, dateOfBirth, ...rest } = me;  

doSomethingWithThisInfoAboutMe(rest);
```

---

## Object Spread continued

Combine objects (without mutating the originals)

```
const newObj = {
  ...obj1,
  ...obj2,
  foo: 'bar'
};
```

Pluck keys

```
const {
  onClick,
  onBlur,
  onFocus,
  ...nonEventHandlers
} = elementProperties;  
// nonEventHandlers -> { id, name, className, etc }
```

---

## Resources & Further Reading

* [Babel](https://babeljs.io/) Transpile ES6 (and beyond) to widely supported ES5
* [JSBin](http://jsbin.com/) Play around with ES6
* [CodePen](http://codepen.io/) Play some more
* [MDN: Promises (ES6)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) Better API for asynchronous requests
* [Async/Await (Proposal)](https://github.com/yortus/asyncawait) Even better async API
* [create-react-app](https://github.com/facebookincubator/create-react-app) Up-and-running with Babel and React easily
