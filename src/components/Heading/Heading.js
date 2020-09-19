import React, { Component } from 'react';
import './Heading.css';
import {Header, Icon} from 'semantic-ui-react';

export default class Heading extends Component {
    render() {
        return (
            <div className="pageHeader">
                <Header as='h2' icon>
                    <Icon name={this.props.icon} />
                    {this.props.text}
                </Header>
            </div>
        );
    }
}
