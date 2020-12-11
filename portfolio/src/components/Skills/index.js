import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import List from '../List';

export default function Skills() {
  const clientSkills = ['HTML5', 'CSS', 'Bootstrap', 'JavaScript', 'Jquery', 'React']
  const serverSkills = ['NodeJS', 'Express', 'Security', 'Session Storage', 'Authentication']
  const dbSkills = ['MySQL', 'Sequelize', 'MongoDb', 'Mongoose', 'MERN Stack']
  return(
    <Container fluid>
      <Row>
        <Col md={4}>
          <h5 style={{ textDecoration: "underline" }}>Client-Side</h5>
            <List
              array={clientSkills}
            />
        </Col>
        <Col>
          <h5 style={{ textDecoration: "underline" }}>Server-Side</h5>
          <Row>
          <Col>
            <List array={serverSkills} />
          </Col>
          <Col>
            <List array={dbSkills} />
          </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
