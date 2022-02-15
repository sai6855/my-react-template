const add5 = (num) => num + 5;
const subtract2 = (num) => num - 2;
const multiply4 = (num) => num * 4;

const pipe = (...functions) => {
  return (initialvalue) => {
    let answer = initialvalue;

    for (let i = 0; i < functions.length; i++) {
      answer = functions[i](answer);
    }

    return answer;
  };
};

const evaluate = pipe(add5, subtract2, multiply4);

console.log(evaluate(5));

//pipe from left to right
// compose from right to left
