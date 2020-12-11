import React from 'react';

// Takes an array as a prop and returns a list w/ array content as items
export default function List({ array }) {
  return (
    <ul>
      {array.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}
