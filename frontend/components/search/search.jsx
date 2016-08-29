import React from 'react';
import BenchIndex from './bench_index';
import BenchMap from './bench_map';

const Search = ({requestBenches,
                 updateFilter,
                 benches}) => (
  <div>
    <BenchIndex requestBenches={requestBenches}
                benches={benches} />
    <BenchMap updateFilter={updateFilter}
              benches={benches} />
  </div>
);

export default Search;
