import React, { Component } from 'react';
import './Recipes.css';
import Heading from '../Heading/Heading';
import SingleRecipe from '../SingleRecipe/SingleRecipe';
import {preferences, xmlRequest} from '../api.js';

export default class Recipes extends Component {
    componentDidMount(){
        preferences("", "", 10);
    }

    render() {
        return (
            <div className="recipes">
                <Heading text="Recipes" />
                <div className="recipesContent">
                    <SingleRecipe />
                    <SingleRecipe />
                    <SingleRecipe />
                </div>
            </div>
        );
    }
}
