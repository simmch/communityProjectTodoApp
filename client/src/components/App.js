import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/App.css';
import { connect } from 'react-redux';
import { googleLogin } from '../actions/userActions';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={this.props.googleLogin}>Login</button>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, {googleLogin})(App);
