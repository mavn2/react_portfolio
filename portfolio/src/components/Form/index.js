import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function ContactForm(props){
  return(
    <Form id="contact">
      <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="name">
          </Form.Control>
      </Form.Group>
      <Form.Group controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="email">
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="message">
        <Form.Label>Message</Form.Label>
        <Form.Control type="text" placeholder="name">
        </Form.Control>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};
