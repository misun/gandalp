import React from 'react';
import Header from './header';
import TopBar from './top_bar';

const MainBar = () => (

  <div className="main-header-topbar bg-img">
    <div className="main-header-subbar">
      <Header />
      <TopBar />
    </div>
  </div>
);

export default MainBar;
