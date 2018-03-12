import React from 'react';
import * as MD from 'react-icons/lib/md';

const MainBar = () => (

  <div className="main-bar">
    <div className="main-bar-inner">
      <div className="main-logo">
        <a href="#">Selp</a>
      </div>

      <div className="search-wrap">

        <div className="search">
          <div className="biz-search">
            <span className="input-label">Find</span>
            <span className="input-text">
                <input placeholder="burgers, pizzas, pasta..." value="" className="" />
            </span>
          </div>

          <div className="loc-search">
            <span className="input-label">Near</span>
            <span className="input-text">
                <input placeholder="Bryan Park, Time Sqaure..." value="" className="" />
            </span>
          </div>
        </div>

        <div className="search-icon">
          <MD.MdSearch size={30} color='white'/>
        </div>

      </div>


    </div>
  </div>
);

export default MainBar;
