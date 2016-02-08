const React = require('react');
import css from '../css/statusIcon.css'

let StatusIcon = ({status, isLarge}) => {
  const style = {icon:{fontSize:'25px'}, iconLrg: {fontSize:'28px'}}
  let iconStyle = isLarge ? style.iconLrg: style.icon

  switch (status) {
    case 'approved':
      return (<div className={css.icon}><i className="fa fa-check" style={iconStyle} ></i></div>);
    case 'notStarted':
        return (<div className={css.icon}><i className="glyphicon glyphicon-unchecked" style={iconStyle} ></i></div>);
    case 'inProgress':
        return (<div className={css.icon}><i className="fa fa-clock-o" style={iconStyle} ></i></div>);
    default:
      return (<div className={css.icon} style={iconStyle}>?</div>);
  }
}
export default StatusIcon
