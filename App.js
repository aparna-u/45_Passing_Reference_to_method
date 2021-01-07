import React , { Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  
  state = {
    persons : [
      {name:'Max'},
      {name:'Aparna'}
    ],
    otherstate:'value'
  }

  switchNameHandler = (newName) => {
    console.log("Was Clicked");
    this.setState({persons:[
      {name:newName},
      {name:'Aparna Udayakumar'}
    ]})
  }
  render()
  {
    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        > */}
          {/* Learn React
        </a> */}
       
       <h1 >Hey, Aparna!</h1>
       <p>Welcome to React App</p>
       <button className="btn btn-secondary btn-lg" onClick={this.switchNameHandler.bind(this,'Maxmilian')} > Switch </button>
       <Person name={this.state.persons[0].name} Click={this.switchNameHandler.bind(this,'Max !')} >Welcome!</Person>
       <Person name={this.state.persons[1].name} >Hey</Person>

       </header>
     </div>
   
  );
}
}

export default App;