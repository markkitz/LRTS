const React = require('react');
import CoursePackChangeTypeForm from './CoursePackChangeTypeForm'
import CoursePackInfoForm  from './CoursePackInfoForm.js'
import CoursePackPrintDetailsForm  from './CoursePackPrintDetailsForm.js'
import CoursePackMenuBarContainer from './CoursePackMenuBarContainer.js'
import CoursePackUploadForm from './CoursePackUploadForm.js'
import Tabs from 'material-ui/lib/tabs/tabs';
import Tab from 'material-ui/lib/tabs/tab';
const {connect} = require('react-redux');
import '../../css/course-pack-module.css'

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

let CoursePackModule = ({id, isLoaded, currentForm, unselect, termName, tabChangeHandler, onTextBoxChange, courseInfo, printDetails, upload }) => {
		return(
			isLoaded == false ? <h2>loading</h2>:
		<div className="cpm">
			<div className={'cpm-hdr'} onClick={() => unselect()} >{termName}</div>
      <Tabs value={currentForm} onChange={tabChangeHandler}>
        <Tab label="Change Type" value="CoursePackChangeTypeForm" >
          <CoursePackChangeTypeForm />
        </Tab>
        <Tab label="Cover Information" value="CoursePackInfoForm" >
          <CoursePackInfoForm onTextBoxChange={onTextBoxChange} model={courseInfo} />
        </Tab>
        <Tab label="Print Details" value="CoursePackPrintDetailsForm" >
          <CoursePackPrintDetailsForm onTextBoxChange={onTextBoxChange} model={printDetails}/>
        </Tab>
        <Tab  label="Upload" value="CoursePackUploadForm" >
          <CoursePackUploadForm onTextBoxChange={onTextBoxChange} model={upload}/>
        </Tab>
        <Tab  label="Copyright" value="CopyrightForm" >
          <h1>test</h1>
        </Tab>
        <Tab label="Review" value="ReviewForm" >
          <h1>test</h1>
        </Tab>
      </Tabs>
		</div>);
};
CoursePackModule = connect(
	(state) => {
    console.log("coursePackModule", state.coursePackModule)

    let isLoaded = state.coursePackModule.isLoaded;
    let currentForm = state.coursePackModule.currentForm;
    let courseInfo = isLoaded ? state.coursePackModule.formData.courseInfo : null;
    let printDetails = isLoaded ? state.coursePackModule.formData.printDetails : null;
    let upload = isLoaded ? state.coursePackModule.formData.upload : null;

		return {
  		isLoaded:isLoaded,
      currentForm:currentForm,
      courseInfo: courseInfo,
      printDetails: printDetails,
      upload: upload
		};},
	(dispatch) => {
		 const unselect = () => dispatch({type:'UNSELECT_COURSE_PACK_TERM'})
     const tabChangeHandler = (form) => {
       dispatch({type:'NAVIGATE_TO_FORM', form});
     };
     const onTextBoxChange = ({target}) => {
       dispatchSetVariable(target.name, target.value);
     }
		 return {unselect, tabChangeHandler, onTextBoxChange}
        })(CoursePackModule);
export default CoursePackModule;

// <CoursePackMenuBarContainer />
// <CoursePackInfoForm  />
// <CoursePackPrintDetailsForm />
// <CoursePackUploadForm />
