import React from 'react';
import Card  from 'react-bootstrap/Card';

// Export a card for displaying projects, for portfolio page/other uses
export default function Item(props){
  return(
      <Card className="mb-3">
        <Card.Header className="pHeader">
          <h4>{props.Name}</h4>
        </Card.Header>
        <img src={props.src} alt={props.alt}/>
        <Card.Footer>
         <Card.Link href={props.git}> Repository</Card.Link>
         <Card.Link href={props.src}>Live</Card.Link>
        </Card.Footer>
      </Card>
  );
};