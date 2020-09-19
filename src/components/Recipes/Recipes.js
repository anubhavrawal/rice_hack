import React, { Component } from 'react';
import './Recipes.css';
import Heading from '../Heading/Heading';
import SingleRecipe from '../SingleRecipe/SingleRecipe';

export default class Recipes extends Component {
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
