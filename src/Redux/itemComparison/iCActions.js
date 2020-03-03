import { itemComparisonActionTypes } from '../actionTypes';

export function setItemsToCompare(currItem) {
  // console.log("action", currItem)
  return {
    type: itemComparisonActionTypes.SET_ITEMS_TO_COMPARE,
    payload: currItem
  }
}