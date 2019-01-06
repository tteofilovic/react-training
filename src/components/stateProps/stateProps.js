import React from 'react';
import { Link } from "react-router-dom";

import Counter from  '../../containers/Counter/Counter';

export const stateProps = () => {
    return (
        <div className="redux">
          <p>Clasic state props of the components</p>
          <Link to="/">Index</Link>
          <Counter />
        </div>
    );
}