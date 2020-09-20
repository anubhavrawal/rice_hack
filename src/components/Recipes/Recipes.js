import React, { Component } from 'react';
import './Recipes.css';
import Heading from '../Heading/Heading';
import SingleRecipe from '../SingleRecipe/SingleRecipe';

export default class Recipes extends Component {

    componentDidMount(){
        var num = 9;
        var diet = ""
        var intolerances = ""
        var apiKey = "b599358e847b4871a0cd0b9d625b31a1"
        fetch("https://api.spoonacular.com/recipes/complexSearch?diet="+diet+"intolerances="+intolerances+"&addRecipeInformation=true&addRecipeNutrition=true&number="+num+"&apiKey="+apiKey).then(res => {
      return res.json()
    }).then(res => {
        this.setState({data: res});
    })
    }


    render() {
        return (
            <div className="recipes">
                <Heading text="Recipes" />
                <div className="recipesContent">
                    {
                        this.state && this.state.data &&
                        <div>
                            <SingleRecipe img={this.state.data.results[0].image} title={this.state.data.results[0].title} description={this.state.data.results[0].summary}/>
                            <SingleRecipe img={this.state.data.results[1].image} title={this.state.data.results[1].title} description={this.state.data.results[1].summary}/>
                            <SingleRecipe img={this.state.data.results[2].image} title={this.state.data.results[2].title} description={this.state.data.results[2].summary}/>
                            <SingleRecipe img={this.state.data.results[3].image} title={this.state.data.results[3].title} description={this.state.data.results[3].summary}/>
                            <SingleRecipe img={this.state.data.results[4].image} title={this.state.data.results[4].title} description={this.state.data.results[4].summary}/>
                            <SingleRecipe img={this.state.data.results[5].image} title={this.state.data.results[5].title} description={this.state.data.results[5].summary}/>
                            <SingleRecipe img={this.state.data.results[6].image} title={this.state.data.results[6].title} description={this.state.data.results[6].summary}/>
                            <SingleRecipe img={this.state.data.results[7].image} title={this.state.data.results[7].title} description={this.state.data.results[7].summary}/>
                            <SingleRecipe img={this.state.data.results[8].image} title={this.state.data.results[8].title} description={this.state.data.results[8].summary}/>
                        </div>
                    }
                </div>
            </div>
        );
    }
}
