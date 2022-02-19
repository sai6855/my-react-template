class Artithmetic {
  constructor(initialvalue = 0) {
    this.value = initialvalue;
    this.add = function add(num) {
      this.value += num;
      return this;
    };
    this.subtract = function subtract(num) {
      this.value -= num;
      return this;
    };
    this.multiply = function multiply(num) {
      this.value = this.value * num;
      return this;
    };
    this.divide = function divide(num) {
      this.value = this.value / num;
      return this;
    };
    return this;
  }
}

const a = new Artithmetic(10);
console.log(a.add(10).add(10).value);
