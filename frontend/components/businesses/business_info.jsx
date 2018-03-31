import React from 'react';

const BusinessInfo = ({business}) => {
  return (
    <div className="biz-info">
      <h2>Hours</h2>
      <table className="table table-simple hours-table">
         <tbody>
            <tr>
               <th scope="row">Mon</th>
               <td>
                  <span className="nowrap">{business.monday}</span>
               </td>
               <td className="extra">
               </td>
            </tr>
            <tr>
               <th scope="row">Tue</th>
               <td>
                  <span className="nowrap">{business.monday}</span>
               </td>
               <td className="extra">
               </td>
            </tr>
            <tr>
               <th scope="row">Wed</th>
               <td>
                  <span className="nowrap">{business.monday}</span>
               </td>
               <td className="extra">
               </td>
            </tr>
            <tr>
               <th scope="row">Thu</th>
               <td>
                  <span className="nowrap">{business.monday}</span>
               </td>
               <td className="extra">
               </td>
            </tr>
            <tr>
               <th scope="row">Fri</th>
               <td>
                  <span className="nowrap">{business.monday}</span>
               </td>
               <td className="extra">
               </td>
            </tr>
            <tr>
               <th scope="row">Sat</th>
               <td>
                  <span className="nowrap">{business.monday}</span>
               </td>
               <td className="extra">
               </td>
            </tr>
            <tr>
               <th scope="row">Sun</th>
               <td>
                  <span className="nowrap">{business.monday}</span>
               </td>
               <td className="extra">
               </td>
            </tr>
         </tbody>
      </table>
      <div className="biz-more-info">
        <ul><h2>More business info</h2>
          <li>
            <label>Phone : {business.phone}</label>
          </li>
          <li>
            <label>Address : {business.address}</label>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default BusinessInfo;
