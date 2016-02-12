const React = require("react")
import Widget from '../../../components/Widget.js'
import People from 'material-ui/lib/svg-icons/social/people'
import Avatar from 'material-ui/lib/avatar'
import css from '../../../css/coursePackUserWidget.css'
import styles from 'material-ui/lib/styles'
const colors = styles.Colors
const CoursePackUserWidget = () => {

   return (
      <Widget heading="Course Pack Users">
      <div  className={css.headingDiv}>Course Pack Authors </div>
      <div className={css.userDiv}>
         <Avatar style={{fontSize:"13px"}} backgroundColor={colors.lightBlue900} size={30}>MK</Avatar>
         <span style={{marginLeft:"10px"}}>Mark Kitz</span>
      </div>
      <div className={css.userDiv}>
         <Avatar style={{fontSize:"13px"}} backgroundColor={colors.orangeA700} size={30}>EE</Avatar>
         <span style={{marginLeft:"10px"}}>Ed Eyln</span>
      </div>
      <div  className={css.headingDiv}>Program Leadership </div>
      <div className={css.userDiv}>
         <Avatar style={{fontSize:"13px"}} backgroundColor={colors.brown900} size={30}>HW</Avatar>
         <span style={{marginLeft:"10px"}}>Helen Wladyka</span>
      </div>
      </Widget>)
}
export default CoursePackUserWidget
