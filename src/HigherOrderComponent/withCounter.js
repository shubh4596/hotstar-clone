import React, { Component } from 'react';

const withCounter = (WrappedComponent) => {
  class Counter extends Component {
      constructor(props) {
          super(props);
          this.state = { 
             count : 0, 
           };
      }

      incrementCount = () => {
        this.setState((prevState) => {
            return { count: prevState.count + 1};

        });
      };

      decrementCount = () => {
        this.setState((prevState) => {
            return { count: prevState.count - 1};

        });
      };
      render() {  
              return (
              <WrappedComponent count={this.state.count} IncrementCounter={this.incrementCount} DecrementCount={this.decrementCount}/>
          );
      }
    }
    return Counter;
  };

export default withCounter;
   
