const React = require('react');
import SubForm  from '../../../components/Subform'
import LabelValue  from '../../../components/LabelValue'
import TextField from 'material-ui/lib/text-field';

const CoursePackInfoForm =   ({ model, onPropertyChange}) =>
      {
        let form ="CoursePackInfoForm";
        let actionType = "UPDATE_COVERINFO"
        const onTextBoxChange = ({target}) => {
            onPropertyChange(actionType, target.name, target.value)
          }
          console.log(LabelValue)

          return (
          <SubForm form={form} >
              <LabelValue label="School" value="School of Health" />
              <LabelValue label="Program" value="Emergency Medical Technician" />
              <div><TextField name="coursePackNumber" floatingLabelText="Course Pack Number" hintText="Enter Text" value={model.coursePackNumber} onChange={onTextBoxChange} /></div>
              <div><TextField name="title" floatingLabelText="Title" hintText="Enter Text" fullWidth={true} value={model.title} onChange={onTextBoxChange} /></div>
              <div><TextField name="subtitle" floatingLabelText="Subtitle" hintText="Enter Text" fullWidth={true} value={model.subtitle} onChange={onTextBoxChange} /></div>
          </SubForm>);
      };

export default CoursePackInfoForm;
