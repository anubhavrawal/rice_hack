import React, { Component } from 'react';
import './CalendarColumn.css';
import Heading from '../../components/Heading/Heading';

export default class CalendarColumn extends Component {
    render() {
        return (
            <div className="calendarColumn">
                <div className="calendarColumnHeading">
                    {this.props.date[0] + ' ' + this.props.date[1]}
                </div>
                <div className="calendarColumnContent">
                    
                </div>
            </div>
        );
    }
}
