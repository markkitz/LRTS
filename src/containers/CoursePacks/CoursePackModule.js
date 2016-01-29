const React = require('react');
const ClassNames = require('classNames')
const {connect} = require('react-redux')
import CoursePackChangeTypeForm from './Subform/CoursePackChangeTypeForm'
import CoursePackInfoForm  from './Subform/CoursePackInfoForm.js'
import CoursePackPrintDetailsForm  from './Subform/CoursePackPrintDetailsForm.js'
import CoursePackUploadForm from './Subform/CoursePackUploadForm.js'
import CoursePackCopyrightForm from './Subform/CoursePackCopyrightForm.js'
import CoursePackReviewForm from './Subform/CoursePackReviewForm.js'
import CoursePackNotStartedForm from './Subform/CoursePackNotStartedForm.js'
import Tabs from 'material-ui/lib/tabs/tabs'
import Tab from 'material-ui/lib/tabs/tab'
import StatusIcon from '../../components/StatusIcon'
import '../../css/course-pack-module.css'


// const styles = {
//   headline: {
//     fontSize: 24,
//     paddingTop: 16,
//     marginBottom: 12,
//     fontWeight: 400,
//   },
// };


//style={{backgroundColor:'#EFEFEF',color:'#AAA'}}
let CoursePackModule = ({id, status, isLoaded,currentEditForm, unselect, termName, termState,
  tabChangeHandler, onTextBoxChange, onPropertyChange,courseInfo, printDetails,copyright, reviewForm, upload }) => {

    const getTabClass = (tabName) => {
      return ClassNames( {'selectedTab' : currentEditForm == tabName},{'unselectedTab' : currentEditForm != tabName})
    }

    const tabs = (
          <Tabs value={currentEditForm} onChange={tabChangeHandler} className="cpm-tabs" >
            <Tab label="Change Type" value="CoursePackChangeTypeForm"  className={getTabClass("CoursePackChangeTypeForm")} >
              <CoursePackChangeTypeForm />
            </Tab>
            <Tab label="Cover Information" value="CoursePackInfoForm"  className={getTabClass("CoursePackInfoForm")}  >
              <CoursePackInfoForm model={courseInfo}  onPropertyChange={onPropertyChange} />
            </Tab>
            <Tab label="Print Details" value="CoursePackPrintDetailsForm" className={getTabClass("CoursePackPrintDetailsForm")} >
              <CoursePackPrintDetailsForm  model={printDetails} onPropertyChange={onPropertyChange}/>
            </Tab>
            <Tab  label="Upload" value="CoursePackUploadForm" className={getTabClass("CoursePackUploadForm")} >
              <CoursePackUploadForm onTextBoxChange={onTextBoxChange} model={upload}/>
            </Tab>
            <Tab  label="Copyright" value="CoursePackCopyrightForm" className={getTabClass("CoursePackCopyrightForm")} >
              <CoursePackCopyrightForm  model={copyright} onPropertyChange={onPropertyChange}/>
            </Tab>
            <Tab label="Review" value="CoursePackReviewForm" className={getTabClass("CoursePackReviewForm")} >
              <CoursePackReviewForm  model={reviewForm} onPropertyChange={onPropertyChange}/>
            </Tab>
          </Tabs>)

    let body = termState == "NotStarted" ? <CoursePackNotStartedForm /> : tabs

		return(
			isLoaded == false ? <h2>loading</h2>:
		<div className="cpm">
			<div className={'cpm-hdr'} onClick={() => unselect()} ><StatusIcon status={status} isLarge="true"/>  {"Course Pack - " + termName} </div>
      {body}
		</div>);
};
CoursePackModule = connect(
	(state) => {
    let isLoaded = state.coursePackModule.isLoaded;
    let currentEditForm = state.coursePackModule.currentEditForm;
    let courseInfo = isLoaded ? state.coursePackModule.formData.courseInfo : null;
    let printDetails = isLoaded ? state.coursePackModule.formData.printDetails : null;
    let copyright = isLoaded ? state.coursePackModule.formData.copyright :null;
    let upload = isLoaded ? state.coursePackModule.formData.upload : null;
    let reviewForm = isLoaded ? state.coursePackModule.formData.reviewForm : null;
    let termState = state.coursePackModule.termState;

		return {
  		isLoaded, currentEditForm, courseInfo, printDetails, upload, copyright, termState	};
    },
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
