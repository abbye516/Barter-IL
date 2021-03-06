import './Signup.css'
import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import NavBar from '../NavBar';
import { async } from 'q';

@inject('userLogin', 'UserData', 'userSignup')
@observer
class Signup extends Component {

    addNewUser = () => {
        this.props.userSignup.addNewUser()
        this.forceUpdate()
    }

    updateState = (event) => {
        this.props.userSignup.changeState(event.target.name, event.target.value)
    }
    passRoute = () => {
        let currentPage = this.props.match.url
        this.props.UserData.getCurrentPage(currentPage)
    }
    render() {
        this.passRoute()
        return (
            <div>
                <NavBar />
                {/* <h2>Sign Up</h2> */}
                <div className="add-users">
                    <label for="username">Username: </label>
                    <input id="username" type="text" onChange={this.updateState} placeholder="elevation123" name='username' />
                    <label for="password">Password: </label>
                    <input id="password" type="password" onChange={this.updateState} placeholder="password" name='password' />
                    <label for="FN">First Name: </label>
                    <input id="FN" type="text" onChange={this.updateState} placeholder="John" name='name' />
                    <label for="SN"> Last name: </label>
                    <input id="SN" type="text" onChange={this.updateState} placeholder="Smith" name='lastname' />
                    <label for="location">Location: </label>
                    <input id="location" type="text" onChange={this.updateState} placeholder="Las Vegas" name='location' />
                    <label for="skills">Skills: </label>
                    <input id="skills" type="text" onChange={this.updateState} placeholder="eating, snorkling..." name='skills' />
                    <label for="age">Age: </label>
                    <input id="age" type="number" onChange={this.updateState} placeholder="120" name='age' />
                    <label for="image">Image: </label>
                    <input id="image" type="text" onChange={this.updateState} placeholder="enter url" name='imgURL' />

                </div>
                    <button className="signup-button" onClick={this.addNewUser}>Signup</button>
            </div>

        )
    }
}
export default Signup;