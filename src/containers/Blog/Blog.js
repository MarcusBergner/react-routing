import React, { Component } from "react";
// import axios from 'axios';
import Posts from "./Posts/Posts";
// import NewPost from "../../containers/Blog/NewPost/NewPost";
import { Route, NavLink, Switch, Redirect } from "react-router-dom";

import "./Blog.css";
import asyncComponent from "../../hoc/asyncComponent";
/**
 * import() -> is a dynamic syntax which means whatever comes between {},
 * here is only imported when that function here is executed!
 * And that function will only be executed once we render AsyncNewPost to the sceen.
 * this is how you load Components asynchronously --> extremly useful in bigger apps where
 * there are bigger chunks of code, a whole feature area in your application!
 *
 */
const AsyncNewPost = asyncComponent(() => {
  return import("../../containers/Blog/NewPost/NewPost");
});
// use path="/" -> to tell react router, does my path start with this...
//exact -> Except for the case that define in path="/"!
// Link to={{}} -> this allow to jump to any ID submit in that element,
// add ("#" / URL) to jump to that Point!
// search: -> allow us to add queryParams!
// note: with (exact + NavLink) can set up active classes "e.g. marker active url's"
// note: with react,NavLink -> similar to react.Link + extra props which define some Inline-Styling for active link!
// React.Switch -> tell react router: take the first one actually you find that matches from a given set of routes!
class Blog extends Component {
  state = {
    auth: true
  };
  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink
                  to="/posts/"
                  exact
                  activeClassName="my-active"
                  activeStyle={{
                    color: "#fa923f",
                    textDecoration: "underline"
                  }}
                >
                  Posts
                </NavLink>
              </li>
              <li>
                <NavLink
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
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        {/* <Route path="/" exact render={() => <h1>Home</h1>} />
        <Route path="/" render={() => <h1>Home 2</h1>} /> 
        Note: Route.Parameter parsed from top to bottom, so ordering is importand!
        Note: inside Switch use react-router.dom.Redirect, for navigate from.routes -> to.routes
        - outside Switch only redirect to.routes workes! */}
        <Switch>
          {this.state.auth ? (
            <Route path="/new-post" component={AsyncNewPost} />
          ) : null}
          <Route path="/posts" component={Posts} />
          {/* Notes: use the render method inside defined component without "path",
            to render something for any unknown route.
           This is a nice catch all route which should ALWAYS come last and show an appropriate page,
           or render some dummy content for unknown routes(404)!
            (it won't work together with redirect, if you redirect from slash. )*/}
          <Route render={() => <h1>Not Found</h1>} />
          {/* <Redirect from="/" to="/posts" /> */}
          {/* <Route path="/" component={Posts} /> */}
        </Switch>
      </div>
    );
  }
}
export default Blog;

`Absolute vs Relative Paths (Article)
You learned about <Link> , you learned about the to  property it uses.

The path you can use in to can be either absolute or relative. 

Absolute Paths
By default, if you just enter to="/some-path"  or to="some-path" , that's an absolute path. 

Absolute path means that it's always appended right after your domain. Therefore, both syntaxes (with and without leading slash) lead to example.com/some-path .

Relative Paths
Sometimes, you might want to create a relative path instead. This is especially useful, if your component is already loaded given a specific path (e.g. posts ) and you then want to append something to that existing path (so that you, for example, get /posts/new ).

If you're on a component loaded via /posts , to="new"  would lead to example.com/new , NOT example.com/posts/new . 

To change this behavior, you have to find out which path you're on and add the new fragment to that existing path. You can do that with the url  property of props.match :

<Link to={props.match.url + '/new'}>  will lead to example.com/posts/new  when placing this link in a component loaded on /posts . If you'd use the same <Link>  in a component loaded via /all-posts , the link would point to /all-posts/new .

There's no better or worse way of creating Link paths - choose the one you need. Sometimes, you want to ensure that you always load the same path, no matter on which path you already are => Use absolute paths in this scenario.

Use relative paths if you want to navigate relative to your existing path. `;
