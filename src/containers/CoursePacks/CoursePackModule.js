const React = require('react');
import CoursePackChangeTypeForm from './Subform/CoursePackChangeTypeForm'
import CoursePackInfoForm  from './Subform/CoursePackInfoForm.js'
import CoursePackPrintDetailsForm  from './Subform/CoursePackPrintDetailsForm.js'
import CoursePackUploadForm from './Subform/CoursePackUploadForm.js'
import CoursePackCopyrightForm from './Subform/CoursePackCopyrightForm.js'
import CoursePackReviewForm from './Subform/CoursePackReviewForm.js'
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

let CoursePackModule = ({id, isLoaded, currentForm, unselect, termName, tabChangeHandler, onTextBoxChange, onPropertyChange,courseInfo, printDetails,copyright, reviewForm, upload }) => {
		return(
			isLoaded == false ? <h2>loading</h2>:
		<div className="cpm">
			<div className={'cpm-hdr'} onClick={() => unselect()} >{termName}</div>
      <Tabs value={currentForm} onChange={tabChangeHandler}>
        <Tab label="Change Type" value="CoursePackChangeTypeForm" >
          <CoursePackChangeTypeForm />
        </Tab>
        <Tab label="Cover Information" value="CoursePackInfoForm" >
          <CoursePackInfoForm model={courseInfo}  onPropertyChange={onPropertyChange}/>
        </Tab>
        <Tab label="Print Details" value="CoursePackPrintDetailsForm" >
          <CoursePackPrintDetailsForm  model={printDetails} onPropertyChange={onPropertyChange}/>
        </Tab>
        <Tab  label="Upload" value="CoursePackUploadForm" >
          <CoursePackUploadForm onTextBoxChange={onTextBoxChange} model={upload}/>
        </Tab>
        <Tab  label="Copyright" value="CoursePackCopyrightForm" >
          <CoursePackCopyrightForm  model={copyright} onPropertyChange={onPropertyChange}/>
        </Tab>
        <Tab label="Review" value="CoursePackReviewForm" >
          <CoursePackReviewForm  model={reviewForm} onPropertyChange={onPropertyChange}/>
        </Tab>
      </Tabs>
		</div>);
};
CoursePackModule = connect(
	(state) => {
    let isLoaded = state.coursePackModule.isLoaded;
    let currentForm = state.coursePackModule.currentForm;
    let courseInfo = isLoaded ? state.coursePackModule.formData.courseInfo : null;
    let printDetails = isLoaded ? state.coursePackModule.formData.printDetails : null;
    let copyright = isLoaded ? state.coursePackModule.formData.copyright :null;
    let upload = isLoaded ? state.coursePackModule.formData.upload : null;
    let reviewForm = isLoaded ? state.coursePackModule.formData.reviewForm : null;

		return {
  		isLoaded,
      currentForm,
      courseInfo,
      printDetails,
      upload,
      copyright
		};},
	(dispatch) => {
		 const unselect = () => dispatch({type:'UNSELECT_COURSE_PACK_TERM'})
     const tabChangeHandler = (form) => {
       if((typeof form) == "string")
        dispatch({type:'NAVIGATE_TO_FORM', form});
     };
     const onPropertyChange = (dispatchType, name, value) => {
       dispatch({type:dispatchType, keyValue:{ name:name, value:value } })
     }
		 return {unselect, tabChangeHandler,  onPropertyChange}
        })(CoursePackModule);
export default CoursePackModule;

// <CoursePackMenuBarContainer />
// <CoursePackInfoForm  />
// <CoursePackPrintDetailsForm />
// <CoursePackUploadForm />
