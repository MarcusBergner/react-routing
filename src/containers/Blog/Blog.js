import React, { Component } from "react";
// import axios from 'axios';
import Posts from "./Posts/Posts";
import { Route } from "react-router-dom";

import "./Blog.css";

// use path="/" -> to tell react router, does my path start with this...
//exact -> Except for the case that define in path="/"!

class Blog extends Component {
  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/new-post">New Post</a>
              </li>
            </ul>
          </nav>
        </header>
        <Route path="/" exact render={() => <h1>Home</h1>} />
      </div>
    );
  }
}

export default Blog;
