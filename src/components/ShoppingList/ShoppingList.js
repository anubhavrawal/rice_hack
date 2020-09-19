import React, { Component } from 'react';
import './ShoppingList.css';
import Heading from '../../components/Heading/Heading';

export default class ShoppingList extends Component {
    render() {
        return (
            <div className="shoppingList">
                <Heading text="Shopping List" />
            </div>
        );
    }
}
