import React, { Component } from 'react';
import { Link } from "react-router-dom";

import { connect } from 'react-redux';
import * as action from '../../actions/actionOpacityChange';

import Counter from  '../../containers/Counter/Counter';

class ReduxComponent extends Component {
  buttonStyle = {
    color: 'white',
    backgroundColor: 'black',
    padding: '30px'
  };
  handleClick = () =>{
    this.props.changeOpacity();
  };
  render(){
    //this.buttonStyle.opacity = this.props.opacity.opacity;
    return (
        <div className="redux">
          <p>redux implementation<br />
            npm install --save redux<br />
            npm install --save react-redux</p>
          <Link to="/">Index</Link><br />
          <div className="button-background">
            <button 
            style={{...this.buttonStyle, 
              opacity: this.props.opacity.opacity }}
            onClick={this.handleClick}>Change my opacity</button>
          </div>
        </div>
    );
  }
};

const mapStateToProps = (state) => {
  console.log(state.opacity);
  return {
    opacity: state.opacity
  }
}

export default connect(mapStateToProps, action)(ReduxComponent);