import React from 'react';
import { Row, Col } from 'react-bootstrap';

export default function Header({ page }) {
  return (
    <Row className="justify-content-start">
      <Col md className="head">
        <h2>{page}</h2>
      </Col>
    </Row>
  );
}
