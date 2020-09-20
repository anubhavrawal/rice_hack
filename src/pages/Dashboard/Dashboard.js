import React, { Component } from 'react';
import './Dashboard.css';
import Heading from '../../components/Heading/Heading';
import Recipes from '../../components/Recipes/Recipes';
import Calendar from '../../components/Calendar/Calendar';
import ShoppingList from '../../components/ShoppingList/ShoppingList';
import SignOutButton from '../../components/SignOutButton/SignOutButton';
import Profile from "../../components/Profile/Profile";
import { Button } from "semantic-ui-react"

export default class Dashboard extends Component {
    state = {
        addedRecipes:
        [
            [],
            [],
            [],
            [],
            [],
            [],
            [],
        ]
    }

    addItem = (obj, day) => {
        const app = document.getElementById("pogchamp")

        var bobs = obj.nutrition.ingredients
        for(var i = 0; i < bobs.length; i++)
        {
            var bob = document.createElement('p')
            console.log(bobs[i])
            bob.textContent = bobs[i].name + " " + bobs[i].amount + " " + bobs[i].unit
            app.append(bob)
        }

        let addedRecipesCopy = [...this.state.addedRecipes]
        addedRecipesCopy[day].push(obj)
        this.setState({
            addedRecipes: addedRecipesCopy,
        })
    }

    removeItem = (index, day) => {
        let addedRecipesCopy = [...this.state.addedRecipes]
        addedRecipesCopy[day].splice(index)
        this.setState({
            addedRecipes: addedRecipesCopy,
            }
        )
    }

    render() {
        return (
            <div className="dashboard">
                <div>
                    <SignOutButton />
                    <Profile userEmail={this.props.userEmail}/>
                </div>
                <Heading text="Dashboard" icon="clipboard" />
                <div className="dashboardContent">
                    <Recipes addItem={this.addItem} userEmail={this.props.userEmail} />
                    <div className="dashboardRight">
                        <Calendar removeItem={this.removeItem} addedRecipes={this.state.addedRecipes}/>
                        <hr />
                        <div id="pogchamp">

                        </div>
                        <Button onClick={()=>window.location.href = "https://api.kroger.com/v1/connect/oauth2/authorize?scope=cart.basic:write&response_type=code&client_id=testapp2-402daa89511294e10dedd09a5d790afe8269121174086912329&redirect_uri=http://kroger-redirect-page.s3-website.us-east-2.amazonaws.com/"}>
                            Purchase from Kroger
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
}
