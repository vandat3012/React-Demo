import React, { Component } from "react";

class UserInfor extends React.Component {

    state = {
        name: 'ee',
        age: 25
    };

    handleClick() {
        console.log("My name is", this.state.name)
        this.setState({
            name: "Dạt2",
            age: Math.floor((Math.random() * 100) + 1)
        })
    }

    onMouse(event) {
        console.log(event)
    }

    handleChange = (name) => {
        this.setState({
            name: name.target.value
        })
    }


    handleSubmit = (event) => {
        event.preventDefault(); // chặn load lại trang
        console.log(this.state)
    }

    handleChangeAge = (age) => {
        this.setState({
            age: age.target.value
        })
    }
    render() {
        return (
            <div>
                My name is {this.state.name} and I'm {this.state.age} years old
                <form onSubmit={(event) => this.handleSubmit(event)}>
                    <input
                        value={this.state.name}
                        type="text"
                        onChange={(name) => this.handleChange(name)}
                    />
                    <input
                        value={this.state.age}
                        type="number"
                        onChange={(age) => this.handleChangeAge(age)}
                    />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}
export default UserInfor;