import React, { Component } from 'react';
import WEAPONS_STATS from '../assets/data/weapons.stats';

import GalleryItem from './GalleryItem/Container';

import { XMasonry, XBlock } from "react-xmasonry";

class Gallery extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      galleryItems: WEAPONS_STATS
    };

  }

  render() {

    const { galleryItems } = this.state;
 
    return (
      <div className="gallery-items" style={{ padding: "1.5rem" }}>
         <XMasonry>
        {
          galleryItems.map(({ id, weaponsType, items }) => (
            items.map(({ id, ...otherItemProps } )=> (
              <XBlock key={id}>
                <GalleryItem id={id} weaponsType={weaponsType} {...otherItemProps} />
              </XBlock>
            ))
          ))
              
        }
        </XMasonry>
      </div>
    );
  }
}

export default Gallery;