import React from 'react';
import emailjs from 'emailjs-com';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function ContactForm() {
  // Contact self using emailjs sdk, following their example code
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_xm1nfym',
        'template_ztnapfr',
        e.target,
        'user_TfPL19f9TQtWe0T28Yifg'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  // Returns a contact form, takes user input and sends w/ above fn
  return (
    <Form id="contact" onSubmit={sendEmail}>
      <Form.Group controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Your Name"
          name="sender_name"
        ></Form.Control>
      </Form.Group>
      <Form.Group controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="youremail@adress.com"
          name="sender_email"
        ></Form.Control>
      </Form.Group>
      <Form.Group controlId="message">
        <Form.Label>Message</Form.Label>
        <Form.Control
          type="text"
          placeholder="Please get in touch"
          name="message"
          as="textarea"
          rows={3}
        ></Form.Control>
      </Form.Group>
      <Button variant="primary" type="submit" value="Send">
        Submit
      </Button>
    </Form>
  );
}
