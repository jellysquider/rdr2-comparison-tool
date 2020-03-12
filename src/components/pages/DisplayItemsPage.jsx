import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'

import Container from 'react-bulma-components/lib/components/container'
import Heading from 'react-bulma-components/lib/components/heading'

import GalleryContainer from '../Gallery/GalleryContainer'
import SearchBar from '../SearchBar'
import CompareButton from '../CompareButton'
import Header from '../Header'

function DisplayItemsPage(props) {
  // generate an array of selected weapons' abbreviations
  const compareQuery = props.itemsToCompare.map(item =>
    item.type.concat(item.id.toString()),
  )

  return (
    <Container>
      <Header header="RDR2 Weapons" />
      <Heading subtitle size={4} style={{ textAlign: 'center' }}>
        select at least 2 weapons to compare them
      </Heading>
      <SearchBar />
      <GalleryContainer />
      {// show Compare Button when there are more than 2 items to compare
      props.itemsToCompare.length >= 2 && (
        // pass the URL by joining array elements with a hyphen in one string
        <CompareButton link={compareQuery.join('-').toLowerCase()} />
      )}
    </Container>
  )
}

// retrieve the array of selected weapons from the redux store
function mapStateToProps(state) {
  return {
    itemsToCompare: state.updateItemsToCompareReducer.itemsToCompare,
  }
}

DisplayItemsPage.propTypes = {
  itemsToCompare: PropTypes.object.isRequired,
  compareQuery: PropTypes.string.isRequired,
}

export default connect(mapStateToProps)(DisplayItemsPage)
