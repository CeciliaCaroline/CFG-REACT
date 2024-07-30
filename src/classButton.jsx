import React from 'react';
import './button.css';

class ClassButton extends React.Component {
    constructor(props) {
        super(props);

        // // Bind the handleClick method to 'this'
        // this.handleClick = this.handleClick.bind(this);
    }

    handleClick = () => {
        console.log("It is class based!!!!!");
    }

    // Render method to describe what the UI should look like
    render() {
        return (
            <button onClick={this.handleClick}>{this.props.buttonText}</button>
        )
        
    }
}

export default ClassButton;