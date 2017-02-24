import React, {Component} from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
// import { Match, BrowserRouter, Link} from 'react-router';
import Login from './Login';
import Signup from './Signup';
import Secret from './Secret';
// import NotFound from './NotFound';
const request = require('request')

class App extends Component {

    // App is the center component that hold the state
    constructor() {
        super()
        // this.handleClick = this.handleClick.bind(this)
    }

    /* when the sign up button is clicked the e get all the data from the form and use request to send request with data to server*/
    signupUser(username, password){
        const signupUser = {
            username: username,
            password: password
        }

        //send a post request
        request
            .post('http://localhost:3000/signup')
            .form(signupUser)

    }

    /* when the sign up button is clicked the e get all the data from the form and use request to send request with data to server*/
    loginUser(username, password){
        const loginUser = {
            username: username,
            password: password
        }

        //send a post request
        request
            .post('http://localhost:3000/login')
            .form(loginUser)

    }

    render() {
        return (
            <BrowserRouter>
                <div>
                    <ul>
                        <li><Link to='/' >Log in</Link></li>
                        <li><Link to='/secret' >Secret</Link></li>
                        <li><Link to='/signup' >Sign up</Link></li>
                    </ul>
                    <hr/>
                        <Route exact path='/' component={() => (<Login login={(i,j) => this.loginUser(i,j)} />)} />
                        <Route path='/signup' component={() => (<Signup signup={(i,j) => this.signupUser(i,j)} />)} />
                        <Route path='/secret' component={Secret} />
                </div>
            </BrowserRouter>
        )
    }
};

export default App;