const React = require('react');
const {connect} = require('react-redux');
import SubForm  from '../../../components/Subform.js'

const CoursePackUploadForm = ({currentForm, UploadFileHandler}) =>
        {
          let form ="CoursePackUploadForm";
          let actionType = "UPDATE_UPLOAD"

            return (
                    <SubForm heading={'Upload Document'}  form={'CoursePackUploadForm'} >
  			             <div>hi</div>
  		              </SubForm>
           );
        }

export default CoursePackUploadForm;
