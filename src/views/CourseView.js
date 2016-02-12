const React = require('react');
const {connect} = require('react-redux');
import BlockMenu from "../components/BlockMenu"
import css from '../css/courseView.css'
let CourseView = ({title, courseCode}) => {
  return (
   <div className={css.view}>
      <h1>{courseCode}</h1>
      <h2>{title}</h2>
      <BlockMenu />
   </div>)
}
CourseView = connect( (state) => {
   let title = state.course.title
   let courseCode = state.course.courseCode
   return {title, courseCode}
})(CourseView)
export default CourseView



// <symbol id="icon-class" viewBox="0 0 1412 1024">
// <title>class</title>
// <path class="path1" d="M791.851 564.652c16.109-0.623 31.743-1.020 46.669-1.41-30.327-35.906-49.342-81.63-49.342-132.345 0-113.727 92.241-205.962 206.005-205.962 17.794 0 34.881 2.984 51.381 7.305v-232.24h-957.215v656.027h555.663c26.868-43.211 72.513-88.544 146.839-91.375z"></path>
// <path class="path2" d="M995.183 283.113c84.534 0 153.044 68.546 153.044 153.086 0 84.535-68.51 153.124-153.044 153.124-84.577 0-153.129-68.589-153.129-153.124 0-84.539 68.551-153.086 153.129-153.086z"></path>
// <path class="path3" d="M1187.982 639.136c-103.078-3.851-177.129-0.94-192.8-0.158-15.634-0.861-89.843-3.692-193.038 0.158-116.357 4.162-146.569 137.96-146.569 137.96v245.76h117.535v-211.186h47.811v211.186h354.491v-211.186h41.953v211.186h117.382v-245.76c-0.042 0-30.249-133.719-146.765-137.96z"></path>
// <path class="path4" d="M56 739.31h553.656v90.741h-553.656v-90.741z"></path>
// </symbol>
