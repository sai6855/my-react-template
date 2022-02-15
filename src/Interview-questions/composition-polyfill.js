const add5 = (num) => num + 5;
const subtract2 = (num) => num - 2;
const multiply4 = (num) => num * 4;

const compose = (...functions) => {
  return (initialvalue) => {
    let answer = initialvalue;

    for (let i = functions.length - 1; i >= 0; i--) {
      answer = functions[i](answer);
    }

    return answer;
  };
};

const evaluate = compose(add5, subtract2, multiply4);

console.log(evaluate(5));


//pipe from left to right
// compose from right to left