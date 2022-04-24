import React from "react";
import ReactDOM from "react-dom";

import MyImage from './assets/sample.png';
import './index.css';

const App = () => {
  return (
    <div>
        <div>Simple example to fuse webpack and babel in react</div>
        <img src={MyImage} />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));