import React from 'react';
import './button.css';

class IncrementButton extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
            text: ""
        };
    }


    handleIncrement = () => {
        // Never do this!!!!!
        // this.state.count = this.state.count + 1

        // const { count } = this.state;
        // this.setState({
        //     count: count + 1
        // })


        // Method 2
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }

        })
 
    }

    render() {
        const { count } = this.state;
        console.log(`Counter increases ${count}`)
        
        return (
            <button 
            className='button-click' 
            onClick={this.handleIncrement}
            >{`The counter is ${count} `}</button>
        )
    }


}

export default IncrementButton;