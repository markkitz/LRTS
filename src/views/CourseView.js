const React = require('react');
const {connect} = require('react-redux');
import BlockMenu from "../components/BlockMenu"
let CourseView = ({title, courseCode}) => {
   let x ="sdfsdf sdf"
  return (<div>
            <div>{courseCode}</div>
          <h1>{title}</h1>
          <BlockMenu test={x} />
        </div>)
}
CourseView = connect( (state) => {
   let title = state.course.title
   let courseCode = state.course.courseCode
   return {title, courseCode}
})(CourseView)
export default CourseView
