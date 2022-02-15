function a() {
  for (var i = 0; i < 3; i++) {
    function aa(s) {
      setTimeout(() => {
        console.log(s);
      }, s * 1000);
    }

    aa(i);
  }
}

a();

// let add = function() {
//   let counter = 0;

//   return () => {
//     counter += 1;
//     return counter;
//   };
// };
// const a = add();
// console.log(a()); //prints 1
// console.log(a()); //prints 2
// console.log(a()); //prints 3
