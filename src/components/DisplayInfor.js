import React from "react";

class DisplayInfor extends React.Component {

    render() {
        console.log(this.props)
        // dùng destructuring
        const { name, age } = this.props;
        return (
            // props propertis <dùng để truyền dữ liệu từ cha sang con>
            <div>
                My name is {name}
                <br />
                and age is {age}
            </div>
        )
    }
}

export default DisplayInfor;
