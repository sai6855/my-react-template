let arr = [
  [1, 2, 3],
  [4, [5, 7, [9, 10], [11, 12]]],
  [6, [3, [3, [3, [3, [3, [3, [3, [3, [3, [3, [3, [3]]]]]]]]]]]]],
];

let answer = [];

const flatten = (array, final = []) => {
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      flatten(array[i], final);
    } else {
      final.push(array[i]);
    }
  }

  return final;
};

console.log(flatten(arr));
