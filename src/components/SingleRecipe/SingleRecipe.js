import React, { Component } from 'react';
import './SingleRecipe.css';
import {Modal, Header, Button} from 'semantic-ui-react';

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

    render() {
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
                    <Button color='red' onClick={() => {
                        this.setState({
                            open: false
                        })
                    }}>
                        Close
                    </Button>
                    <Button
                        content="Add to Calendar"
                        labelPosition='right'
                        icon='checkmark'
                        onClick={() => {
                            this.setState({
                                open: false
                            })
                        }}
                        positive
                    />
                </Modal.Actions>
            </Modal>
        );
    }
}
