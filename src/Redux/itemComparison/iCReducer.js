import { itemComparisonActionTypes } from '../actionTypes';

const INITIAL_STATE = {
  itemsToCompare: new Set()
}

export const setItemsToCompareReducer = (state = INITIAL_STATE, action) => {

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