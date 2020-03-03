import React from 'react';

import Card from 'react-bulma-components/lib/components/card';
import Heading from 'react-bulma-components/lib/components/heading';

import ItemStats from './ItemStats.jsx';

import '../../assets/styles/Card.sass';

function GalleryItem({ name, description, imgURL, ...otherProps }) {

  return (
    <Card>
      <Card.Image src={imgURL} alt={name} />
      <Card.Content>
        <Heading className="card-title" size={4}>
          {name}
        </Heading>
        <Heading className="card-description" size={5}>
          {description}
        </Heading>
      </Card.Content>
      <ItemStats { ...otherProps} />
    </Card>
  )

}

export default GalleryItem;