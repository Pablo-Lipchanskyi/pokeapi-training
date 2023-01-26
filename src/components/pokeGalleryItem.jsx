import React from 'react';
export const PokeGalleryItem = (props) => {
  return (
    <>
        {props.map((poke) => (
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