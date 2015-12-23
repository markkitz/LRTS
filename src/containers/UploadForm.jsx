const React = require('react');
const {connect} = require('react-redux');
import TextInput  from '../components/TextInput.jsx'
import SubForm  from '../components/Subform.jsx'

const UploadForm = connect (
 (state) => {
         return   {currentForm:state.formState.currentForm};
    },
    (dispatch) => {
        return { 
            UploadFileHandler: () => {console.log('upload'); } 
            };
    })
    (({currentForm, UploadFileHandler}) =>
        {
            return (
                    <SubForm heading={'Upload Document'} isVisible={currentForm=='UploadForm'}  form={'UploadForm'}>
			             <div>hi</div>
		              </SubForm>
           );            
        }
);


export default UploadForm;