import React, { Component } from 'react';
import './Recipes.css';
import Heading from '../Heading/Heading';
import SingleRecipe from '../SingleRecipe/SingleRecipe';
import firebase from '../Firebase';

export default class Recipes extends Component {

    constructor(props){
        super(props);

        this.state = {
            data: null,
            conditions: null,
            familyHistory: null,
            allergies: null,
            dietaryRestrictions: null
        }
    }

    componentDidMount(){
        var db = firebase.firestore();
        db.collection('Users').doc(this.props.userEmail).get().then((snapshot) => {
            var data = snapshot.data();
            this.setState({
                conditions: data.conditions,
                familyHistory: data.familyHistory,
                allergies: data.allergies,
                dietaryRestrictions: data.dietaryRestrictions
            });
        }).then(() => {
            var num = 12;
            var diet = this.state.dietaryRestrictions.toLowerCase();
            var intolerances = "";

            this.state.allergies.forEach((item, i) => {
                if(i === 0){
                    intolerances += item;
                }
                else {
                    intolerances += (', ' + item);
                }
            });

            intolerances = intolerances.toLowerCase();

            // var apiKey = "b599358e847b4871a0cd0b9d625b31a1";
            var apiKey = "e984128ba237435a99a187288deffa96";
            fetch("https://api.spoonacular.com/recipes/complexSearch?diet="+diet+"intolerances="+intolerances+"&addRecipeInformation=true&addRecipeNutrition=true&number="+num+"&apiKey="+apiKey).then(res => {
                return res.json()
            }).then(res => {
                this.setState({data: res});
            });
        });
    }


    render() {
        console.log(this.state);
        return (
            <div className="recipes">
                <Heading text="Recipes" />
                <div className="recipesContent">
                    {
                        this.state && this.state.data &&
                        <div>
                            {this.state.data.results.map((obj, i) => (
                                <SingleRecipe key={i} img={obj.image} title={obj.title} description={obj.summary} />
                            ))}
                        </div>
                    }
                </div>
            </div>
        );
    }
}
