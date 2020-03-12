import { itemComparisonActionTypes } from '../actionTypes'

export function updateItemsToCompare(currItem) {
  // console.log("action", currItem)
  return {
    type: itemComparisonActionTypes.UPDATE_ITEMS_TO_COMPARE,
    payload: currItem,
  }
}
