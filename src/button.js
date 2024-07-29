import React from 'react';
import './button.css';
/**
 * 
 * Create a new file called Button.js - we’ll write our component code in here

Beautify your component
Making use of a separate CSS file, apply the following effects to your new button:

Text should be bolded and in a different font color (any is fine)

Button itself should be light blue

Button should have a thin border surrounding it (any thickness, any color)

Increase its font size (any is fine)

Increase the space between the actual button text and the border!

 
 */
function Button(props) {

    return (
        <button className='button-click' >{props.title}!!</button>
    )
}

export default Button;