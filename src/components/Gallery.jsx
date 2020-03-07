import React from 'react';
import { connect } from 'react-redux';
import { XMasonry, XBlock } from "react-xmasonry";

import GalleryItem from './GalleryItem/Container';

import { updateItemsToCompare } from '../Redux/itemComparison/iCActions';

function Gallery(props) {

  console.log("GALLERY", props.itemsToCompare)
  
  return (
    <div className="gallery-items" style={{ padding: "1.5rem" }}>
      {/* {props.searchResult.map(category => (
        category.map((weapon) => (
          <GalleryItem  key={weapon.id} weapon={weapon} />
        ))
      ))
      } */}

      <XMasonry>
        {
          props.searchResult.map(weapon => (
            <XBlock
              key={weapon.id}
              onClick={() => props.onItemClick(weapon)}
            >
              <GalleryItem {...weapon} />
            </XBlock>
          ))
        }
      </XMasonry>
    </div>
  );
}


function mapStateToProps(state) {
  return {
    searchResult: state.searchQueryReducer.searchResult,
    itemsToCompare: state.updateItemsToCompareReducer.itemsToCompare
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onItemClick: (weapon) => {
      let currItem = weapon
      dispatch(updateItemsToCompare(currItem))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Gallery);