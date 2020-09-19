import React, { Component } from 'react';
import './Dashboard.css';
import Heading from '../../components/Heading/Heading';
import Recipes from '../../components/Recipes/Recipes';
import Calendar from '../../components/Calendar/Calendar';
import ShoppingList from '../../components/ShoppingList/ShoppingList';

export default class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard">
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
