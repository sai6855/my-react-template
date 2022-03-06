//eslint-disable
import React from "react";

function Practise() {
  // const obj = {
  //   name: "sai",
  //   displayName: function() {
  //     console.log(this.name);
  //   },

  //   context: () => {
  //     console.log(this);
  //   },
  // };

  // const obj2 = {
  //   name: "sais",
  // };

  // function a() {
  //  // "use strict"; // see strict mode
  //   return this;
  // }

  // console.log(a());

  // (function() {
  //   var lang = "java";
  // })();

  // console.log(lang);

  function sum() {
    return arguments.length;
  }
  (function() {
    // console.log(typeof this);
  }.call("10"));

  const set = new Set();
  const blog = { site: "learnersbucket" };
  const blog2 = { site: "learnersbucket" };

  set.add(blog);
  set.add(blog);

  //console.log(set('blog'));

  const map = new Map();

  map.set("a", "a");
  map.get("a");

  console.log(map);

  // obj.context();

  return null;
}

export default Practise;
