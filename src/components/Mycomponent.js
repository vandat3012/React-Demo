import React from "react";

class Mycomponent extends React.Component {
    state = {
        name: 'Dat',
        age: 25
    };

    render() {
        return (
            <div>
                My name is {this.state.name} and I'm {this.state.age} years old
            </div>
        );
    }
}

export default Mycomponent;