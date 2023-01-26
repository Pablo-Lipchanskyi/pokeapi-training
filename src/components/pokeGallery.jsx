import {PokeGalleryItem} from "./pokeGalleryItem"
import React from 'react';

const PokeGallery = ({ ...pokemon }) => {
  return (
    <ul>
      <PokeGalleryItem {...pokemon} />
    </ul>
  );
};

export default PokeGallery;