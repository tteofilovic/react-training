import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";

import Post from '../post/Post';
import { home } from '../home/home';

class App extends Component {
  render() {
    const postid = 6;
    return (
      <BrowserRouter>
        <div className="app">
          <div className="link-block">
            <p>creating static routes</p>
            <Link to='/home'>Home</Link>
          </div>
          <div className="link-block">
            <p>creating dinamic routes</p>
            <Link to={`/post/${postid}`}>Post 6</Link><br />
          </div>
          <Route path="/home" component={home} />
          <Route path="/post/:id" component={Post} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
