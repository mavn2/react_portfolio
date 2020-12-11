// Dependencies
import React from 'react';
import CenterCard from '../components/CenterCard'
import Footer from '../components/Footer'
import {Container, Row, Col} from 'react-bootstrap';

// Import image for about me
import headShot from "../assets/hShot.jpg"

// Text for about me
const aboutText = [
  "My earliest passions were books and music, art that allowed me to expand my horizons and experience, at least on some level, the world through others' eyes. I found my third passion in the internet. Nowhere else could I explore as easily, learn as readily, connect as eagerly. For a long time, I gave all credit to what I found there for shaping the person I became, but as the internet changed in the last decade, I have become more and more aware of how affected I was by the shape and function of the network itself.", 
  "Studying English in college, I focused on examining the ways in which form dictates the terms of our experience with content--is, really, content in itself. My interests in coding are the same: user experience, but more than that the structures that store, catalogue, and surface information to be experienced. I am interested in databases, in data analytics, in what we can learn from what our devices learn about us. In sum, I remain as much as love with learning as I have always been, eager to challenge myself and eager to find new ways to think and to create."
];

// Returns the landing/index page. Bio text, image, and assoc. alt attribute are sent to CenterCard as props.
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
          <CenterCard
            image={headShot}
            alt={"A picture where I don't look too uncomfortable."}
            title={"About Me"} 
            text={aboutText}
          >
          </CenterCard>
        </Col>
      </Row>
      <Footer />
    </Container>
  );
};

export default Home;
