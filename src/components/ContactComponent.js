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

    const sendMessage = () => {
        const templateParams = {
            from_name: name + " (" + email + ")",
            to_name: "toddgann8006@comcast.net",
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
    }

    return (
        <div className='bg-dark'>
            <div className='container pb-5 pt-5'>
                <div className='row mt-3 backgroundGray'>
                    <div className='col-12 mb-5 d-flex justify-content-center'>
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
                                    <Button disabled={!validEmail} type="submit" onClick={sendMessage} color="secondary">
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