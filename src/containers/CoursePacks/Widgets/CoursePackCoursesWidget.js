const React = require("react")
import Widget from '../../../components/Widget.js'
import Course from 'material-ui/lib/svg-icons/action/account-balance'
import css from '../../../css/coursePackCoursesWidget.css'
const CoursePackCoursesWidget = () => {
   const style={paddingTop:"10px", fontSize:"18px",  verticalAlign:"top"}
   return (
      <Widget heading="Courses Using This Course Pack">
         <div> <Course /> <span  style={style}> DMIT1007 </span></div>
      </Widget>
      )
}
export default CoursePackCoursesWidget
