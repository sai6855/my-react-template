const obj = {
  name: "sai",
  displayName: function() {
    console.log(this.name);
  },

  thisArrow: () => {
    console.log(this);
  },
  thisFunction: function() {
    console.log(this);
  },
};

const obj2 = {
  name: "sais",
};

obj.displayName.call(obj2);
obj.thisArrow();
obj.thisFunction()
