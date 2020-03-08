import React from 'react';
import { connect } from 'react-redux';
import { XMasonry, XBlock } from "react-xmasonry";

import GalleryItem from './GalleryItem';

import { updateItemsToCompare } from '../../Redux/itemComparison/iCActions';

function GalleryContainer(props) {
  
  return (
    <div className="gallery-items" style={{ padding: "1.5rem" }}>
      <XMasonry>
        {
          // iterate over searchResult array and populate masonry grid with items
          props.searchResult.map(weapon => (
            <XBlock
              key={weapon.id}
              onClick={() => props.onItemClick(weapon)}
            >
              {/* Item card that lists weapon properties */}
              <GalleryItem {...weapon} />
            </XBlock>
          ))
        }
      </XMasonry>
    </div>
  )
}

// retrieve searchResult and itemsToCompare array from the redux store
function mapStateToProps(state) {
  return {
    searchResult: state.searchQueryReducer.searchResult,
    itemsToCompare: state.updateItemsToCompareReducer.itemsToCompare
  }
}

// dispatch an action to update itemsToCompare array
function mapDispatchToProps(dispatch) {
  return {
    onItemClick: (weapon) => {
      let currItem = weapon
      dispatch(updateItemsToCompare(currItem))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(GalleryContainer);