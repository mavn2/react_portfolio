import React from 'react';
import { Card, Row, Col, Image, Tabs } from 'react-bootstrap';
import Skills from '../Skills';

//Export a card formatted for use on the landing page
export default function CenterCard(props){
  return (
    <Card className="border-0">
      <Card.Body>
        <Row noGutters>
          <Col md={3}>
            <Image src={props.image} alt={props.alt} fluid />
          </Col>
          <Col md={9}>
            <Tabs>
              <Tabs.Tab eventKey="bio" title="Bio">
                <Card.Text style={{ marginTop: "15px"}}>
                  <article>
                    <h3>{props.title}</h3>
                    {props.text.map((p) => {return <p>{p}</p>})}
                  </article>
                </Card.Text>
              </Tabs.Tab>
              <Tabs.Tab eventKey="skills" title="Skills">
                <Card.Text style={{ marginTop: "15px"}}>
                  <Skills />
                </Card.Text>
              </Tabs.Tab>
            </Tabs>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );

};
