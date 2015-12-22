const React = require('react');
const ReactRedux = require('react-redux');
const {connect} = ReactRedux;
import TextInput  from './TextInput.jsx'
import SubForm  from './Subform.jsx'

const PrintDetailsForm = connect (
     (state) => {
         return   {visibleForm:state.formState.currentForm, model:state.printDetails };
    },
    (dispatch) => {
        return { 
            dispatchSetVariable: (name, value) => {dispatch({type:'UPDATE_PRINTDETAILS', keyValue:{name, value} }); } 
            };
    })
    (({visibleForm, model, dispatchSetVariable}) =>
        {
            let isDirty = false;
            const setVariable = (name, value) =>{
                isDirty = true;
                dispatchSetVariable(name, value);
            };
            const saveState = () =>{};
            return (
                    <SubForm heading={'Print Details'} isVisible={visibleForm=='PrintDetailsForm'}  form={'PrintDetailsForm'}>
			<TextInput label="field1:" name="field1" value={model.field1} onChange={setVariable}  onBlur = {saveState}  />
		  </SubForm>
           );            
        }
);


export default PrintDetailsForm;


