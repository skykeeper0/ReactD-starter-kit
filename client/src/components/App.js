import React, {Component} from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
// import { Match, BrowserRouter, Link} from 'react-router';
import Login from './Login';
import Signup from './Signup';
import Secret from './Secret';
// import NotFound from './NotFound';

class App extends Component {

    // App is the center component that hold the state
    constructor() {
        super()
    }

    /* when the sign up button is clicked the e get all the data from the form and use request to send request with data to server*/
    signupUser(e){
        const signupUser = {
            username: e.target[0].value,
            password: e.target[1].value
        }

        //send a post request

    }

    /* when the sign up button is clicked the e get all the data from the form and use request to send request with data to server*/
    loginUser(e){
        const loginUser = {
            username: e.target[0].value,
            password: e.target[1].value
        }

        //send a post request
        
    }

    //How to pass 2 above function to the components?

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
                        <Route exact path='/' component={Login} />
                        <Route path='/signup' component={Signup} />
                        <Route path='/secret' component={Secret} />
                </div>
            </BrowserRouter>
        )
    }
};

export default App;