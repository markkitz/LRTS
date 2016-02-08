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
import css from  '../../css/coursePackModule.css'

let CoursePackModule = ({id,  isLoaded,currentEditForm, unselect, termName, termStatus,
  tabChangeHandler, onTextBoxChange, onPropertyChange,courseInfo, printDetails,
  copyright, reviewForm, upload }) => {

    const getTabClass = (tabName) => {
      if(currentEditForm == tabName){
         return css.selectedTab;
      }
      return css.unselectedTab;
    }

    const tabs = (
          <Tabs value={currentEditForm} onChange={tabChangeHandler} className={css.tabs} >
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
    let body = termStatus == "notStarted" ? <CoursePackNotStartedForm /> : tabs

		return(
			isLoaded == false ? <h2>loading</h2>:
		<div className={css.widget}>
			<div className={css.header} onClick={() => unselect()} ><StatusIcon status={termStatus} isLarge="true"/>  {"Course Pack - " + termName} </div>
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

		return {
  		isLoaded, currentEditForm, courseInfo, printDetails, upload, copyright	};
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
