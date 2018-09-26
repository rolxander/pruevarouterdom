import React, { Component } from 'react';
//import logo from './logo.svg';
// Assets
import './App.css';
//Componentes
import ConvertirBin from './Components/ConvertirBin';
import Subneteo from './Components/Subneteo';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Subneteo />
        {/*<ConvertirBin />*/}
        
      </div>
    );
  }
}

export default App;
