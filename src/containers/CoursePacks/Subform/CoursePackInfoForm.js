const React = require('react');
import SubForm  from '../../../components/Subform'
import TextField from 'material-ui/lib/text-field';

const CoursePackInfoForm =   ({ model, onPropertyChange}) =>
      {
        let form ="CoursePackInfoForm";
        let actionType = "UPDATE_COVERINFO"
        const onTextBoxChange = ({target}) => {
            onPropertyChange(actionType, target.name, target.value)
          }

          return (
          <SubForm form={form} >
              <div><TextField  floatingLabelText="School" hintText="Enter Text" value={"School of Health Sciences"}  disabled={true} /></div>
              <div><TextField  floatingLabelText="Program" hintText="Enter Text" value={"Dental Technology"}  disabled={true} /></div>
              <div><TextField name="coursePackNumber" floatingLabelText="Course Pack Number" hintText="Enter Text" value={model.coursePackNumber} onChange={onTextBoxChange} /></div>
              <div><TextField name="title" floatingLabelText="Title" hintText="Enter Text" fullWidth={true} value={model.title} onChange={onTextBoxChange} /></div>
              <div><TextField name="subtitle" floatingLabelText="Subtitle" hintText="Enter Text" fullWidth={true} value={model.subtitle} onChange={onTextBoxChange} /></div>
          </SubForm>);
      };

export default CoursePackInfoForm;
