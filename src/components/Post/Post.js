import React from "react";
// import { withRouter } from "react-router-dom";
import "./Post.css";

// withRouter -> nice way of marking that component route-aware,
// and it will use or it will get the props containing information for the nearest loaeded route!
const post = props => (
  <article className="Post" onClick={props.clicked}>
    <h1>{props.title}</h1>
    <div className="Info">
      <div className="Author">{props.author}</div>
    </div>
  </article>
);

export default post;
