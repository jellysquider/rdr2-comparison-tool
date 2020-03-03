import { itemComparisonActionTypes } from '../actionTypes';
import { Set } from 'immutable';

const INITIAL_STATE = {
  itemsToCompare: new Set()
}

export const setItemsToCompareReducer = (state = INITIAL_STATE, action) => {

  // console.log("arr", state.itemsToCompare)
  // console.log("obj", action.payload)
  switch (action.type) {
    case itemComparisonActionTypes.SET_ITEMS_TO_COMPARE:
      return {
        ...state,
        itemsToCompare: state.itemsToCompare.add(action.payload)
      }
    default:
      return state;
  }
}
