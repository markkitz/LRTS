const React = require("react")
import Widget from '../../../components/Widget.js'
import Program from 'material-ui/lib/svg-icons/action/account-balance'
const CoursePackProgramWidget = () => {
   const style={paddingTop:"10px", fontSize:"18px",  verticalAlign:"top"}
   return (
      <Widget heading="Program">
         <div> <Program /> <span  style={style}> Finance </span></div>
      </Widget>
      )
}
export default CoursePackProgramWidget
