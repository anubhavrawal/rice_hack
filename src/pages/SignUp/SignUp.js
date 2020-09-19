import React, { Component } from 'react';
import './SignUp.css';
import TextField from '../../components/TextField/TextField';
import Heading from '../../components/Heading/Heading';
import CheckBox from '../../components/CheckBox/CheckBox';
import {Button} from 'semantic-ui-react';

export default class SignUp extends Component {
    render() {
        return (
            <div className="signUp">
                <Heading text="Sign Up" icon="signup" />
                <TextField label="First Name" placeholder="First Name" type="firstName" />
                <TextField label="Last Name" placeholder="Last Name" type="lastName" />
                <TextField label="Email" placeholder="Email address" type="email" />
                <TextField label="Password" placeholder="Password" type="password" />
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
                <TextField label="Age" placeholder="Age" type="age" />
                <TextField label="Height" placeholder="Height (in inches)" type="height" />
                <TextField label="Weight" placeholder="Weight (in pounds)" type="weight" />
                <TextField label="Daily Activity" placeholder="Number from 1 to 10" type="dailyActivity" />
                <TextField label="Stress" placeholder="Number from 1 to 10" type="stress" />
                <Button>Sign Up</Button> <br />
                <Button className="signInButton" as="a" href="/">Already Have An Account?</Button>
            </div>
        );
    }
}
