import { searchQueryActionTypes } from '../actionTypes';
import WEAPON_STATS from '../../assets/data/weapons.stats';

const INITIAL_STATE = {
  searchQuery: '',
  searchResult: WEAPON_STATS.map(weapon => (
    weapon
  ))
}

export const searchQueryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case searchQueryActionTypes.GET_SEARCH_RESULT:
      return {
        ...state,
        searchQuery: action.payload,
        searchResult: WEAPON_STATS.filter(weapon => (
          weapon.name.toLowerCase().includes(action.payload.toLowerCase())
        ))
      }
      
    default:
      return state;
  }
}
