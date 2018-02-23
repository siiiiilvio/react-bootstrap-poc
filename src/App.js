import React, { Component } from 'react';
import './App.css';
import AlertDismissable from './AlertDismissable'; 
import FormExample from './FormExample'; 
import DropdownButtonGroup from './DropdownButtonGroup'; 

class App extends Component {
  render() {
    return (
      <div className="App">
        <AlertDismissable />
        <FormExample />
        <DropdownButtonGroup />
      </div>
    );
  }
}

export default App;
