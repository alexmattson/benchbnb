import React from 'react';
import BenchIndex from './bench_index';
import BenchMap from './bench_map';

const Search = ({requestBenches, benches}) => (
  <div>
    <BenchMap />
    <BenchIndex requestBenches={requestBenches} benches={benches}/>
  </div>
);

export default Search;
