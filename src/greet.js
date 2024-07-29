import React from 'react';

function Greet() {
    const name = 'Cecilia'
    return (
        <>
            {name ? <p>Hello {name}</p> : <p>Hello World</p>}
            {/* if name render hello name else render hello world */}


        </>

    )
}
export default Greet;