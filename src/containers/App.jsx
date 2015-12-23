const React = require('react');
import CourseInfoForm  from './CourseInfoForm.jsx'
import PrintDetailsForm  from './PrintDetailsForm.jsx'
const App = React.createClass({

	visibleForm: 'CourseInfoForm',
	render: function(){
		return(
		<div>
			<CourseInfoForm  />
			<PrintDetailsForm />
		</div>);
	}	
});

export default App;

