// Dependencies
import React from 'react';
import { Row, Col} from 'react-bootstrap';

// Import Resume
import resume from "../../assets/Resume.pdf"

//  Exports a row containing contact info used on several pages
// Since content should be consistent, defined here rather then entered as props
export default function Footer(){
  return(
    <Row className="foot">
      <Col sm={2}>
        <h5 className="text-center">
          <a href="https://github.com/mavn2" className="card-link" rel="noreferrer" target="_blank">
            Github
          </a>
        </h5>
      </Col>
      <Col sm={2}>
        <h5 className="text-center">
          <a href="https://www.linkedin.com/in/max-nicolai/" className="card-link" rel="noreferrer" target="_blank">
            LinkedIn
          </a>
        </h5>
      </Col>
      <Col sm={2}>
        <h5 className="text-center">
          <a href="assets/Resume.pdf" className ="card-link" target="_blank">
            Resume
          </a>
        </h5>
      </Col>
      <Col sm={2}>
        <h5 className="text-center">
          (206) 450-1913
        </h5>
      </Col>
      <Col sm={2}>
        <h5 className="text-center">
          maxvnicolai@gmail.com
        </h5>
      </Col>
    </Row>
  );
};
