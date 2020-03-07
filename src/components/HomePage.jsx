import React from 'react';

import { connect } from 'react-redux';

import Container from 'react-bulma-components/lib/components/container';
import Heading from 'react-bulma-components/lib/components/heading';

import Gallery from './Gallery';
import SearchBox from './SearchBox';
import CompareButton from './CompareButton';

function HomePage(props) {

  console.log("HOMEPAGE", props.itemsToCompare)
  props.itemsToCompare.map(item => console.log("MAP", item.type, item.id))

  
  const compareQuery = props.itemsToCompare.map(item => (item.type.concat(item.id.toString())))

  return (
    <Container>
      <Heading>
        RDR2
      </Heading>
      <SearchBox />
      <Gallery />
      {
        props.itemsToCompare.length >= 2
        &&
        <CompareButton link={compareQuery.join("-").toLowerCase()}/>
       
      }
    </Container>
  )
}

function mapStateToProps(state) {
  // console.log("STATE", state)
  return {
    itemsToCompare: state.updateItemsToCompareReducer.itemsToCompare
  }
}

export default connect(mapStateToProps)(HomePage);