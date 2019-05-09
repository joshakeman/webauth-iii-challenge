import React from 'react'
import './App.css'

import { Route, NavLink, withRouter } from 'react-router-dom'

import Login from './components/Login'
import Users from './components/Userlist'


function App(props) {

  function logout() {
    localStorage.removeItem('jwt');
    props.history.push('/login');
  }

  return (
    <div className="App">
      <header>
        <NavLink to="/login">Login</NavLink>
        &nbsp;|&nbsp;
        <NavLink to="/users">Users</NavLink>
        &nbsp;|&nbsp;
        <button type="button" onClick={logout}>
          Logout
        </button>
      </header>
      <main>
        <Route path="/login" component={Login} />
        <Route path="/users" component={Users} />
      </main>
    </div>
  );
}

export default withRouter(App);
