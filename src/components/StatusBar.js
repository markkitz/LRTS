const React = require('react');
var classNames = require('classnames');
import css from '../css/statusBar.css'

const StatusBar = ({status, span, children}) => {
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
   case 'ready':
      title = "Ready";
      icon = <i className="fa fa-check" ></i>;
      barClass = css.approved;
      break;
  }
  let spanClass = null;
  if(span == 4) {
     spanClass = css.span4;
  }

 var barClasses = classNames(css.statusBar, css.statusBarSpan1, barClass, spanClass);

          return (<div className={barClasses}>
            <span className={css.title}>
              {title}
              {icon}
            </span>
            {children}
        </div>)
}
export default StatusBar;
