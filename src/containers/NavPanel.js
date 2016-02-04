const React = require('react');
const {connect} = require('react-redux');
var classNames = require('classnames');
import '../css/nav-panel.css'
let test = classNames({'selected' : true});
import Menu from 'material-ui/lib/menus/menu'
import MenuItem from 'material-ui/lib/menus/menu-item'
import Home from 'material-ui/lib/svg-icons/action/home';
import Delete from 'material-ui/lib/svg-icons/action/delete';
console.log(test);
//className={classNames('selected' : true)}
let NavPanel = ({currentRoute}) => {
  return (

    <nav  className='navpnl'>
      <MenuItem primaryText="Home" className={classNames({'selected': currentRoute=='homeRoute'})} leftIcon={<Home/>} href="#/home" focusState={"focused"}/>
      <MenuItem primaryText="Course Packs" className={classNames({'selected': currentRoute=='coursePacksRoute'})}  leftIcon={<Delete />}  linkButton={true} href="#/coursepacks" />
    </nav>
  )
}
NavPanel = connect (
    (state) => {
      console.log('NavPanel', state);
        let currentRoute = state.navigationReducer.routeName
        return {currentRoute};
    }
)(NavPanel);
export default NavPanel;
