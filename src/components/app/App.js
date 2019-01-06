import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";

import Post from '../post/Post';
import { home } from '../home/home';
import ReduxComponent from '../redux/ReduxComponent';
import { stateProps } from '../stateProps/stateProps';

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
          <div className="link-block">
            <p>clasic State and Props</p>
            <Link to='/stateProps'>State and Props</Link>
          </div>
          <div className="link-block">
            <p>redux react</p>
            <Link to='/redux'>Redux</Link>
          </div>
          <Route path="/redux" component={ReduxComponent} />
          <Route path="/stateProps" component={stateProps} />
          <Route path="/home" component={home} />
          <Route path="/post/:id" component={Post} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
