import React from 'react';

const BusinessItemDetail = ({ business}) => (
  <ul>
    <li>{ business.name }</li>
    <li>{ business.price_range }</li>
    <li>{ business.category }</li>
    <li>{ business.address }</li>
    <li>{ business.phone }</li>
    <li>{ business.monday }</li>
    <li>{ business.tuesday }</li>
    <li>{ business.wednesday }</li>
    <li>{ business.thursday }</li>
    <li>{ business.friday }</li>
    <li>{ business.saturday }</li>
    <li>{ business.sunday }</li>
  </ul>
);

export default BusinessItem;
