const React = require('react');
const {connect} = require('react-redux');
import SubForm  from '../../../components/Subform.js'
import RaisedButton from 'material-ui/lib/raised-button';

const CoursePackUploadForm = ({currentEditForm, UploadFileHandler}) =>
        {
          let form ="CoursePackUploadForm";
          let actionType = "UPDATE_UPLOAD"
          const styles = {
              button: {
                margin: 12,
              },
              exampleImageInput: {
                cursor: 'pointer',
                position: 'absolute',
                top: 0,
                bottom: 0,
                right: 0,
                left: 0,
                width: '100%',
                opacity: 0,
              },
            };

            return (
                    <SubForm heading={'Upload Document'}  form={'CoursePackUploadForm'} >
                    <div style={{textAlign:"center", marginTop:'20px'}}>
                      <RaisedButton
                           label="CHOOSE COURSE PACK DOCUMENT"
                           style={styles.button}
                         >
                         <input type="file" style={styles.exampleImageInput} />
                         </RaisedButton>
                       </div>
  		              </SubForm>
           );
        }

export default CoursePackUploadForm;
