import React from 'react';
import {Container, CardColumns } from 'react-bootstrap';
import Item from '../components/PortfolioItem';

// Array of projects is imported, keeping this file focused on the page
import projects from '../assets/projects'

// Using react-bootstrap's CardColumns component greatly simplifies the code for this page, replacing Rows/Cols I defined in original portfolio
// Each item component is a card that takes a project's info as props, 
export default function Portfolio(){
  console.log(projects)
  return (
    <Container>
      <CardColumns>
        {projects.map((project) => (
          <Item
            name={project.name}
            src={project.src}
            git={project.git}
            live={project.live}
          />
        ))}
      </CardColumns>
    </Container>
  );
};
