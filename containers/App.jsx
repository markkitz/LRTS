const React = require('react');
import CourseInfoForm  from '../components/CourseInfoForm.jsx'
import PrintDetailsForm  from '../components/PrintDetailsForm.jsx'
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

