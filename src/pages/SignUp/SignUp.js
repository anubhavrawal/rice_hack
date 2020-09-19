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
            stress: '',
            dietaryRestrictions: [],
            allergies: [],
            conditions: [],
            familyHistory: []
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleChangeCheck = this.handleChangeCheck.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        const target = event.target;
        const name = target.name;

        this.setState({
            [name]: target.value
        });
    }

    handleChangeCheck(event){
        const target = event.currentTarget;
        const name = target.textContent;
        const category = target.className.split(' ')[target.className.split(' ').length - 1]

        if(!this.state.[category].includes(name)){
            this.setState({
                [category]: [...this.state.[category], name]
            });
        }
        else {
            var temp = [];
            this.state.[category].forEach((item, i) => {
                if(item !== name){
                    temp.push(item);
                }
            });
            this.setState({
                [category]: temp
            });
        }
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
                    stress: this.state.stress,
                    familyHistory: this.state.familyHistory,
                    allergies: this.state.allergies,
                    conditions: this.state.conditions,
                    dietaryRestrictions: this.state.dietaryRestrictions
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
                            <CheckBox label="Gluten Free" onChange={this.handleChangeCheck} className="dietaryRestrictions" />
                            <CheckBox label="Ketogenic" onChange={this.handleChangeCheck} className="dietaryRestrictions" />
                            <CheckBox label="Vegan" onChange={this.handleChangeCheck} className="dietaryRestrictions" />
                            <CheckBox label="Vegetarian" onChange={this.handleChangeCheck} className="dietaryRestrictions" />
                            <CheckBox label="Lacto-vegetarian" onChange={this.handleChangeCheck} className="dietaryRestrictions" />
                            <CheckBox label="Ovo-vegetarian" onChange={this.handleChangeCheck} className="dietaryRestrictions" />
                            <CheckBox label="Pescetarian" onChange={this.handleChangeCheck} className="dietaryRestrictions" />
                            <CheckBox label="Paleo" onChange={this.handleChangeCheck} className="dietaryRestrictions" />
                            <CheckBox label="Primal" onChange={this.handleChangeCheck} className="dietaryRestrictions" />
                            <CheckBox label="Whole30" onChange={this.handleChangeCheck} className="dietaryRestrictions" />
                        </div>
                        <div>
                            <p>Allergies</p>
                            <CheckBox label="Dairy" onChange={this.handleChangeCheck} className="allergies" />
                            <CheckBox label="Egg" onChange={this.handleChangeCheck} className="allergies" />
                            <CheckBox label="Grain" onChange={this.handleChangeCheck} className="allergies" />
                            <CheckBox label="Seafood" onChange={this.handleChangeCheck} className="allergies" />
                            <CheckBox label="Peanut" onChange={this.handleChangeCheck} className="allergies" />
                            <CheckBox label="Sesame" onChange={this.handleChangeCheck} className="allergies" />
                            <CheckBox label="Shellfish" onChange={this.handleChangeCheck} className="allergies" />
                            <CheckBox label="Gluten" onChange={this.handleChangeCheck} className="allergies" />
                            <CheckBox label="Soy" onChange={this.handleChangeCheck} className="allergies" />
                            <CheckBox label="Sulfite" onChange={this.handleChangeCheck} className="allergies" />
                            <CheckBox label="Tree Nut" onChange={this.handleChangeCheck} className="allergies" />
                            <CheckBox label="Wheat" onChange={this.handleChangeCheck} className="allergies" />
                        </div>
                        <div>
                            <p>Pre-existing Conditions</p>
                            <CheckBox label="Diabetic" onChange={this.handleChangeCheck} className="conditions" />
                            <CheckBox label="Heart Conditions" onChange={this.handleChangeCheck} className="conditions" />
                            <CheckBox label="High Blood Pressure" onChange={this.handleChangeCheck} className="conditions" />
                            <CheckBox label="High Cholesterol" onChange={this.handleChangeCheck} className="conditions" />
                        </div>
                        <div>
                            <p>Family History</p>
                            <CheckBox label="Diabetic" onChange={this.handleChangeCheck} className="familyHistory" />
                            <CheckBox label="Heart Conditions" onChange={this.handleChangeCheck} className="familyHistory" />
                            <CheckBox label="High Blood Pressure" onChange={this.handleChangeCheck} className="familyHistory" />
                            <CheckBox label="High Cholesterol" onChange={this.handleChangeCheck} className="familyHistory" />
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
