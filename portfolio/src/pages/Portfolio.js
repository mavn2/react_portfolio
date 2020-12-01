import React from 'react';
import {Container, CardColumns } from 'react-bootstrap';
import Item from '../components/PortfolioItem';

// Using react-bootstrap's CardColumns component greatly simplifies the code for this page
export default function Portfolio(){
  return (
    <Container>
      <CardColumns>
        <Item />
      </CardColumns>
    </Container>
  );
};
