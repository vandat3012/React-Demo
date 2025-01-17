import React from "react";

class DisplayInfor extends React.Component {
    state = {
        isShowList: true
    }

    hanldShowHide = () => {
        this.setState({
            isShowList: !this.state.isShowList
        })
    }

    render() {
        // dùng destructuring
        const { listUser } = this.props;
        console.log(listUser)
        return (
            <div>
                <div>
                    <span onClick={() => { this.hanldShowHide() }}> {
                        this.state.isShowList === true ? "Hide list" : "On List"}
                    </span>
                </div>
                {/* // props propertis <dùng để truyền dữ liệu từ cha sang con> */}
                {this.state.isShowList &&
                    <div>
                        {
                            listUser.map((user, index) => {
                                return (
                                    <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                                        <div>My name is Dat {user.name}</div>
                                        <div>My age is 23 {user.age}</div>
                                        <hr />
                                    </div>
                                )
                            })
                        }
                    </div>
                }

            </div>
        )
    }
}

export default DisplayInfor;
