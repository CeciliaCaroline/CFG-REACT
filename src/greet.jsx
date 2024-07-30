import React from 'react';

const Greet = (props) => {
    const name = 'Cecilia';
    console.log(props, "Greet Props")
    return (
        <>
            {name ? <p>Hello {name}</p> : <p>Hello World</p>}
            <p>Welcome to your first React App</p>
        </>

    )
}
export default Greet;