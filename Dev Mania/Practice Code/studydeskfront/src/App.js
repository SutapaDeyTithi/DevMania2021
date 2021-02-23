import React, { Component } from 'react';
import Particles from 'react-particles-js';
import './App.css';
import NavBar from './components/Navigation/Nav.js';
import Login from './components/Login/Login.js';
import Register from './components/Login/Register.js';

const ParticleObject = {
particles: {
                  number: {
                    value: 50,
                    density: {
                      enable: true,
                      value_area: 800
                    }
                  }
                }
}

const initialState = {
    route: '',
      isSignedIn: false,
      user: {
        id: '',
        name: '',
        email: '',
        entries: 0,
        joined: ''
}
}

class App  extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  loadUser = (data) => {
    this.setState({ user: {
          id: data.id,
          name: data.name,
          email: data.email,
          entries: data.entries,
          joined: data.joined
        }
    })
  }

onRouteChange = (route) => {
  this.setState({ route: route });

  if(route === 'signedIn')
    this.setState({ isSignedIn: true });
  else if(route === 'signout')
    this.setState(initialState);
}
/* sign in  and log in are to be considered similar here */
  render(){
  return (
    <div className="App">
            <Particles className = "particles"
                  params={ ParticleObject }
             />
            <NavBar onRouteChange = { this.onRouteChange } isSignedIn = {  this.state.isSignedIn }/>
            {
            (this.state.route === 'login' ) ? 
              <div>
                <Login loadUser = {this.loadUser} onRouteChange = {this.onRouteChange} />
              </div>
            :
            <div>
            </div>
          }
          {
            (this.state.route === 'register' ) ? 
              <div>
                <Register loadUser = {this.loadUser} onRouteChange = {this.onRouteChange} />
              </div>
            :
            <div>
            </div>
            }
    </div>
  );
}
}

export default App;