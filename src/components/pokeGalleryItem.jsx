import React from 'react';
export const PokeGalleryItem = (pokemon) => {
  return (
    <>
        {pokemon.map((poke) => (
            <li>
            <h2>
                Product - {poke.name}
            </h2>
            <p>
                url - {poke.url}
            </p>
            </li>
            ))}
      </>
  )
}