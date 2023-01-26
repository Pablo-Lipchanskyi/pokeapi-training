import {PokeGalleryItem} from "./pokeGalleryItem"
import React from 'react';

const PokeGallery = ({ ...props }) => {
  return (
    <ul>
      <PokeGalleryItem {...props} />
    </ul>
  );
};

export default PokeGallery;