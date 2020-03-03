import React from 'react';
import { connect } from 'react-redux';
import { XMasonry, XBlock } from "react-xmasonry";

import GalleryItem from './GalleryItem/Container';

import { setItemsToCompare } from '../Redux/itemComparison/iCActions';

function Gallery(props) {

  return (
    <div className="gallery-items" style={{ padding: "1.5rem" }}>
      <XMasonry>
        {
          props.searchResult.map(category => (
            category.map((weapon) => (
              <XBlock
                key={weapon.id}
                onClick={() => { props.onItemClick(weapon)}}
              >
                <GalleryItem {...weapon} />
              </XBlock>
            ))
          ))
        }
      </XMasonry>
    </div>
  );
}


function mapStateToProps(state) {
  return {
    searchResult: state.searchQueryReducer.searchResult,
    itemsToCompare: state.setItemsToCompareReducer.itemsToCompare
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onItemClick: (weapon) => {
      let currItem = weapon
      dispatch(setItemsToCompare(currItem))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Gallery);