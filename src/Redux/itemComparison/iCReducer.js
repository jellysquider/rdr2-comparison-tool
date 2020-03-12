import { itemComparisonActionTypes } from '../actionTypes'

const INITIAL_STATE = {
  itemsToCompare: [],
}

export const updateItemsToCompareReducer = (state = INITIAL_STATE, action) => {
  const copyOfItemsToCompare = state.itemsToCompare.slice()
  switch (action.type) {
    case itemComparisonActionTypes.UPDATE_ITEMS_TO_COMPARE:
      // includes returns a boolean
      if (state.itemsToCompare.includes(action.payload)) {
        copyOfItemsToCompare.splice(
          state.itemsToCompare.indexOf(action.payload),
          1,
        )
        return {
          ...state,
          itemsToCompare: copyOfItemsToCompare,
        }
      } else {
        copyOfItemsToCompare.push(action.payload)
        return {
          ...state,
          itemsToCompare: copyOfItemsToCompare,
        }
      }
    default:
      return state
  }
}
