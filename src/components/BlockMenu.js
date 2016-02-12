import React from 'react';
import css from '../css/blockMenu.css';
const BlockMenu =({test}) => {
return (
  <ul className={css.blockMenu}>
    <li className={css.blockMenuRow}>
      <ul>
      <li>
        <a>
          <i className="fa fa-file"></i>
          <text>Course Outline</text>
        </a>
      </li>
        <li   className={css.selected}>
          <a>
            <i className="fa fa-file-powerpoint-o"></i>
            <text>Course Packs {test}</text>
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
