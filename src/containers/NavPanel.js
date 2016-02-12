const React = require('react');
const {connect} = require('react-redux');
var classNames = require('classnames');
let test = classNames({'selected' : true});
import Menu from 'material-ui/lib/menus/menu'
import MenuItem from 'material-ui/lib/menus/menu-item'
import Home from 'material-ui/lib/svg-icons/action/home';
import Book from 'material-ui/lib/svg-icons/av/library-books';
import Course from 'material-ui/lib/svg-icons/action/account-balance'
import css from '../css/navPanel.css'
//className={classNames('selected' : true)}
let NavPanel = ({currentRoute}) => {
  return (
    <nav className={css.widget}>
      <MenuItem primaryText="Home" className={classNames({'selected': currentRoute=='homeRoute'})} leftIcon={<Home/>} href="#/home" focusState={"focused"}/>
      <MenuItem primaryText="Courses" className={classNames({'selected': currentRoute=='coursesRoute'})}  leftIcon={<Course color="#4285f4" />}  linkButton={true} href="#/courses" />
      <MenuItem primaryText="Course Packs" className={classNames({'selected': currentRoute=='coursePacksRoute'})}  leftIcon={<Book color="#3399cc" />}  linkButton={true} href="#/coursepacks" />
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
