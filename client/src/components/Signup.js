import React, {Component} from 'react';
import { Redirect } from 'react-router-dom'

class Signup extends Component {

    constructor() {
        super()
        // this.passUser = this.passUser.bind(this)
    }

    passUser(e) {
        e.preventDefault();
        let username = e.target[0].value;
        let password = e.target[1].value;

        this.props.signup(username, password)
    }

    render() {
        const redirect = this.props.loggedIn;

        if (redirect) {
            return (
                <Redirect to='/secret'/>
            )
        } else {

            return (
                <div>
                    <h2>Sign up</h2>-
                    <form onSubmit={(e) => this.passUser(e)}>
                        <input type="text" name="username" placeholder="username"/>
                        <input type="text" name="password" placeholder="password"/>
                        <button>Submit</button>
                    </form>
                </div>
            )
        }
    }
};

export default Signup;