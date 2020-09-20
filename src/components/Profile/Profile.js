import React, {Component} from 'react';
import './Profile.css'
import firebase from '../Firebase';
import {Button, Header, Icon, Modal} from "semantic-ui-react";

class Profile extends Component {
    state = {
        userInfo: "Nothing Yet"
    }

    componentDidMount() {
        firebase.firestore().collection('Users').doc(this.props.userEmail).get().then((user) => {
                this.setState({userInfo: user.data()})
                console.log(user)
                console.log(user.data())
            }
        )
    }

    render() {
        console.log(this.state.userInfo)
        return (
            <div>
                <Modal
                    size={"fullscreen"}
                    centered={true}
                    onClose={() => {
                        this.setState({
                            open: false
                        })
                    }}
                    onOpen={() => {
                        this.setState({
                            open: true
                        })
                    }}
                    open={this.state.open}
                    trigger={<Button icon={<Icon name="user" />}>Profile</Button>}
                >
                    <Modal.Header>Your Health</Modal.Header>
                    <Modal.Content>
                        <div style={{ minHeight: "300px"}}>
                            {this.state.userInfo.age}
                        </div>
                    </Modal.Content>
                </Modal>
            </div>
        );
    }
}

export default Profile;
