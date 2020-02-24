import React from 'react';

import GalleryItem from './GalleryItem/Container';

import { XMasonry, XBlock } from "react-xmasonry";

const Gallery = ({ weapons }) => {
  
  return (
    <div className="gallery-items" style={{ padding: "1.5rem" }}>
      <XMasonry>
        {
          weapons.map(category => (
            category.map(({id, ...otherWeaponProps}) => (
              <XBlock key={id}>
                <GalleryItem {...otherWeaponProps} />
              </XBlock>
            ))
          ))
        }
      </XMasonry>
    </div>
  );
}

export default Gallery;