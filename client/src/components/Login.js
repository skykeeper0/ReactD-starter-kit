import React, {Component} from 'react';

class Login extends Component {

    constructor() {
        super()
        // console.log(props)
    }

    render() {
        let i = 1879;
        return (
            <div>
                <h2>Log in</h2>
                {/*<form onSubmit={props.onClick}>
                    <input type="text" name="username" placeholder="username"/>
                    <input type="text" name="password" placeholder="password"/>
                    <button>Submit</button>
                </form>*/}
                <button onClick={() => this.props.handleClick(i)}/>
                {this.props.value}
            </div>
        )
    }
};

export default Login;