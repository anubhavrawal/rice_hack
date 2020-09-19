import React, { Component } from 'react';
import './Calendar.css';
import Heading from '../Heading/Heading';
import CalendarColumn from '../CalendarColumn/CalendarColumn';

export default class Calendar extends Component {
    constructor(props){
        super(props);

        this.state = {
            dates: []
        }
    }

    componentDidMount(){
        const months = {
            "Jan": "31 Feb",
            "Feb": "28 Mar",
            "Mar": "31 Apr",
            "Apr": "30 May",
            "May": "31 Jun",
            "Jun": "30 Jul",
            "Jul": "31 Aug",
            "Aug": "31 Sep",
            "Sep": "30 Oct",
            "Oct": "31 Nov",
            "Nov": "30 Dec",
            "Dec": "31 Jan"
        }
        var date = (new Date(Date.now())).toString().split(' ');
        var month = date[1];
        var day = parseInt(date[2]);
        var year = parseInt(date[3]);
        var monthInfo = months[month].split(' ');
        var days = parseInt(monthInfo[0]);
        var next = monthInfo[1];

        var tempDate = [];
        tempDate.push([month, day, year]);
        for(var i=0; i<6; i++){
            day += 1;
            if(days < day){
                day = 1;
                month = next;
                if(month === "Jan"){
                    year += 1
                }
            }
            tempDate.push([month, day, year])
        }

        this.setState({
            dates: tempDate
        });
    }

    render() {
        return (
            <div className="calendar">
                <Heading text="Calendar" />
                {this.state.dates.length > 0 &&
                    <div className="calendarColumns">
                        <CalendarColumn date={this.state.dates[0]} />
                        <CalendarColumn date={this.state.dates[1]} />
                        <CalendarColumn date={this.state.dates[2]} />
                        <CalendarColumn date={this.state.dates[3]} />
                        <CalendarColumn date={this.state.dates[4]} />
                        <CalendarColumn date={this.state.dates[5]} />
                        <CalendarColumn date={this.state.dates[6]} />
                    </div>
                }
            </div>
        );
    }
}
