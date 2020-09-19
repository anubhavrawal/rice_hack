import React, {Component} from 'react';
import './Profile.css'
import firebase from '../Firebase';
import {Button, Header, Icon, Modal} from "semantic-ui-react";

class Profile extends Component {
    state = {
        userInfo: null
    }

    componentDidMount() {
        firebase.firestore().collection('Users').doc(this.props.userEmail).get().then((user) => {
                this.setState({userInfo: user.data})
                console.log(user)
                console.log(user.data)
            }
        )
    }

    render() {
        return (
            <div>
                <Modal
                    size="large"
                    basic={false}
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
                    <div style={{ minHeight: "300px"}}>

                    </div>
                </Modal>
            </div>
        );
    }
}

export default Profile;