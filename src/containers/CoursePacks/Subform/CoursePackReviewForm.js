const React = require('react');
import SubForm  from '../../../components/Subform'
import TextField from 'material-ui/lib/text-field';
import css from '../../../css/coursePackReviewForm.css'

const CoursePackReviewForm =   ({ model, onPropertyChange}) =>
      {
        let form ="CoursePackReviewForm";
        let actionType = "UPDATE_REVIEW"


          return (
          <SubForm form={form} isLast={true}>
            <table className={css.table} >
               <tbody>
                  <tr >
                     <td className={css.td1}>fdsdsffds)</td>
                     <td className={css.td2}>test</td>
                  </tr>
               </tbody>
            </table>
         </SubForm>);
      };

export default CoursePackReviewForm;
