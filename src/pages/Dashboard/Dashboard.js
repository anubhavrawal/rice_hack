import React, { Component } from 'react';
import './Dashboard.css';
import Heading from '../../components/Heading/Heading';
import Recipes from '../../components/Recipes/Recipes';
import Calendar from '../../components/Calendar/Calendar';
import ShoppingList from '../../components/ShoppingList/ShoppingList';
import SignOutButton from '../../components/SignOutButton/SignOutButton';
import Profile from "../../components/Profile/Profile";

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
        let addedRecipesCopy = [...this.state.addedRecipes]
        console.log("Day", day)
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
                        <ShoppingList />
                    </div>
                </div>
            </div>
        );
    }
}
