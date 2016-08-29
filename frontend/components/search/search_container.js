import { connect } from 'react-redux';
import Search from './search';
import { requestBenches } from '../../actions/bench_actions';
import { updateFilter } from '../../actions/filter_actions';

const mapStateToProps = state => ({
  benches: state.benches
});

const mapDispatchToProps = dispatch => ({
  requestBenches: () => dispatch(requestBenches()),
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
