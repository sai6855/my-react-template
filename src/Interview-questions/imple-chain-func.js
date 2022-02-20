class Artithmetic {
  constructor(initialvalue = 0) {
    this.value = initialvalue;
    this.add = function(num) {
      this.value += num;
      return this;
    };
    this.subtract = function(num) {
      this.value -= num;
      return this;
    };
    this.multiply = function(num) {
      this.value = this.value * num;
      return this;
    };
    this.divide = function(num) {
      this.value = this.value / num;
      return this;
    };
    return this;
  }
}

const arithmatic = new Artithmetic(10);
console.log(
  arithmatic
    .add(10)
    .add(10)
    .subtract(30).value
);
