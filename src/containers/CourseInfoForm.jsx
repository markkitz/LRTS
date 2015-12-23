const React = require('react');
const {connect} = require('react-redux');
import TextInput  from '../components/TextInput.jsx'
import SubForm  from '../components/Subform.jsx'

const CourseInfoForm = connect (
     (state) => {
         return   {currentForm:state.formState.currentForm, model:state.courseInfo };
    },
    (dispatch) => {
        return { 
            dispatchSetVariable: (name, value) => {dispatch({type:'UPDATE_COVERINFO', keyValue:{name, value} }); } 
            };
    })
    (({currentForm, model, dispatchSetVariable}) =>
        {
            let isDirty = false;
            const setVariable = (name, value) =>{
                isDirty = true;
                dispatchSetVariable(name, value);
            };
            const saveState = () =>{};
            return (
            <SubForm heading={'Course Pack Info'} isVisible={currentForm=='CourseInfoForm'} form={'CourseInfoForm'}>
                <TextInput label="coursePackNumber:" name="coursePackNumber" value={model.coursePackNumber} onChange={setVariable}  onBlur = {saveState}  />
                <TextInput label="title:" name="title" value={model.title} onChange={setVariable}  onBlur = {saveState}  />
                <TextInput label="subtitle:" name="subtitle" value={model.subtitle} onChange={setVariable}  onBlur = {saveState}  />
            </SubForm>);            
        }
);


export default CourseInfoForm;