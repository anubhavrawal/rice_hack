import React, { Component } from 'react';
import './Dashboard.css';
import Heading from '../../components/Heading/Heading';
import Recipes from '../../components/Recipes/Recipes';
import Calendar from '../../components/Calendar/Calendar';
import ShoppingList from '../../components/ShoppingList/ShoppingList';
import SignOutButton from '../../components/SignOutButton/SignOutButton';

export default class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard">
                <SignOutButton />
                <Heading text="Dashboard" icon="clipboard" />
                <div className="dashboardContent">
                    <Recipes />
                    <div className="dashboardRight">
                        <Calendar />
                        <hr />
                        <ShoppingList />
                    </div>
                </div>
            </div>
        );
    }
}
