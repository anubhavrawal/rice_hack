import React, { Component } from 'react';
import './CheckBox.css';
import {Checkbox} from 'semantic-ui-react';

export default class CheckBox extends Component {
    render() {
        return (
            <React.Fragment>
                <Checkbox label={this.props.label} name={this.props.label} className={this.props.className} onChange={this.props.onChange} /> <br />
            </React.Fragment>
        );
    }
}
