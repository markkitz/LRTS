const React = require('react');
import CourseInfoForm  from './CourseInfoForm.jsx'
import PrintDetailsForm  from './PrintDetailsForm.jsx'
import MenuBarContainer from './MenuBarContainer.jsx'
import UploadForm from './UploadForm.jsx'
const CoursePackModule = React.createClass({

	visibleForm: 'CourseInfoForm',
	render: function(){
        const id = this.props.id;
		return(
		<div className="cpm">
        <h2>{id}</h2>
            <MenuBarContainer />
			<CourseInfoForm  />
			<PrintDetailsForm />
            <UploadForm />
		</div>);
	}	
});

export default CoursePackModule;

