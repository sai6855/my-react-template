const add = (number) => {
  return (num2) => {
    if (num2) {
      return add(num2 + number);
    } else return number;
  };
};

console.log(add(5)(2)(7)(8)());
