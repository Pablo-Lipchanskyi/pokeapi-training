import React from 'react';
export const PokeGalleryItem = (...pokemon) => {
  return (
    <>
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
      </>
  )
}