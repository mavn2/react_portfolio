import React from 'react';
import { Card, Row, Col, Image } from 'react-bootstrap'

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
            <article>
                <h3>{props.title}</h3>
                {props.text.map((p) => {return <p>{p}</p>})}
            </article>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );

};
