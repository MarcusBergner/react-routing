import React, { Component } from "react";
// import axios from 'axios';
import Posts from "./Posts/Posts";
import NewPost from "../../containers/Blog/NewPost/NewPost";
import { Route, Link } from "react-router-dom";

import "./Blog.css";

// use path="/" -> to tell react router, does my path start with this...
//exact -> Except for the case that define in path="/"!
// Link to={{}} -> this allow to jump to any ID submit in that element,
// add ("#" / URL) to jump to that Point!
// search: -> allow us to add queryParams!
class Blog extends Component {
  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link
                  to={{
                    // {/* Note: this is a absolute path ! */}
                    pathname: "/new-post",
                    // { /*Note: this is a relative path! -> use it to build a link,
                    // which appends the path to the end of the current path!
                    // pathname: this.props.match.url + "/new-post" */}

                    hash: "#submit",
                    search: "?quick-submit=true"
                  }}
                >
                  New Post
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        {/* <Route path="/" exact render={() => <h1>Home</h1>} />
        <Route path="/" render={() => <h1>Home 2</h1>} /> */}
        <Route path="/" exact component={Posts} />
        <Route path="/new-post" component={NewPost} />
      </div>
    );
  }
}

export default Blog;
