const cacheFunction = (fn) => {
  const res = {};

  return function(...args) {
    const argsCache = args.join("");

    if (res[argsCache]) {
      return res[argsCache];
    } else {
      const value = fn(...args);
      res[argsCache] = value;
      return value;
    }
  };
};

const expensiveFunction = (n, m) => {
  for (let i = 0; i < 1000000000; i++) {}

  return n * m;
};

const memoize = cacheFunction(expensiveFunction);

console.time("First");
console.log(memoize(4, 8));
console.timeEnd("First");
console.time("sec");
console.log(memoize(4, 8));
console.timeEnd("sec");
