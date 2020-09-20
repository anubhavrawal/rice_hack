import React, { Component } from 'react';
import './Recipes.css';
import Heading from '../Heading/Heading';
import SingleRecipe from '../SingleRecipe/SingleRecipe';

export default class Recipes extends Component {

    componentDidMount(){
        var num = 12;
        var diet = ""
        var intolerances = "dairy,gluten"
        var apiKey = "e984128ba237435a99a187288deffa96" //"b599358e847b4871a0cd0b9d625b31a1"
        fetch("https://api.spoonacular.com/recipes/complexSearch?diet="+diet+"intolerances="+intolerances+"&addRecipeInformation=true&addRecipeNutrition=true&number="+num+"&apiKey="+apiKey).then(res => {
            return res.json()
        }).then(res => {
            this.setState({data: res});
            console.log(this.state.data);
        });
    }


    render() {
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
