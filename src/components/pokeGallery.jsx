
import React from 'react';

const PokeGallery = (pokemon) => {
  return (
    <ul>
      {pokemon.map(({name,url}) => (
            <li key={name}>
            <h2>
                Product - {name}
            </h2>
            <p>
                url - {url}
            </p>
            </li>
            ))}
    </ul>
  );
};

export default PokeGallery;