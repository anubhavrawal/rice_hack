import React, { Component } from 'react';
import './SignIn.css';
import TextField from '../../components/TextField/TextField';
import Heading from '../../components/Heading/Heading';
import {Button, Form} from 'semantic-ui-react';
import {Redirect} from 'react-router-dom';
import firebase from '../../components/Firebase';
import {v4} from 'uuid';

export default class SignIn extends Component {
    constructor(props){
        super(props);

        this.state = {
            redirect: false,
            email: '',
            password: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        const target = event.target;
        const name = target.name;

        this.setState({
            [name]: target.value
        });
    }

    handleSubmit(event){
        event.preventDefault();
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then(() => {
            this.setState({
                redirect: true
            })
        });
    }

    render() {
        return (
            <React.Fragment>
                {this.state.redirect ?
                    <Redirect to={{
                        pathname: "/",
                        key: v4()
                    }} />
                    :
                    <div className="signIn">
                        <img id="logo" src="../logo.png"></img>
                        <Heading text="Safe Menu" icon="" />
                        <Form onSubmit={this.handleSubmit} className="signInForm">
                            <TextField label="Email" placeholder="Email address" type="email" onChange={this.handleChange} />
                            <TextField label="Password" placeholder="Password" type="password" onChange={this.handleChange} />
                            <div id="wrap">
                            <Button onClick={this.handleSubmit}>Sign In</Button> <br />
                            <Button className="signUpButton" as="a" href="/signUp">Don't Have An Account?</Button>
                            </div>
                        </Form>
                    </div>
                }
            </React.Fragment>
        );
    }
}
