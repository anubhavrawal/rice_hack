import React, { Component } from 'react';
import './CalendarColumn.css';
import Heading from '../../components/Heading/Heading';
import SingleRecipe from "../SingleRecipe/SingleRecipe";

export default class CalendarColumn extends Component {
    render() {
        return (
            <div className="calendarColumn">
                <div className="calendarColumnHeading">
                    {this.props.date[0] + ' ' + this.props.date[1] + ' ' + this.props.date[2]}
                </div>
                <div className="calendarColumnContent">
                    {
                        this.props.recipes.map((obj, i) => (
                        <SingleRecipe removeItem={this.props.removeItem} recipeIndex={i} day={this.props.day} key={i} img={obj.image} title={obj.title} description={obj.summary} showRemove={true} />
                    ))}
                </div>
            </div>
        );
    }
}
