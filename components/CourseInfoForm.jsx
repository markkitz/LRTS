const React = require('react');
const ReactRedux = require('react-redux');
const {connect} = ReactRedux;
import TextInput  from './TextInput.jsx'
import SubForm  from './Subform.jsx'

const CourseInfoForm = connect (
     (state) => {
         return   {visibleForm:state.formState.currentForm, model:state.courseInfo };
    },
    (dispatch) => {
        return { 
            dispatchSetVariable: (name, value) => {dispatch({type:'UPDATE_COVERINFO', keyValue:{name, value} }); } 
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
            <SubForm heading={'Course Pack Info'} isVisible={visibleForm=='CourseInfoForm'} form={'CourseInfoForm'}>
                <TextInput label="coursePackNumber:" name="coursePackNumber" value={model.coursePackNumber} onChange={setVariable}  onBlur = {saveState}  />
                <TextInput label="title:" name="title" value={model.title} onChange={setVariable}  onBlur = {saveState}  />
                <TextInput />
                <TextInput label="subtitle:" name="subtitle" value={model.subtitle} onChange={setVariable}  onBlur = {saveState}  />
            </SubForm>);            
        }
);


export default CourseInfoForm;