import React from 'react';
import '../css/blockMenu.css';
const BlockMenu =() => {
return (
  <ul className="blockMenu">
    <li className="blockMenuRow-L">
      <ul>
        <li className="selected">
          <a>
            <i className="fa fa-file"></i>
            <text>Course Packs</text>
          </a>
        </li>
      </ul>
    </li>
  </ul>)
}
export default BlockMenu;
