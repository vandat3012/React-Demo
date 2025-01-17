import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";

class Mycomponent extends React.Component {

    render() {
        return (
            <div>
                <UserInfor />
                <br />
                <DisplayInfor name="Lương văn đạt" age="30" />
                <hr />
                <DisplayInfor name="Lương văn đạt 2" age="31" />
            </div>
        );
    }
}

export default Mycomponent;