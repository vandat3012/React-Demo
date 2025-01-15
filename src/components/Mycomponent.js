import React from "react";

class Mycomponent extends React.Component {
    state = {
        name: 'Dat',
        age: 25
    };

    handleClick() {
        console.log("My name is", this.state.name)
    }

    onMouse(event) {
        console.log(event)
    }

    render() {
        return (
            <div>
                My name is {this.state.name} and I'm {this.state.age} years old
                <button onClick={this.handleClick}>Click me</button>
                <button onMouseOver={this.onMouse}>Move me</button>
            </div>
        );
    }
}

export default Mycomponent;