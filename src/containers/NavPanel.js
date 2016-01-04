const React = require('react');
const {connect} = require('react-redux');
var classNames = require('classnames');
import '../css/nav-panel.css'
let test = classNames({'selected' : true});
console.log(test);
//className={classNames('selected' : true)}
let NavPanel = ({currentForm}) => {
  return (
    <nav  className='navpnl'>
      <ul>
         <li className={classNames({'active' : currentForm == 'homeRoute'})} ><a href="#/home" ><i className="fa fa-lg fa-fw fa-home" ></i> Home</a></li>
         <li className={classNames({'active' : currentForm == 'viewtestRoute'})} ><a href="#/viewtest" ><i className="fa fa-lg fa-fw fa-flag" ></i> View Test</a></li>
      </ul>
    </nav>
  )
}
NavPanel = connect (
    (state) => {
      console.log('NavPanel', state);
        let currentForm = state.navigationReducer.routeName
        return {currentForm};
    }
)(NavPanel);
export default NavPanel;
