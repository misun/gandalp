import React from 'react';

import FilterForm from './filter_form';
import BusinessIndex from '../businesses/business_index';
import Map from '../map/map';

const Search = ({ benches, minSeating, maxSeating, updateFilter }) => (
  <div className="user-pane">
    <div className="left-half">
      <h5>Click Map to Add Bench!</h5>
      <Map
        benches={benches}
        updateFilter={updateFilter}
        singleBench={false}
      />
    </div>
    <div className="right-half">
      <FilterForm
        minSeating={minSeating}
        maxSeating={maxSeating}
        updateFilter={updateFilter}
      />
    <BusinessIndex benches={benches} />
    </div>
  </div>
);

export default Search;
