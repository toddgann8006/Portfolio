import React, { useState } from 'react';
import { Button, Form, FormGroup, FormFeedback, Label, Input, Col } from 'reactstrap';
import emailjs from 'emailjs-com';

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
        const nameCheckRegex = /^([a-z]{2,})$/
        const name = event.target.value
        setName(name);
        if (nameCheckRegex.test(name)) {
            setValidName(true);
            setNameError("");
        } else {
            setValidName(false);
            setNameError("Please enter a name.")
        }
    };

    const handleMessageInputChange = (event) => {
        const messageCheckRegex = /^([a-z]{10,})$/
        const message = event.target.value
        setMessage(message);
        if (messageCheckRegex.test(message)) {
            setValidMessage(true);
            setMessageError("")
        } else {
            setValidMessage(false);
            setMessageError("Please enter a message.")
        }
    };

    const sendMessage = (e) => {
        e.preventDefault();

        const templateParams = {
            from_name: name,
            to_name: email,
            message: message
        };

        emailjs.send("service_9zbh1pe", "template_wjwr0pk", templateParams, 'x2RG_9g3Z1L02zFZ9')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
            }, (err) => {
                console.log('FAILED...', err);
            });
        setName("");
        setEmail("");
        setMessage("");
        setValidEmail(false);
        setValidMessage(false);
        setValidName(false);
    };

    const isValid = validEmail && validName && validMessage

    return (
        <div className='bg-dark'>
            <div className='container pb-5 pt-5'>
                <div className='row mt-3 backgroundGray'>
                    <div className='col-12 pt-3 mb-3 d-flex justify-content-center'>
                        <h1>Contact Me</h1>
                    </div>
                    <div className='col-12 d-flex justify-content-center'>
                        <Form className="w-50" onSubmit={sendMessage}>
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
                                    <Button disabled={!isValid} type="submit" onClick={sendMessage} color="secondary">
                                        Submit
                                    </Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
                </div >
            </div >
        </div>
    );
};

export default Contact;