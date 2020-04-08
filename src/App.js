import React, {Component} from 'react';
import './App.css';

class App extends Component {
  state = {
    persons: [
      {id: 'cbdhdhd', name: "Samlak", age: 20},
      {id: 'wwdhdhd', name: "Adebayo", age: 26},
      {id: 'cbdhwad', name: "Badejoko", age: 23},
    ],
    otherState: 'some other value',
    showPersons: false,
    textLength: 0,
    chars: [],
    charString: '',
  }

  render() {
    return (
      <div className="App">
        <h1>Start writing your React code here</h1>
      </div> 
    );
  } 
}

export default App;
