import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ContactForm from '../components/ContactForm';


export default function Contact(){
  return (
    <Container>
      <Row className="justify-content-start">
        <Col md className="head">
          <h2>Contact</h2>
        </Col>
      </Row>
      <Row className="justify-content-start" id="con">
       <ContactForm />
      </Row>
    </Container>
  )
};
