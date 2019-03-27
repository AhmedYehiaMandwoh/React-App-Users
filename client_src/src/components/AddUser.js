import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class AddUser extends Component {
    // set data to post method
    addNewUser(newUser) {
       axios.request({
           method: 'post',
           url: 'http://localhost:3000/api/informationcs',
           data: newUser
       }).then(response => {
           this.props.history.push('/');
       }).catch(err => console.log(err))
    }
    // on submit form
    onSubmit(e){
         const newUser = {
             name: this.refs.name.value,
             city: this.refs.city.value,
             address: this.refs.address.value
         }
          this.addNewUser(newUser)   
        e.preventDefault();
    }
  
    render() {

        return (
            <div>
                <br />
                <Link className="btn grey" to="/">Back</Link>
                <h2>Add</h2>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <div className="input-field">
                        <input type="text" name="name" ref="name" />
                        <label htmlFor="name">Name</label>
                    </div>
                    <div className="input-field">
                        <input type="text" name="city" ref="city" />
                        <label htmlFor="city">City</label>
                    </div>
                    <div className="input-field">
                        <input type="text" name="address" ref="address" />
                        <label htmlFor="address">Address</label>
                    </div>
                    <input type="submit" value="save" className="btn" />
                </form>
            </div>
        )
    }
}


export default AddUser;