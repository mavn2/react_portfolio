import React from 'react';
import { Container, CardColumns } from 'react-bootstrap';
import Project from '../components/Project';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Array of projects is imported, keeping this file focused on the page
import projects from '../assets/projects';

// Using react-bootstrap's CardColumns component greatly simplifies the code for this page, replacing Rows/Cols I defined in original portfolio
// Each item component is a card that takes a project's info as props,
export default function Portfolio() {
  console.log(projects);
  return (
    <Container className="main">
      <Header page={'Portfolio'} />
      <CardColumns className="pb-5 pt-5">
        {projects.map((project) => (
          <Project
            name={project.name}
            src={project.src}
            git={project.git}
            live={project.live}
          />
        ))}
      </CardColumns>
      <Footer />
    </Container>
  );
}
