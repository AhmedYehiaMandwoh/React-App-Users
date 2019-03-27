import React, { Component } from 'react'
import axios from 'axios';
import UserItems from './userItems';
export class Users extends Component {
  constructor() {
    super();
    this.state = {
      users: []
    }
  }
  componentWillMount() {
    this.getUsers();
  }
  // Get All Users 
  getUsers() {
    axios.get('http://localhost:3000/api/informationcs')
    .then(response => {
      this.setState({users: response.data}, () => {
        console.log(this.state)

      })
    }).catch(err => {
      console.log(err)
    })
  }
  render() {
    const userItems = this.state.users.map((user, id) => {
      return (
        <UserItems key={id} item={user} />
      )
    })
    return (
      <div>
          <h1>UsersInfo</h1>
          <ul className="collection">
            {userItems}
          </ul>
      </div>
    )
  }
}

export default Users
