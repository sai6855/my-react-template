console.log("/* SCOPE*/");

let a = 10;
function outer1() {
  let b = 20;

  function inner() {
    let c = 30;
    console.log(a, b, c);
  }
  inner();
}
outer1();

//var funnction scope
//let block scope

console.log("/*CLOSURE*/");

function outer() {
  let counter = 0;
  this.increment = function() {
    counter++;
    return counter;
  };
}

const fun = new outer();
console.log(fun.increment());
console.log(fun.increment());
console.log(fun.increment());

console.log("/*Function - currying*/");

function sum(a, b, c) {
  return a + b + c;
}

function sum1(a) {
  return (b) => {
    return b ? sum1(a + b) : a;
  };
}
console.log(sum(1, 2, 3));
console.log(sum1(1)(2)(3)());

console.log("/*THIS*/");
console.log(
  'Implicit Binding: if function using "this" keyword is invoked by dot notation, then "this" refers to object to the left of dot'
);

const person = {
  name: "John",
  myName: function() {
    console.log("My name is " + this.name);
  },
};

person.myName();

console.log(
  'Explicit Binding: Defining explicitly reference to this by using call method, this refers to 1st argument passed to "call" or "apply" function '
);

function myName(lastName) {
  console.log("My name is " + this.name + lastName);
}

myName.call({ name: "Sai" }, "chand");
myName.apply({ name: "Sai" }, ["chand"]);

console.log(
  'new Binding: when function is invoked with "new" keyword, then this inside that function refers to empty object. Function invoked with new keyword always return this '
);

function New() {
  console.log(this);
}

const f = new New();
console.log(
  "If none of above rules applied, then this refers to global object, like 'window' object in browsers"
);

console.log(
  "if multiple rules are applied, order of precedence is new>explicit>implicit>default"
);
