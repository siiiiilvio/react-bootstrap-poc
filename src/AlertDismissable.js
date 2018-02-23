import React, { Component } from 'react';
import Alert from 'react-bootstrap/lib/Alert.js'; 
import Button from 'react-bootstrap/lib/Button.js'; 

class AlertDismissable extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleDismiss = this.handleDismiss.bind(this);
        this.handleShow = this.handleShow.bind(this);

        this.state = {
            show: true
        };
    }

    handleDismiss() {
        this.setState({ show: false });
        console.log('Dismiss function triggered');
    }

    handleShow() {
        this.setState({ show: true });
        console.log('Show function triggered');
    }

    render() {
        if (this.state.show) {
            return (
                <Alert bsStyle="danger" onDismiss={this.handleDismiss}>
                    <h4>Oh snap! You got an error!</h4>
                    <p>
                        Change this and that and try again. Duis mollis, est non commodo
                        luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
                        Cras mattis consectetur purus sit amet fermentum.
                    </p>
                    <p>
                        <Button bsStyle="danger">Take this action</Button>
                        <span> or </span>
                        <Button onClick={this.handleDismiss}>Hide Alert</Button>
                    </p>
                </Alert>
            );
        }

        return <Button onClick={this.handleShow}>Show Alert</Button>;
    }
}

export default AlertDismissable;
