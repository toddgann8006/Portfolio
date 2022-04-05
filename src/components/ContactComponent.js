import React, { useState } from 'react';
import { Button, Form, FormGroup, FormFeedback, Label, Input, Col } from 'reactstrap';

function Contact(props) {

    const [email, setEmail] = useState("");
    const [validEmail, setValidEmail] = useState(false);
    const [emailError, setEmailError] = useState("");
    const [name, setName] = useState("");
    const [validName, setValidName] = useState(false);
    const [nameError, setNameError] = useState("");
    const [message, setMessage] = useState("");
    const [validMessage, setValidMessage] = useState(false);
    const [messageError, setMessageError] = useState("");

    const handleEmailInputChange = (event) => {
        const emailCheckRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        const email = event.target.value
        setEmail(email);
        if (emailCheckRegex.test(email)) {
            setValidEmail(true);
            setEmailError("");
        } else if (!emailCheckRegex.test(email)) {
            setValidEmail(false);
            setEmailError("Invalid email address.")
        };
    };

    const handleNameInputChange = (event) => {
        setName(event.target.value);
        if (name.length >= 2) {
            setValidName(true);
            setNameError("");
        } else {
            setValidName(false);
            setNameError("Name must be at least 2 characters.")
        }
    };

    const handleMessageInputChange = (event) => {
        setMessage(event.target.value);
        if (message.length > 15) {
            setValidMessage(true);
            setMessageError("")
        } else {
            setValidMessage(false);
            setMessageError("Please enter a message.")
        }
    };

    const handleSubmit = (event) => {
        console.log('Current state is: ');
        alert('Current state is: '(name) + (email));
        event.preventDefault();
    };

    return (
        <div className='container'>
            <div className='row mt-3'>
                <div className='col d-flex align-items-start'>
                    <h1>Contact</h1>
                </div>
            </div>
            <div className='row mt-5'>
                <div className='col-md-6'>
                    <Form onSubmit={handleSubmit}>
                        <FormGroup row>
                            <Col>
                                <Label htmlFor="name">Name</Label>
                                <Input type="text" id="name" name="name"
                                    placeholder="Name"
                                    value={name}
                                    invalid={nameError}
                                    onChange={handleNameInputChange} />
                                <FormFeedback invalid>{nameError}</FormFeedback>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col>
                                <Label htmlFor="email">Email</Label>
                                <Input type="email" id="email" name="email"
                                    placeholder="Email"
                                    value={email}
                                    invalid={emailError}
                                    onChange={handleEmailInputChange} />
                                <FormFeedback invalid>{emailError}</FormFeedback>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col>
                                <Label htmlFor="message">Message</Label>
                                <Input type="textarea" id="feedback" name="feedback"
                                    rows="8"
                                    value={message}
                                    invalid={messageError}
                                    onChange={handleMessageInputChange}
                                />
                                <FormFeedback invalid>{messageError}</FormFeedback>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col>
                                <Button disabled={!validEmail} type="submit" onClick={handleSubmit} color="primary">
                                    Submit
                                </Button>
                            </Col>
                        </FormGroup>
                    </Form>
                </div>
                <div className='col-md-6'>
                    <p>Hello</p>
                </div>
            </div >
        </div >
    );
};

export default Contact;