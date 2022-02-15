const createPromise = (num) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(num * num), num * 1000);
  });

const PromiseAll = async (promises) => {
  const answer = [];
  let error;

  for (let promise of promises) {
    try {
      answer.push(await promise);
    } catch (err) {
      error = err;
    }
  }

  return new Promise(async (resolve, reject) => {
    if (!error) {
      resolve(answer);
    } else {
      reject(error);
    }
  });
};

(async () => {
  console.log(
    await PromiseAll([
      createPromise(4),
      Promise.resolve("po"),
      Promise.reject("errorkjhbvbnms"),
    ])
  );
})();

// (async () => {
//   const a = createPromise(4);
//   console.log(await a);
// })();
