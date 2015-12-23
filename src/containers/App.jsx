const React = require('react');
import CourseInfoForm  from './CourseInfoForm.jsx'
import PrintDetailsForm  from './PrintDetailsForm.jsx'
import MenuBarContainer from './MenuBarContainer.jsx'
import UploadForm from './UploadForm.jsx'
const App = React.createClass({

	visibleForm: 'CourseInfoForm',
	render: function(){
		return(
		<div>
            <MenuBarContainer />
			<CourseInfoForm  />
			<PrintDetailsForm />
            <UploadForm />
		</div>);
	}	
});

export default App;

