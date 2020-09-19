import React, { Component } from 'react';
import './SignUp.css';
import TextField from '../../components/TextField/TextField';
import Heading from '../../components/Heading/Heading';
import CheckBox from '../../components/CheckBox/CheckBox';
import {Button} from 'semantic-ui-react';
import {Redirect} from 'react-router-dom';
import firebase from '../../components/Firebase';
import {v4} from 'uuid';

export default class SignUp extends Component {
    constructor(props){
        super(props);

        this.state = {
            redirect: false,
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            height: '',
            weight: '',
            age: '',
            dailyActivity: '',
            stress: ''
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

        const db = firebase.firestore();
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then(() => {
            firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then(() => {
                db.collection('Users').doc(this.state.email).set({
                    firstName: this.state.firstName,
                    lastName: this.state.lastName,
                    age: this.state.age,
                    height: this.state.height,
                    weight: this.state.weight,
                    dailyActivity: this.state.dailyActivity,
                    stress: this.state.stress
                }).then(() => {
                    this.setState({
                        redirect: true
                    });
                });
            });
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
                    <div className="signUp">
                        <Heading text="Sign Up" icon="signup" />
                        <TextField label="First Name" placeholder="First Name" type="firstName" onChange={this.handleChange} />
                        <TextField label="Last Name" placeholder="Last Name" type="lastName" onChange={this.handleChange} />
                        <TextField label="Email" placeholder="Email address" type="email" onChange={this.handleChange} />
                        <TextField label="Password" placeholder="Password" type="password" onChange={this.handleChange} />
                        <div>
                            <p>Dietary Restrictions</p>
                            <CheckBox label="Gluten Free" />
                            <CheckBox label="Ketogenic" />
                            <CheckBox label="Vegan" />
                            <CheckBox label="Vegetarian" />
                            <CheckBox label="Lacto-vegetarian" />
                            <CheckBox label="Ovo-vegetarian" />
                            <CheckBox label="Pescetarian" />
                            <CheckBox label="Paleo" />
                            <CheckBox label="Primal" />
                            <CheckBox label="Whole30" />
                        </div>
                        <div>
                            <p>Allergies</p>
                            <CheckBox label="Dairy" />
                            <CheckBox label="Egg" />
                            <CheckBox label="Grain" />
                            <CheckBox label="Seafood" />
                            <CheckBox label="Peanut" />
                            <CheckBox label="Sesame" />
                            <CheckBox label="Shellfish" />
                            <CheckBox label="Gluten" />
                            <CheckBox label="Soy" />
                            <CheckBox label="Sulfite" />
                            <CheckBox label="Tree Nut" />
                            <CheckBox label="Wheat" />
                        </div>
                        <div>
                            <p>Pre-existing Conditions</p>
                            <CheckBox label="Diabetic" />
                            <CheckBox label="Heart Conditions" />
                            <CheckBox label="High Blood Pressure" />
                            <CheckBox label="High Cholesterol" />
                        </div>
                        <div>
                            <p>Family History</p>
                            <CheckBox label="Diabetic" />
                            <CheckBox label="Heart Conditions" />
                            <CheckBox label="High Blood Pressure" />
                            <CheckBox label="High Cholesterol" />
                        </div>
                        <TextField label="Age" placeholder="Age" type="age" onChange={this.handleChange} />
                        <TextField label="Height" placeholder="Height (in inches)" type="height" onChange={this.handleChange} />
                        <TextField label="Weight" placeholder="Weight (in pounds)" type="weight" onChange={this.handleChange} />
                        <TextField label="Daily Activity" placeholder="Number from 1 to 10" type="dailyActivity" onChange={this.handleChange} />
                        <TextField label="Stress" placeholder="Number from 1 to 10" type="stress" onChange={this.handleChange} />
                        <Button onClick={this.handleSubmit}>Sign Up</Button> <br />
                        <Button className="signInButton" as="a" href="/">Already Have An Account?</Button>
                    </div>
                }
            </React.Fragment>
        );
    }
}
