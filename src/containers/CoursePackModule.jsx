const React = require('react');
import CourseInfoForm  from './CourseInfoForm.jsx'
import PrintDetailsForm  from './PrintDetailsForm.jsx'
import MenuBarContainer from './MenuBarContainer.jsx'
import UploadForm from './UploadForm.jsx'
const {connect} = require('react-redux');
import '../css/course-pack-module.css'

let CoursePackModule = ({id, isLoaded, unselect}) => {
	console.log(id)

		return(
			isLoaded == false ? <h2>loading</h2>: 
		<div className="cpm">
			<div className={'cpm-hdr'} onClick={() => unselect()} >test</div>
            <MenuBarContainer />
			<CourseInfoForm  />
			<PrintDetailsForm />
            <UploadForm />
		</div>);
};
CoursePackModule = connect(
	(state) => {return {isLoaded:state.coursePackModule.isLoaded};},
	(dispatch) => {
		 const unselect = () => dispatch({type:'UNSELECT_COURSE_PACK_TERM'})
		 return {unselect}
        }
		
		
	)(CoursePackModule);
export default CoursePackModule;

