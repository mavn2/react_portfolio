import React from 'react';
import CenterCard from '../components/Card';
import {Container, Row, Col} from 'react-bootstrap';

// Text for about me
const aboutText = ["",""]

// Image info for about me
const aboutImage ={}
function Home(){
  return(
    <Container>
    <Row className="justify-content-start">
      <Col md className="head">
        <h2>About Me</h2>
      </Col>
    </Row>
    <Row className="justify-content-start" id="bio">
      <Col md>
        <CenterCard text={aboutText}>
        </CenterCard>
      </Col>
    </Row>
    </Container>
  );
};

export default Home;
