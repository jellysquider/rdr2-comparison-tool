import React from 'react';

import { connect } from 'react-redux';

import Container from 'react-bulma-components/lib/components/container';
import Heading from 'react-bulma-components/lib/components/heading';

import GalleryContainer from '../ItemsGallery/GalleryContainer';
import SearchBar from '../SearchBar';
import CompareButton from '../CompareButton';

function DisplayItemsPage(props) {

  // generate an array of selected weapons' abbreviations
  const compareQuery = props.itemsToCompare.map(item => (
    item.type.concat(item.id.toString())
  ))

  return (
    <Container>
      <Heading>
        RDR2
      </Heading>
      <SearchBar />
      <GalleryContainer />
      {
        // show Compare Button when there are more than 2 items to compare
        props.itemsToCompare.length >= 2
        &&
        // pass the URL by joining array elements with a hyphen in one string
        <CompareButton link={compareQuery.join("-").toLowerCase()} />
      }
    </Container>
  )
}

// retrieve the array of selected weapons from the redux store
function mapStateToProps(state) {
  return {
    itemsToCompare: state.updateItemsToCompareReducer.itemsToCompare
  }
}

export default connect(mapStateToProps)(DisplayItemsPage);