import React from 'react';
import { Link } from "react-router-dom";

export const home = () => {
    return (
        <div className="home">
          <p>sass implementation<br />
          npm install --save-dev node-sass<br />
          change all css to sass like we have here</p>
          <Link to="/">Index</Link>
        </div>
    );
}
