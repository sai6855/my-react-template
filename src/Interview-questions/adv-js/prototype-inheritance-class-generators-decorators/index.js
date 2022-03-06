console.log("/* Prototype */");
function Person(fName, lName) {
  this.firstName = fName;
  this.lastName = lName;
}

Person.prototype.getFullName = function() {
  return this.firstName + " " + this.lastName;
};

const person1 = new Person("sai", "chand");
console.log(person1.getFullName());
