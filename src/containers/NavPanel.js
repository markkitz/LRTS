const React = require('react');
const {connect} = require('react-redux');
var classNames = require('classnames');
let test = classNames({'selected' : true});
import Menu from 'material-ui/lib/menus/menu'
import MenuItem from 'material-ui/lib/menus/menu-item'
import Home from 'material-ui/lib/svg-icons/action/home';
import Book from 'material-ui/lib/svg-icons/av/library-books';
import Course from "../icons/CourseIcon.js"
import css from '../css/navPanel.css'
import Colors from 'material-ui/lib/styles/colors';
//className={classNames('selected' : true)}
let NavPanel = ({currentRoute}) => {
  return (
    <nav className={css.widget}>
      <MenuItem primaryText="Home" className={classNames({'selected': currentRoute=='homeRoute'})} leftIcon={<Home/>} href="#/home" focusState={"focused"}/>
      <MenuItem primaryText="Courses" className={classNames({'selected': currentRoute=='coursesRoute'})}  leftIcon={<Course style={{position:"absolute"}} />}  linkButton={true} href="#/courses" />
      <MenuItem primaryText="Course Packs" className={classNames({'selected': currentRoute=='coursePacksRoute'})}  leftIcon={<Book color={Colors.deepPurple900} />}  linkButton={true} href="#/coursepacks" />
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
//did-flip:true;position:relative;font-size:24px;display:inline-block;transition:all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;color:#2196f3;-webkit-user-select:none;
//did-flip:true;display:block;height:24px;width:24px;transition:all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;position:absolute;top:0;margin:12px;color:#757575;fill:#3399cc;left:4px;-webkit-user-select:none;
