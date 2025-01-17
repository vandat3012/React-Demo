import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";

class Mycomponent extends React.Component {

    state = {
        listUser: [
            { id: 1, name: "đat1", age: "16" },
            { id: 2, name: "đat2", age: "27" },
            { id: 3, name: "đat3", age: "30" },
        ]
    }
    render() {
        return (
            <div>
                <UserInfor />
                <hr />
                <DisplayInfor listUser={this.state.listUser} />
            </div>
        );
    }
}

export default Mycomponent;