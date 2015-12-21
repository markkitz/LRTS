const React = require('react');
const ReactDOM = require('react-dom');
const Redux = require('redux');
const {Component } = React;
import TextInput  from './components/TextInput.jsx'
import SubForm  from './components/Subform.jsx'
import CourseInfoForm  from './components/CourseInfoForm.jsx'
import PrintDetailsForm  from './components/PrintDetailsForm.jsx'

// var PrintDetailsForm = React.createClass(
// 	{
// 		isDirty:false,
// 		getInitialState: function() {
// 			
// 			return this.props.printDetails;
// 		},
// 		
// 		
// 		saveState: function(e) {
// 			if(this.isDirty)
// 			{
// 				console.log("save");
// 			}
// 			this.isDirty =false;
// 		},
// 		setVariable(name, value) {
// 			this.isDirty = true;
// 			this.setState({[name]: value});
// 		},
// 		render:function() {
// 			
// 			const {onPrevious, onNext, visibleForm} = this.props;
// 			return(
// 				<SubForm heading={'Printing Details'} isVisible={visibleForm=='PrintDetailsForm'} onPrevious ={onPrevious} onNext = {onNext} >
// 					<TextInput label="field1:" name="field1" value={this.state.field1} onChange={this.setVariable}  onBlur = {this.saveState}  />
// 				</SubForm>
// 			);
// 		}		
// 	}
// );




const App = React.createClass({

	visibleForm: 'CourseInfoForm',
	render: function(){
		return(
		<div>
			<CourseInfoForm dispatch={store.dispatch} visibleForm={store.getState().formState.currentForm}  model={store.getState().courseInfo}    />
			<PrintDetailsForm dispatch={store.dispatch} visibleForm={store.getState().formState.currentForm}  model={store.getState().printDetails}    />
			
		</div>);
	}	
});


const render = () => {
	ReactDOM.render(		
		<App/>
		, document.getElementById('root')
	);	
};

var json = {
		courseInfo:{
			coursePackNumber:'ABC123', 
			title:'This is the title', 
			subtitle:'This is the subtitle'
		},
		printDetails: {
			field1: 'test'
		}
	
};

///////////reducer//////////////

const courseInfo = (state= json.courseInfo, action) => {
	console.log(action);
	switch(action.type){
		case 'UPDATE_COVERINFO':
			var result = {...state,  [action.keyValue.name]: action.keyValue.value };
			console.log(result);
			return result;
		default:
			return state;
	}  
}
const printDetails = (state= json.printDetails, action) => {
	console.log(action);
	switch(action.type){
		case 'UPDATE_PRINTDETAILS':
			var result = {...state,  [action.keyValue.name]: action.keyValue.value };
			console.log(result);
			return result;
		default:
			return state;
	}  
}
const formState = (state= {currentForm:'CourseInfoForm'}, action) => {
	switch(action.type){
		case 'PREVIOUS_CLICK':
			return {...state, currentForm:'CourseInfoForm'};
		case 'NEXT_CLICK':
			return {...state, currentForm:'PrintDetailsForm'};
		default:
			return state;
	}
}
const {createStore, combineReducers} = Redux;
const coursePackApp = combineReducers({courseInfo, printDetails,formState});
var store = createStore(coursePackApp);
console.log(store.getState(), "get state");
store.subscribe(render);
render();