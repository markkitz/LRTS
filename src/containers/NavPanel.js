const React = require('react');
const {connect} = require('react-redux');
var classNames = require('classnames');
import '../css/nav-panel.css'
let test = classNames({'selected' : true});
console.log(test);
//className={classNames('selected' : true)}
let NavPanel = ({currentEditForm}) => {
  return (
    <nav  className='navpnl'>
      <ul>
         <li className={classNames({'active' : currentEditForm == 'homeRoute'})} ><a href="#/home" ><i className="fa fa-lg fa-fw fa-home" ></i> Home</a></li>
         <li className={classNames({'active' : currentEditForm == 'viewtestRoute'})} ><a href="#/viewtest" ><i className="fa fa-lg fa-fw fa-flag" ></i> View Test</a></li>
         <li className={classNames({'active' : currentEditForm == 'coursePacksRoute'})} ><a href="#/coursepacks" ><i className="fa fa-lg fa-fw fa-book" ></i>Course Packs</a></li>
      </ul>
    </nav>
  )
}
NavPanel = connect (
    (state) => {
      console.log('NavPanel', state);
        let currentEditForm = state.navigationReducer.routeName
        return {currentEditForm};
    }
)(NavPanel);
export default NavPanel;
