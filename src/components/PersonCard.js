import React, { Component } from 'react';



class PersonCard extends Component {
    // ---------------------------------------------
    // I) VARIABLES & HOOKS
    // ---------------------------------------------

    constructor(props) {
        super(props);
        this.state = {
            age: this.props.age
            // age: 99
        }

    }
    // ---------------------------------------------
    // II) HANDLERS & AUX FUNCTIONS
    // ---------------------------------------------

    incrAge = () => {

        let newAge = this.state.age
        // console.log("newAge" + newAge)
        newAge = newAge + 1
        // console.log("newAge" + newAge)
        this.setState({ age: newAge })
    }

    // ---------------------------------------------
    // III) JSX
    // ---------------------------------------------
    render() {
        return (
            < div >
                <h1>{this.props.lastName}, {this.props.firstName}</h1>
                {/* <p>Age: {this.props.age}</p> */}
                <p>Age: {this.state.age}</p>
                <p>Hair Color: {this.props.hairColor}</p>
                <button onClick={this.incrAge} >
                    Birthday button for {this.props.firstName} {this.props.lastName} </button>
            </div >)

    }

}
export default PersonCard;

