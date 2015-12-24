const React = require('react');
const ReactDOM = require('react-dom');
const Redux = require('redux');
const ReactRedux = require('react-redux');
import courseInfo from './reducers/courseInfo.jsx'
import printDetails from './reducers/printDetails.jsx'
import formState from './reducers/formState.jsx'
import coursePackYearListing from './reducers/coursePackYearListing.jsx'
import CoursePackModule from './containers/CoursePackModule.jsx'
import CoursePackYearListing from './containers/CoursePackYearListing.jsx'


/////////////////////////////////////////////////

console.log(process.env.TARGET)



const render = () => {
	ReactDOM.render(	
        (<Provider store={store}>	
		  <CoursePackYearListing/>
        </Provider>)
		, document.getElementById('root')
	);	
};



const {Provider} = ReactRedux;
const {createStore, combineReducers} = Redux;
const coursePackApp = combineReducers({courseInfo, printDetails,formState,coursePackYearListing});
var store = createStore(coursePackApp);

store.subscribe(render);
render();