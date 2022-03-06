const multiFilter = (array, callback, ans = []) => {
  const filteredArray = ans;
  array.forEach((element) => {
    if (Array.isArray(element, i)) {
      multiFilter(element, callback, ans);
    }

    const valid = callback(element, i);

    if (valid) {
      filteredArray.push(element);
    }
  });

  return filteredArray;
};

const arr = [
  [1, [2, [3, "foo", { a: 1, b: 2 }, [[[[[[[[["point"]]]]]]]]]]], "bar"],
  "aa",
];
const filtered = multiFilter(arr, (e) => typeof e === "string");
console.log(filtered);
