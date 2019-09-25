import React from 'react';
import { Form, Button } from 'react-bootstrap';
import "./contact.css";
var ReactDOM = require('react-dom');
var FormControl = require('react-bootstrap').FormControl;

function sendEmail(email, message_user) {
    const nodemailer = require('nodemailer');
  
    let transport = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: 'gmail-user',
        pass: 'gmail-pass'
      }
    });
  
    const message = {
      from: '', // Sender address
      to: 'patrick.leduc13@gmail.com',         // List of recipients
      subject: 'Message from someone at personal website!', // Subject line
      text: {email, message_user} // Plain text body
    };
    transport.sendMail(message, function (err, info) {
      if (err) {
        console.log(err)
      } else {
        console.log(info);
      }
    });
  }


export const Contact = () => (

    <div className="contact_header" >
        <h6>I would love to hear from you! Fill out the form below and I'll be sure to get back to you as soon as possible.</h6>
        <Form>
            <Form.Group controlId="userEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control 
                    id="userEmail"
                    type="text"
                    placeholder="example@123.com" 
                    inputRef = {(input) => this.inputEmail = input }
                    />
            </Form.Group>
            <Form.Group controlId="userMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control
                    id="userText"
                    type="text"
                    as="textarea" 
                    rows="3"
                    inputRef = {(input) => this.inputText = input }
                    
                    />
            </Form.Group>
            <Button variant="primary"> Send </Button>
        </Form>
    </div>
);

