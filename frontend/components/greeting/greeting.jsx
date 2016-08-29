import React from 'react';
import SessionFormContainer from '../session_form/session_form_container';
import { withRouter } from 'react-router';

class Greeting extends React.Component{
  constructor(props){
    super(props);
    this._logout = this._logout.bind(this);
  }

  _logout() {
    this.props.logout();
  }

  render() {
    let user = this.props.session.currentUser;
    if (user) {
      return (
        <div>
          <h1>Welcome {this.props.session.currentUser.username}</h1>
          <button onClick={this._logout}>Logout</button>
        </div>
      );
    } else {
      return (
        <nav className="login-signup">
          <a href="/#/login">Login </a>
          or
          <a href="/#/signup"> Sign up!</a>
        </nav>
      );
    }
  }
}

export default Greeting;
