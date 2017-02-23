import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
// import { Match, BrowserRouter, Link} from 'react-router';
import Login from './Login';
import Signup from './Signup';
// import Secret from './Secret';
// import NotFound from './NotFound';

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <ul>
                    {/*<li><Link to='/' >Log in</Link></li>*/}
                    {/*<li><Link to='/secret' >Secret</Link></li>*/}
                    <li><Link to='/signup' >Sign up</Link></li>
                </ul>
                <hr/>
                    <Route exact path='/' component={Login} />
                    <Route path='/signup' component={Signup} />
                    {/*<Match pattern='/secret' component={Secret} />*/}
                    {/*<Miss component={NotFound} />*/}
            </div>
        </BrowserRouter>
    )
};

export default App;