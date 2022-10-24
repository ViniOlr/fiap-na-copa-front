import React from 'react';
import { FigureContent } from '../style/styled';

const Figure = (props)=> {
  return (
    <FigureContent>        
        <figure  id={props.id}>
          <img src={props.img} alt={props.alt} />
          <figcaption>{props.figcaption}</figcaption>
        </figure>
    </FigureContent>
  );
}

export default Figure;