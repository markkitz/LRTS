const React = require('react');
import FontIcon from 'material-ui/lib/font-icon';
import Colors from 'material-ui/lib/styles/colors';
const CourseIcon = ({style}) => {
   return (
      <FontIcon style={style} className="icon-course" color={Colors.blue500}  />
   )
}
export default CourseIcon
