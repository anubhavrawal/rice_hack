import React, { Component } from 'react';
import './TextField.css';
import {Input} from 'semantic-ui-react';

export default class TextField extends Component {
    render() {
        return (
            <div className="textField">
                <Input size="small" label={this.props.label} placeholder={this.props.placeholder} type={this.props.type} name={this.props.type} />
            </div>
        );
    }
}
