import React, { Component } from 'react';
import './SignIn.css';
import TextField from '../../components/TextField/TextField';
import Heading from '../../components/Heading/Heading';
import {Button} from 'semantic-ui-react';

export default class SignIn extends Component {
    render() {
        return (
            <div className="signIn">
                <Heading text="Sign In" icon="sign-in" />
                <TextField label="Email" placeholder="Email address" type="text" />
                <TextField label="Password" placeholder="Password" type="password" />
                <Button>Sign In</Button> <br />
                <Button className="signUpButton" as="a" href="/signUp">Don't Have An Account?</Button>
            </div>
        );
    }
}
