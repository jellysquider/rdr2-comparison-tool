import { searchQueryActionTypes } from '../actionTypes';
import WEAPON_STATS from '../../assets/data/weapons.stats';

const INITIAL_STATE = {
  searchQuery: '',
  searchResult: WEAPON_STATS.map(weapon => (weapon))
}

export const searchQueryReducer = (state = INITIAL_STATE, action) => {

  // if (action.payload) {
  //   var myRe = /\w+\W?\w?\s\w*/i;
  //   console.log("search matched", action.payload.match(/\w+\W?\w?\s?\w*/ig)[0])
  //   console.log("search exec", myRe.exec(action.payload))
  // }
  let myRe = /\w+\W?\w?\s\w*/i;

  switch (action.type) {

    case searchQueryActionTypes.GET_SEARCH_RESULT:
      return {
        ...state,
        searchQuery: action.payload,
        searchResult: WEAPON_STATS.filter(weapon => (
          weapon.name.toLowerCase().replace(/-|'/g, '').includes(action.payload.replace(/-|'/g, '').toLowerCase())
        ))
      }
      
    default:
      return state;
  }
}
