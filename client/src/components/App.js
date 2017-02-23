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

    }

    /* when the sign up button is clicked the e get all the data from the form and use request to send request with data to server*/
    loginUser(e){

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
                        <Route exact path='/' component={Login} />
                        <Route path='/signup' component={Signup} />
                        <Route path='/secret' component={Secret} />
                </div>
            </BrowserRouter>
        )
    }
};

export default App;