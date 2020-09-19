import React, { Component } from 'react';
import './Calendar.css';
import Heading from '../../components/Heading/Heading';

export default class Calendar extends Component {
    render() {
        return (
            <div className="calendar">
                <Heading text="Calendar" />
            </div>
        );
    }
}
