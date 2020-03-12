// combines all of the reducers together

// store user state
import { combineReducers } from 'redux'

import { searchQueryReducer } from './searchQuery/sQReducer'
import { updateItemsToCompareReducer } from './itemComparison/iCReducer'

const rootReducer = combineReducers({
  searchQueryReducer,
  updateItemsToCompareReducer,
})

export default rootReducer
