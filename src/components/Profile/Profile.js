import React, {Component} from 'react';
import './Profile.css'
import firebase from '../Firebase';

class Profile extends Component {


    firebase.firestore().collection('Users').doc(this.props.userEmail).get().then((user) => {
            user
        }
    )

    render() {
        return (
            <div>

            </div>
        );
    }
}

export default Profile;