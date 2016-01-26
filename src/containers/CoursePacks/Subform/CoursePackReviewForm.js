const React = require('react');
import SubForm  from '../../../components/Subform'
import TextField from 'material-ui/lib/text-field';

const CoursePackReviewForm =   ({ model, onPropertyChange}) =>
      {
        let form ="CoursePackReviewForm";
        let actionType = "UPDATE_REVIEW"


          return (
          <SubForm form={form} isLast={true}>
            <h1>test  review</h1>
          </SubForm>);
      };

export default CoursePackReviewForm;
