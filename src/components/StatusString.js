const React = require('react');
   let StatusIcon = ({status}) => {
   switch (status) {
      case 'approved':
         return (<span>Approved</span>)
      case 'notStarted':
        return (<span>Not Started</span>)
      case 'inProgress':
        return (<span>In Progress</span>)
      case 'ready':
         return (<span>Ready</span>)
      case 'noChange':
         return (<span>No Change</span>)
      default:
         return (<span>[Unknown Status: {status}]</span>);
   }
}
export default StatusIcon
