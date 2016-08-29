import { BenchConstants } from '../actions/bench_actions';
import merge from 'lodash/merge';

const BenchesReducer = function(state = {}, action){
  let newState;
  switch(action.type){
    case BenchConstants.RECEIVE_BENCHES:
      return action.benches;
    case BenchConstants.RECEIVE_BENCH:
      newState = merge({}, state, {[action.bench.id]: action.bench});
      return newState;
    default:
      return state;
  }
};

export default BenchesReducer;
