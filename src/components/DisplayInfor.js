import React from "react";

class DisplayInfor extends React.Component {

    render() {
        // dùng destructuring
        const { listUser } = this.props;
        return (
            // props propertis <dùng để truyền dữ liệu từ cha sang con>
            <div>
                {listUser.map((user) => {
                    return (
                        <div key={user.id}>
                            <div>My name is Dat {user.name}</div>
                            <div>My age is 23 {user.age}</div>
                            <hr />
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default DisplayInfor;
