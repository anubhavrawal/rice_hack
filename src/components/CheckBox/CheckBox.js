import React, { Component } from 'react';
import './CheckBox.css';
import {Checkbox} from 'semantic-ui-react';

export default class CheckBox extends Component {
    render() {
        return (
            <div className="checkBox">
                {this.props.className === "dietaryRestrictions" || this.props.className === "biologicalSex" ?
                    <React.Fragment>
                        <Checkbox radio label={this.props.label} name={this.props.className} className={this.props.className} onChange={this.props.onChange} checked={this.props.checked === this.props.label} /> <br />
                    </React.Fragment>
                    :
                    <React.Fragment>
                        <Checkbox label={this.props.label} name={this.props.className} className={this.props.className} onChange={this.props.onChange} /> <br />
                    </React.Fragment>
                }
            </div>
        );
    }
}
