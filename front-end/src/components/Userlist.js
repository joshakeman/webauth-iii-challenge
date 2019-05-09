import React from 'react';
import axios from 'axios';

import requiresAuth from '../components/requiresAuth'

class Users extends React.Component {
  state = {
    users: [],
  };

  render() {
    return (
      <>
        <h2>Our Users</h2>
        <ul>
          {this.state.users.map(u => (
            <div key={u.id}><strong> Name: &nbsp; </strong> {u.username} &nbsp; &nbsp; &nbsp;<strong> Department: &nbsp; </strong> {u.department}</div>
          ))}
        </ul>
      </>
    );
  }

  componentDidMount() {
    const endpoint = 'http://localhost:4000/api/users';

    axios
      .get(endpoint)
      .then(res => {
        console.log(res.data)
        this.setState({ users: res.data });
      })
      .catch(err => console.error(err));
  }
}

export default requiresAuth(Users);