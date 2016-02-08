const React = require('react');
const {connect} = require('react-redux');
import SubForm  from '../../../components/Subform'
import IconButton from 'material-ui/lib/icon-button';
import FlatButton from 'material-ui/lib/flat-button';
import css from '../../../css/CoursePackChangeTypeForm.css'

const CoursePackChangeTypeForm =   ({ model, onTextBoxChange}) =>
      {

          let selectedStyle = {color:'#1565c0;font-size:30px'};
          let unSelectedStyle = {color:'#bbdefb;font-size:30px'};
          const saveState = () =>{};
          return (
          <SubForm heading={'CoursePackChangeTypeForm'}  form={'CoursePackChangeTypeForm'} isFirst={true} >
          <div className={css.widget}>
              <p>How is this Course Pack different from the last one used for this course?</p>

                <div className={css.widget}>
                  <div className={css.typeIcon}><i className="fa fa-check" style={selectedStyle} /></div>
                  <div className={css.typeIconText}>
                    <h3>Major Revision</h3>
                    <p>This is a new course or there has been a major changes. This will require new approvals.</p>
                  </div>
                </div>
                <div className={css.type}>
                  <div className={css.typeIcon}> <FlatButton label="SELECT"  /></div>
                  <div className={css.typeIconText}>
                    <h3>Minor Revision</h3>
                    <p>The changes to this course pack is minor. This not require new approvals.</p>
                  </div>
                </div>
                <div style={{clear:'left'}}></div>
            </div>
          </SubForm>);
      };

export default CoursePackChangeTypeForm;
// <div className="coursePackChangeTypeForm-type">
//   <div> <IconButton iconClassName="fa fa-check" iconStyle={unSelectedStyle}  /></div>
//   <div>
//     <h3>Minor Revision</h3>
//     <p>This is a new course or t.</p>
//   </div>
// </div>
