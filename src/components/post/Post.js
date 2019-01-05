import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Post extends Component {
  render() {
      console.log(this.props);
    return (
      <div className="post">
        <p>Post number: {this.props.match.params.id}</p>
        <Link to="/">Index</Link>
      </div>
    );
  }
}

export default Post;