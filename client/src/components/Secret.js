import React from 'react';

const Secret = (props) => {
    let data = props.data;
    let display = [];

    for (let i = 0; i < data.length; i++) {
        display.push((<li>{'The name of user ' + i + ' is ' + data[i].username}</li>))
    }

    return (
        <div>
            <h2>Secret</h2>
            <ul>{display}</ul>
        </div>
    )
};

export default Secret;