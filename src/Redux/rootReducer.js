// combines all of the reducers together

// store user state
import { combineReducers } from 'redux';

import { searchQueryReducer } from './searchQuery/sQReducer';
import { setItemsToCompareReducer } from './itemComparison/iCReducer';

const rootReducer = combineReducers({
  searchQueryReducer,
  setItemsToCompareReducer
});

export default rootReducer;