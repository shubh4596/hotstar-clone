import React, { Component, Fragment } from 'react';
import withCounter from './withCounter';
class HoverCounter extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            count : 0,
         }
    }

    render() { 
        let { count , IncrementCounter} = this.props;
        return ( 
            <Fragment>
                <button className="btn btn-danger" onMouseEnter={IncrementCounter}>Hover me </button>
                <h1 style={{color : "white"}}>Count {count}</h1>
            </Fragment>
         );
    }
}
 
export default withCounter(HoverCounter);