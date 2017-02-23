import React from 'react';

const Login = () => {
    return (
        <div>
            <h2>Log in</h2>
            <form >
                <input type="text" name="username" placeholder="username"/>
                <input type="text" name="password" placeholder="password"/>
                <button>Submit</button>
            </form>
        </div>
    )
};

export default Login;