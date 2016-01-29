const React = require('react');
import '../css/statusIcon.css'
let StatusIcon = ({status, isLarge}) => {

  const style = {icon:{fontSize:'25px'}, iconLrg: {fontSize:'28px'}}

  let iconStyle = isLarge ? style.iconLrg: style.icon


  switch (status) {
    case 'approved':
      return (<div className='statusIcon'><i className="fa fa-check" style={iconStyle} ></i></div>);
    case 'notStarted':
        return (<div className='statusIcon'><i className="glyphicon glyphicon-unchecked" style={iconStyle} ></i></div>);
    case 'inProgress':
        return (<div className='statusIcon'><i className="fa fa-clock-o" style={iconStyle} ></i></div>);
    default:
      return (<div className='statusIcon' style={iconStyle}>?</div>);
  }
}
export default StatusIcon
