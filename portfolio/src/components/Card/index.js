import React from 'react';
import { Card, Row, Col, } from 'react-bootstrap'

//Export a card formatted for use on the landing page
export default function CenterCard(props){
  return (
    <Card className="mb-3 border-0">
      <Card.Body>
        <Row noGutters>
          <Col md={3}>
            <img className="img-fluid card-img" src={props.image} alt={props.alt}></img>
          </Col>
          <Col md={9}>
            <Card.Title>{props.title}</Card.Title>
            {props.text.map((p) => {return <Card.Text>{p}</Card.Text>})}
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );

};
