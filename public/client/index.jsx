console.log('Hey guys and ladies!!');
console.log('work dang it');
console.log('hey dude');

import React from "react";
import ReactDOM from "react-dom";

const Hello = function (name) {
  return (
    <div>Hello, {name}</div>
  );
};

const view = Hello("Will");

const element = document.getElementById("root");
ReactDOM.render(view, element);