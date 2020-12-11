import React from 'react';
import { Container, Row } from 'react-bootstrap';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import Header from '../components/Header';

// Export contact page
export default function Contact() {
  return (
    <Container>
      <Header page={'Contact'} />
      <Row className="justify-content-start" id="con">
        <ContactForm />
      </Row>
      <Footer />
    </Container>
  );
}
