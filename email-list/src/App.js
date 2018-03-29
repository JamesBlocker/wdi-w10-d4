import React, { Component } from 'react';
import './App.css';

class App extends Component {
  
  state = {
    signups: [
      {name: "Philippe", email: "phil@gmail.com"},
      {name: "James", email: "james@gmail.com"},
      {name: "Mahima", email: "mahima@gmail.com"}
    ]
  }

  handleFormSubmit(evt) {
    evt.preventDefault()
    const {name, email} = this.refs
    console.log(name.value)

    const newSignup = {name: name.value, email: email.value}
    console.log(newSignup)
    this.setState({
      signups: [newSignup, ...this.state.signups]
    })

    name.value=""
    email.value=""
    name.focus()
  }
  
  
  render() {
    const { signups } = this.state
    return (
      <div className="App">

        <form onSubmit={this.handleFormSubmit.bind(this)}>
          <input ref="name" type="text" placeholder="Name"/>
          <input ref="email" type="text" placeholder="Email"/>
          <button>Sign Up</button>          
        </form>

        <h3>Number of Signups: {signups.length}</h3>
        <ul>
          {signups.map((person, index) => {
            return (
              <li key={index} onClick={() => { console.log(person) }}>
                {person.name}
              </li>
            )
          })}        
        </ul>

      </div>
    );
  }
}

export default App;
