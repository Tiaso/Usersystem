
import React, { Component } from 'react';
import './App.css';
import DisplayData from './components/DisplayData';
import InputForm from './components/InputForm'

class App extends Component {
  render() {
    return (
      <div class="App">
        
        <InputForm />  

        <DisplayData class="DisplayBlock" />
      </div>
    );
  }
}

export default App;
