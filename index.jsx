const React = require('react');
const ReactDOM = require('react-dom');
const Redux = require('redux');
const ReactRedux = require('react-redux');
const {Component } = React;
import {connect} from 'react-redux'
import TextInput  from './components/TextInput.jsx'
import SubForm  from './components/Subform.jsx'
import courseInfo from './reducers/courseInfo.jsx'
import printDetails from './reducers/printDetails.jsx'
import formState from './reducers/formState.jsx'
import App from './containers/App.jsx'


/////////////////////////////////////////////////

console.log(process.env.TARGET)



const render = () => {
	ReactDOM.render(	
        (<Provider store={store}>	
		  <App/>
        </Provider>)
		, document.getElementById('root')
	);	
};



const {Provider} = ReactRedux;
const {createStore, combineReducers} = Redux;
const coursePackApp = combineReducers({courseInfo, printDetails,formState});
var store = createStore(coursePackApp);

store.subscribe(render);
render();