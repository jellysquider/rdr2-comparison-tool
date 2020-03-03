import { searchQueryActionTypes } from '../actionTypes';


export function getSearchResult(searchQuery) {
  return {
    type: searchQueryActionTypes.GET_SEARCH_RESULT,
    payload: searchQuery
  }
}