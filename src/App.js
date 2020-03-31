import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import Blog from "./containers/Blog/Blog";

/**
 * for serving your app from a Server.... example.com/myapp,
 * You need to set the basepath for the react router!
 * --> return {<BrowserRouter basename="/my-app">}
 */
class App extends Component {
  render() {
    return (
      // <BrowserRouter basename="/my-app">
      <BrowserRouter>
        <div className="App">
          <Blog />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
