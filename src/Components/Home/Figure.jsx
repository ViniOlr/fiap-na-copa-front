import React from 'react';

const Figure = (props)=> {
  return (
    <figure id={props.id}>
        <img src={props.img} alt={props.alt} />
        <figcaption>{props.figcaption}</figcaption>
    </figure>
  );
}

export default Figure;