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
        var dayOfWeek = date[0];
        console.log(dayOfWeek)
        var day = parseInt(date[2]);
        var year = parseInt(date[3]);
        var monthInfo = months[month].split(' ');
        var days = parseInt(monthInfo[0]);
        var next = monthInfo[1];

        var tempDate = [];
        tempDate.push([dayOfWeek,month, day, year]);
        var daysOfWeek = {"Mon":"Tue","Tue":"Wed","Wed":"Thu", "Thu":"Fri", "Fri":"Sat", "Sat":"Sun", "Sun":"Mon"};
        for(var i=0; i<6; i++){
            day += 1;
            dayOfWeek = daysOfWeek[dayOfWeek]
            console.log(dayOfWeek)
            if(days < day){
                day = 1;
                dayOfWeek = daysOfWeek[dayOfWeek]
                month = next;
                if(month === "Jan"){
                    year += 1
                }
            }
            tempDate.push([dayOfWeek,month, day, year])
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
                        <CalendarColumn removeItem={this.props.removeItem} day={0} recipes={this.props.addedRecipes[0]} date={this.state.dates[0]} />
                        <CalendarColumn removeItem={this.props.removeItem} day={1} recipes={this.props.addedRecipes[1]} date={this.state.dates[1]} />
                        <CalendarColumn removeItem={this.props.removeItem} day={2} recipes={this.props.addedRecipes[2]} date={this.state.dates[2]} />
                        <CalendarColumn removeItem={this.props.removeItem} day={3} recipes={this.props.addedRecipes[3]} date={this.state.dates[3]} />
                        <CalendarColumn removeItem={this.props.removeItem} day={4} recipes={this.props.addedRecipes[4]} date={this.state.dates[4]} />
                        <CalendarColumn removeItem={this.props.removeItem} day={5} recipes={this.props.addedRecipes[5]} date={this.state.dates[5]} />
                        <CalendarColumn removeItem={this.props.removeItem} day={6} recipes={this.props.addedRecipes[6]} date={this.state.dates[6]} />
                    </div>
                }
            </div>
        );
    }
}
