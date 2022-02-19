function grandParent() {
  let a = 10;
  function parent() {
    let a = 100;
    function child() {
      console.log(a);
    }

    return child;
  }

  return parent;
}

grandParent()()();
