import React, {Component} from 'react';
// import React, {useState} from 'react';
import './App.css';
import Person from './components/Person/Person';

// const App = () => {
//   const [ personsState, setPersonsState ] = useState({
//         persons: [
//           {name : 'Praew', age : 19},
//           {name : 'Home', age : 20},
//           {name : 'Piglet', age : 15}
//         ],
//         // otherStates: 'hey i\'m here'
//       });
  
//   const [othersState, setOthersState] = useState('hey i\'m here');
//   console.log(personsState, othersState);
  
  
//   const switchNameHandler = () => {
//   // console.log('wasClicked');
//     setPersonsState( {
//       persons: [
//         {name : 'Praew', age : 29},
//         {name : 'NoHome', age : 22},
//         {name : 'Piglet', age : 15}
//       ],
//       // otherStates: personsState.otherStates
//     })
//   }

//   return(
//     <div>
//       <h1>เกม </h1>
//       <Person name={personsState.persons[0].name} age={personsState.persons[0].age}>My sister is so noisy</Person>
//       <Person name={personsState.persons[1].name} age={personsState.persons[1].age}></Person>
//       <Person name={personsState.persons[2].name} age={personsState.persons[2].age}></Person>
//       <button onClick={switchNameHandler}>Click Me</button>
//     </div>
//   );
// }

class App extends Component {
  state = {
    persons: [
      {name : 'Praew', age : 19},
      {name : 'Home', age : 20},
      {name : 'Piglet', age : 15}
    ],
    otherStates: 'hey i\'m here'
  }

  switchNameHandler = () => {
    // console.log('wasClicked');
    this.setState( {
      persons: [
        {name : 'Praew', age : 29},
        {name : 'NoHome', age : 22},
        {name : 'Piglet', age : 15}
      ]
    })
  }

  render() {
    return (
      <div>
        <h1>เกม </h1>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>My sister is so noisy</Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}></Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}></Person>
        <button onClick={this.switchNameHandler}>Click Me</button>
      </div>
  
    );
  }
}

// function App() {
  
// }

export default App;
