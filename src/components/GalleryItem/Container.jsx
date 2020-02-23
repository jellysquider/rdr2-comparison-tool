import React from 'react';
import Card from 'react-bulma-components/lib/components/card';
import Heading from 'react-bulma-components/lib/components/heading';

import ItemStats from './ItemStats.jsx';

import '../../assets/styles/Card.sass';


const GalleryItem = ({ weaponsType, weapon, description, imgURL, ...otherProps }) => {

  return (
    <Card className="card-item">
      <Card.Image src={imgURL} alt={weapon} />
      <Card.Content>
        <Heading className="card-title" size={4}>
          {weapon}
        </Heading>
        <Heading className="card-description" size={5}>
          {description}
        </Heading>
      </Card.Content>
      <ItemStats weaponsType={weaponsType} { ...otherProps} />
    </Card>
  )
}

export default GalleryItem;