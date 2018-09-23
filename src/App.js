import React, { Component } from 'react';
import './App.css';
import Content from './Components/Content';



class App extends Component {
 

  render() {
      const {children} = this.props;
      console.log(children);
    return (
      <div className="App">
        
        {children}       
      </div>
    );
  }
}

export default App;
