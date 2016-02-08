const React = require('react');
var classNames = require('classnames');
import css from '../css/statusBar.css'
console.log("CSS", css)

const StatusBar = ({status}) => {
  let title = "";
  let icon = <i></i>;
  let barClass = "";
  switch (status) {
    case 'approved':
      title = "Approved";
      icon = <i className="fa fa-check" ></i>;
      barClass = css.approved;
      break;
    case 'notStarted':
      title = "Not Started";
      icon = <i className="glyphicon glyphicon-unchecked" ></i>;
      barClass = css.notStarted;
      break;
    case 'inProgress':
    title = "In Progress";
      icon = <i className="fa fa-clock-o" ></i>;
      barClass = css.waiting;
      break;
  }

 var barClasses = classNames(css.statusBar, css.statusBarSpan1, barClass);

          return (<div className={barClasses}>
            <span className={css.title}>
              {title}
              {icon}
            </span>
        </div>)
}
export default StatusBar;
