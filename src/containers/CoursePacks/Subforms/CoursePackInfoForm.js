const React = require('react');
const {connect} = require('react-redux');
import SubForm  from '../../../components/Subform'
import TextField from 'material-ui/lib/text-field';

const CoursePackInfoForm =   ({ model, onTextBoxChange}) =>
      {
          onTextBoxChange = (test) = {};
          let isDirty = false;

          const saveState = () =>{};
          return (
          <SubForm heading={'Course Pack Info '}  form={'CoursePackInfoForm'} >
              <div><TextField  floatingLabelText="School" hintText="Enter Text" value={"School of Health Sciences"}  disabled={true} /></div>
              <div><TextField  floatingLabelText="Program" hintText="Enter Text" value={"Dental Technology"}  disabled={true} /></div>
              <div><TextField name="coursePackNumber" floatingLabelText="Course Pack Number" hintText="Enter Text" value={model.coursePackNumber} onChange={onTextBoxChange} /></div>
              <div><TextField name="title" floatingLabelText="Title" hintText="Enter Text" fullWidth={true} value={model.title} onChange={onTextBoxChange} /></div>
              <div><TextField name="subtitle" floatingLabelText="Subtitle" hintText="Enter Text" fullWidth={true} value={model.subtitle} onChange={onTextBoxChange} /></div>
          </SubForm>);
      };

export default CoursePackInfoForm;
