import { BenchConstants,
         receiveBenches,
         requestBenches,
        receiveBench } from '../actions/bench_actions';
import { FilterConstants } from '../actions/filter_actions';
import { fetchBenches,
         createBench } from '../util/bench_api_util';

const BenchesMiddleware = ({getState, dispatch}) => next => action => {
  const successBenches = data => dispatch(receiveBenches(data));
  const successBench = data => dispatch(receiveBench(data));

  switch(action.type){
    case BenchConstants.REQUEST_BENCHES:
      const filters = getState().filters;
      fetchBenches(filters, successBenches);
      return next(action);
    case FilterConstants.UPDATE_FILTER:
      dispatch(requestBenches());
      return next(action);
    case BenchConstants.CREATE_BENCH:
      createBench(action.bench, successBench);
      return next(action);
    default:
      return next(action);
  }
};

export default BenchesMiddleware;
