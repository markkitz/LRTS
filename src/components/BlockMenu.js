import React from 'react';
import '../css/blockMenu.css';
const BlockMenu =() => {
return (
  <ul className="blockMenu">
    <li className="blockMenuRow-L">
      <ul>
      <li>
        <a>
          <i className="fa fa-file"></i>
          <text>Course Outline</text>
        </a>
      </li>
        <li   className="selected">
          <a>
            <i className="fa fa-file-powerpoint-o"></i>
            <text>Course Packs</text>
          </a>
        </li>
        <li>
          <a>
            <i className="fa fa-shopping-cart"></i>
            <text>Student Resources</text>
          </a>
        </li>
      </ul>
    </li>
  </ul>)
}
export default BlockMenu;
