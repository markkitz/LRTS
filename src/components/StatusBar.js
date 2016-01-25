const React = require('react');
import '../css/statusBar.css'
var classNames = require('classnames');
const StatusBar = ({status}) => {
  let title = "";
  let icon = <i></i>;
  let barClass = "";
  switch (status) {
    case 'approved':
      title = "Approved";
      icon = <i className="fa fa-check" ></i>;
      barClass = "statusBar-approved";
      break;
    case 'notStarted':
      title = "Not Started";
      icon = <i className="glyphicon glyphicon-unchecked" ></i>;
      barClass = "statusBar-notStarted";
      break;
    case 'inProgress':
    title = "In Progress";
      icon = <i className="fa fa-clock-o" ></i>;
      barClass = "statusBar-waiting";
      break;
  }

 var barClasses = classNames('statusBar', 'statusBar-span1', barClass);

          return (<div className={barClasses}>
            <span className="statusBar-title">
              {title}
              {icon}
            </span>
        </div>)
}
export default StatusBar;
