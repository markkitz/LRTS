const React = require('react');
const ReactDOM = require('react-dom');
const Redux = require('redux');
const ReactRedux = require('react-redux');
const {Component } = React;
const {connect} = ReactRedux;
import TextInput  from './components/TextInput.jsx'
import SubForm  from './components/Subform.jsx'
import CourseInfoForm  from './components/CourseInfoForm.jsx'
import PrintDetailsForm  from './components/PrintDetailsForm.jsx'



///////////reducer//////////////

const courseInfo = (state= json.courseInfo, action) => {
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
	switch(action.type){
		case 'UPDATE_PRINTDETAILS':
        
			return {...state,  [action.keyValue.name]: action.keyValue.value };
		default:
			return state;
	}  
}
const formState = (state= {currentForm:'CourseInfoForm'}, action) => {
    console.log(action);
	switch(action.type){
		case 'PREVIOUS_CLICK':
        console.log('PREVIOUS_CLICK');
			return {...state, currentForm:'CourseInfoForm'};
		case 'NEXT_CLICK':
            console.log('NEXT_CLICK');
			return {...state, currentForm:'PrintDetailsForm'};
		default:
			return state;
	}
}
/////////////////////////////////////////////////
const App = React.createClass({

	visibleForm: 'CourseInfoForm',
	render: function(){
		return(
		<div>
			<CourseInfoForm  />
			<PrintDetailsForm />
            <TestReactRedux />
		</div>);
	}	
});

const TestReactRedux = connect (
    (state) => {
        return {test: state.formState.currentForm};
    }
    
)(({test}) =>
    {
        return(<h2>{test}</h2>);
    }
);





const render = () => {
    console.log(store.getState());
	ReactDOM.render(	
        (<Provider store={store}>	
		  <App/>
        </Provider>)
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

const {Provider} = ReactRedux;
const {createStore, combineReducers} = Redux;
const coursePackApp = combineReducers({courseInfo, printDetails,formState});
var store = createStore(coursePackApp);
console.log(store.getState(), "get state");
store.subscribe(render);
render();