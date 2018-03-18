import React from 'react';
import * as MD from 'react-icons/lib/md';
import SearchMainContainer from '../search/search_main_container';

const TopBar = () => (

  <div className="main-bar">
    <div className="main-bar-inner">
      <div className="main-logo">
        <div className="logo-img" />
      </div>

      <SearchMainContainer />

    </div>
  </div>
);

export default TopBar;
