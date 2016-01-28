const React = require('react');
let StatusIcon = ({status}) => {
  switch (status) {
    case 'approved':
      return (<div className='coursePackTerm-divIcon'><i className="fa fa-check" ></i></div>);
    case 'notStarted':
        return (<div className='coursePackTerm-divIcon'><i className="glyphicon glyphicon-unchecked" ></i></div>);
    case 'inProgress':
        return (<div className='coursePackTerm-divIcon'><i className="fa fa-clock-o" ></i></div>);
    default:
      return (<div className='coursePackTerm-divIcon'></div>);
  }
}
export default StatusIcon
