import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class EditUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name:'',
            city: '',
            address: ''
        }

        this.handleInputChange = this.handleInputChange.bind(this)
    }
    componentWillMount() {
        this.getUserDetails();
    }
    // Get Details Users
    getUserDetails() {
        let userId = this.props.match.params.id
        axios.get(`http://localhost:3000/api/informationcs/${userId}`)
        .then(response => {
            this.setState({
                id: response.data.id,
                name: response.data.name,
                city: response.data.city,
                address: response.data.address,

            }, () => {
                console.log(this.state)
            })
        }).catch(err => {
          console.log(err)
        })
    }
    editUser(newUser) {
        axios.request({
            method: 'put',
            url: `http://localhost:3000/api/informationcs/${this.state.id}`,
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
         this.editUser(newUser)   
       e.preventDefault();
   }
   // Change The Value In Fields
    handleInputChange(e) {
        const target = e.target;
        const value = target.value
        const name = target.name;
        this.setState({
            [name]: value
        })
    }
    render() {

        return (
            <div>
            <br />
            <Link className="btn grey" to="/">Back</Link>
            <h2>Edit</h2>
            <form onSubmit={this.onSubmit.bind(this)}>
                <div className="input-field">
                    <input type="text" name="name" ref="name"  value={this.state.name} onChange={this.handleInputChange}/>
                    <label htmlFor="name">Name</label>
                </div>
                <div className="input-field">
                    <input type="text" name="city" ref="city" value={this.state.city} onChange={this.handleInputChange}/>
                    <label htmlFor="city">City</label>
                </div>
                <div className="input-field">
                    <input type="text" name="address" ref="address" value={this.state.address} onChange={this.handleInputChange}/>
                    <label htmlFor="address">Address</label>
                </div>
                <input type="submit" value="save" className="btn" />
            </form>
        </div>
        )
    }
}


export default EditUser;