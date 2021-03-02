import React from 'react';
import './Login.css';

/* sign in  and log in are to be considered similar here */

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signInEmail: '',
      signInPassword: '',
      role: ''
    }
  }

  onEmailChange = (event) => {
    this.setState({signInEmail: event.target.value})
  }

  onPasswordChange = (event) => {
    this.setState({signInPassword: event.target.value})
  }

  onRoleChange = (event) => {
    this.setState({role: event.target.value})
  }

  onSubmitSignIn = () => {
    console.log(this.state.signInEmail);
    console.log(this.state.signInPassword);
    fetch('http://localhost:3000/signin', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword,
        role: this.state.role
      })
      })
      .then(response => response.json())
      .then(user => {
        if(user.name)
        {
               this.props.loadUser(user)
               if(this.state.role === 'admin')
              {
                this.props.setRole('admin');
              }
              this.props.onRouteChange('signedIn');
        }
    })
  
  }

  render() {
    const { onRouteChange } = this.props;
    return (
      <article className="br6 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <main className="pa4 black-80">
          <div className="measure center">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f4 fw6 ph0 mh0">Sign In</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="email"
                  name="email-address"
                  id="email-address"
                  onChange={this.onEmailChange}
                />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                <input
                  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="password"
                  name="password"
                  id="password"
                  onChange={this.onPasswordChange}
                />
              </div>

              <p>Please select your role:</p>
              <input type="radio" id="admin" name="role" value="admin"
                onChange={this.onRoleChange}
              />
              <label for="admin">Admin</label><br></br>
              <input type="radio" id="user" name="role" value="user"
                onChange={this.onRoleChange}
              />
              <label for="user">User</label><br></br>

            </fieldset>
            <div className="">
              <input
                onClick={this.onSubmitSignIn}
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="submit"
                value="Sign in"
              />
            </div>
          </div>
        </main>
      </article>
    );
  }
}

export default Login;