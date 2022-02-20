import React from "react";

function Practise() {
  const obj = {
    name: "sai",
    displayName: function() {
      console.log(this.name);
    },

    context: function() {
      console.log(this);
    },
  };

  const obj2 = {
    name: "sais",
  };

  obj.displayName.call(obj2);

  return null;
}

export default Practise;
