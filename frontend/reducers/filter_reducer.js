import { FilterConstants } from '../actions/filter_actions';
import merge from 'lodash/merge';

const FilterReducer = function(state = {bounds:{}}, action){
  switch(action.type){
    case FilterConstants.UPDATE_FILTER:
      return merge({}, state, {[action.filter]: action.value});
    default:
      return state;
  }
};

export default FilterReducer;
