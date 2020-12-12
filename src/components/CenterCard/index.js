import React from 'react';
import { Card, Row, Col, Image, Tabs, Tab } from 'react-bootstrap';
import Skills from '../Skills';

//Export a card formatted for use on the landing page
export default function CenterCard(props) {
  return (
    <Card className="border-0">
      <Card.Body>
        <Row noGutters>
          <Col md={3}>
            <Image src={props.image} alt={props.alt} fluid />
          </Col>
          <Col md={9}>
            <Tabs className="aboutTabs">
              <Tab eventKey="bio" title="Bio">
                <article style={{ marginTop: '15px' }}>
                  <h3>{props.title}</h3>
                  {props.text.map((p, index) => {
                    console.log(p);
                    return <p key={index}>{p}</p>;
                  })}
                </article>
              </Tab>
              <Tab eventKey="skills" title="Skills">
                <Skills />
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}
