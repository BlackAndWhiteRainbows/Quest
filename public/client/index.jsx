console.log('Hey guys and ladies!!');
console.log('work dang it');
console.log('hey dude');

import React from "react";
import ReactDOM from "react-dom";
import ImageUpload from "./components/ImageUpload.jsx";

class App extends React.Component {

  render() {
    return (
      <div>
        <p> Hello World </p>
        <ImageUpload />
      </div>
    );
  }
}

ReactDOM.render( <App />, document.getElementById('root'));
