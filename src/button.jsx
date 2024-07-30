import React from 'react';
import './button.css';

// set default props in case these prop values are not specified in the component
// props are destructured
const Button = ({buttonText, redButton='', color="black", backgroundColor="#61dafb"}) => {
    const handleClick = () => {
        console.log("It works!!!!!")
    }
  
    return (
 
            <button 
            className={`button-click ${redButton}`} 
            style={{color, backgroundColor}}
            onClick={handleClick}
            >
              {buttonText || "More"}
              
          </button>
     
    )
}


export default Button;

