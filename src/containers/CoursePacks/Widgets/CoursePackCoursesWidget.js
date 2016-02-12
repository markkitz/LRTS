const React = require("react")
import Widget from '../../../components/Widget.js'
import CourseIcon from '../../../icons/CourseIcon'
import css from '../../../css/coursePackCoursesWidget.css'
const CoursePackCoursesWidget = () => {
   const style={paddingTop:"0", fontSize:"16px",  verticalAlign:"top"}
   return (
      <Widget heading="Courses Using This Course Pack">
         <div> <CourseIcon style={{fontSize:"28px"}}  /> <span  style={style}> DMIT1007 </span></div>
         <div> <CourseIcon style={{fontSize:"28px"}}  /> <span  style={style}> MMKK1055 </span></div>
      </Widget>
      )
}
export default CoursePackCoursesWidget
