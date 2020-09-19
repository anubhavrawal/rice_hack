import React, { Component } from 'react';
import './SingleRecipe.css';
import {Modal, Header, Button} from 'semantic-ui-react';

export default class SingleRecipe extends Component {
    constructor(props){
        super(props);

        this.state = {
            open: false
        }
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
                trigger={<div className="fillerRecipe"></div>}
            >
                <Modal.Header>Filler Recipe</Modal.Header>
                <Modal.Content>
                    <Modal.Description>
                        <Header>Filler Stuff</Header>
                        <p>Recipe Details</p>
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
