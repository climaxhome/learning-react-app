import React from 'react';
import './App.css';
import Person from './components/Person/Person';

function App() {
  const state = {
    persons: [
      {name : 'Praew', age : 19},
      {name : 'Home', age : 20},
      {name : 'Piglet', age : 15}
    ]
  }
  return (
    <div>
      <h1>เกม </h1>
      <Person name={state.persons[0].name} age='19'>My sister is so noisy</Person>
    </div>

  );
}

export default App;
