import React, { Component } from 'react';
import './SingleRecipe.css';
import {Modal, Header, Button, Dropdown} from 'semantic-ui-react';

export default class SingleRecipe extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false,
            img: props.img,
            title: props.title,
            description: props.description
        }
    }

    createMarkup() {
      return {__html: this.state.description};
    }

    selectedDay = null;

    render() {
        var date = (new Date(Date.now())).toString().split(' ');
        var dayOfWeek = date[0];
        var daysOfWeek = {"Mon":"Tue","Tue":"Wed","Wed":"Thu", "Thu":"Fri", "Fri":"Sat", "Sat":"Sun", "Sun":"Mon"};

        let dayOfWeekOptions = []
        for(let i = 0; i < 6; i++){
            dayOfWeekOptions.push(
                {
                    key: dayOfWeek,
                    text: dayOfWeek,
                    value: i,
                }
            )
            dayOfWeek = daysOfWeek[dayOfWeek]
        }

        let buttonText = "Add to Calendar"
        let buttonIcon = 'checkmark'
        let buttonOnClick = () => {
            this.props.addItem(this.props.recipe, this.selectedDay)
            this.setState({
                open: false
            })
        }
        if(this.props.showRemove){
            buttonText = "Remove from Calendar"
            buttonIcon = "close"
            buttonOnClick = () => {
                this.props.removeItem(this.props.recipeIndex, this.props.day)
                this.setState({
                    open: false
                })
            }
        }
        let actions = (
            <div>
                <Button color='red' onClick={() => {
                    this.setState({
                        open: false
                    })
                }}>
                    Close
                </Button>
                <Dropdown
                    selection
                    placeholder={"Select Day"}
                    options={dayOfWeekOptions}
                    onChange={(event, data) => {this.selectedDay = data.value}}
                />
                <Button
                    content={buttonText}//buttonText
                    labelPosition='right'
                    icon={buttonIcon}
                    onClick={() => {buttonOnClick()}}
                    positive
                />
            </div>
        )
        if(this.props.day !== undefined){
            actions = (
                <div>
                    <Button color='red' onClick={() => {
                        this.setState({
                            open: false
                        })
                    }}>
                        Close
                    </Button>
                    <Button
                        content={buttonText}//buttonText
                        labelPosition='right'
                        icon={buttonIcon}
                        onClick={() => {buttonOnClick()}}
                    />
                </div>
            )
        }

        return (
            <Modal
                onClose={() => {
                    this.setState({
                        open: false
                    })
                }}
                onOpen={() => {
                    this.setState({
                        open: true
                    })
                }}
                open={this.state.open}
                trigger={<img className="fillerRecipe"
                    src={this.state.img}
                />}
            >
                <Modal.Header>{this.state.title}</Modal.Header>
                <Modal.Content>
                    <Modal.Description>
                        <Header>{this.state.title}</Header>
                        <div dangerouslySetInnerHTML={this.createMarkup()}></div>
                    </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                    {actions}
                </Modal.Actions>
            </Modal>
        );
    }
}
