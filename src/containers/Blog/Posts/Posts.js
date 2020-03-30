import React, { Component } from "react";
import axios from "../../../axios";
// import { Link } from "react-router-dom";
import Post from "../../../components/Post/Post";
import { Route } from "react-router-dom";
import "./Posts.css";
import FullPost from "../FullPost/FullPost";
class Posts extends Component {
  state = {
    posts: []
  };
  componentDidMount() {
    console.log(this.props);
    axios
      .get("/posts")
      .then(response => {
        const posts = response.data.slice(0, 4);
        const updatedPosts = posts.map(post => {
          return {
            ...post,
            author: "Max"
          };
        });
        this.setState({ posts: updatedPosts });
        // console.log( response );
      })
      .catch(error => {
        console.log(error);
        // this.setState({ error: true });
      });
  }
  /**
   * Documentation
   *
   * @param: {selected Element on Click} id
   */
  postSelectedHandler = id => {
    // this.setState({ selectedPostId: id });
    // note: {history.push} <-- is alternative to --> {<Link to={"/posts/" + post.id} key={post.id}>}
    // this.props.history.push({ pathname: "/posts/" + id });
    this.props.history.push("/posts/" + id);
  };
  render() {
    let posts = <p style={{ textAlign: "center" }}>Something went wrong!</p>;
    if (!this.state.error) {
      posts = this.state.posts.map(post => {
        // Notes: For adding code to pass route parameters, wrapping your element in a Link,
        // Return that into an absolute path!
        return (
          //   <Link to={"/posts/" + post.id} key={post.id}>
          <Post
            key={post.id}
            title={post.title}
            author={post.author}
            clicked={() => this.postSelectedHandler(post.id)}
          />
          //    </Link>
        );
      });
    }
    // note: this.props.match.url + "/:id" -> dynamically adding posts here for our nested route!
    // - this is the way how you create truly nested routes in react with react-router!!
    return (
      <div>
        <section className="Posts">{posts}</section>
        <Route
          path={this.props.match.url + "/:id"}
          exact
          component={FullPost}
        />
      </div>
    );
  }
}
export default Posts;
