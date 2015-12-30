const React = require('react');
const ReactDOM = require('react-dom');
const thunk = require('redux-thunk');
const Redux = require('redux');
const ReactRedux = require('react-redux');
const actions = require('./actions/actions.js');
import coursePackModule from './reducers/coursePackModule.jsx'
import coursePackYearListing from './reducers/coursePackYearListing.jsx'
import CoursePackModule from './containers/CoursePackModule.jsx'
import CoursePackYearListing from './containers/CoursePackYearListing.jsx'

/////////////////////////////////////////////////

const render = () => {
	ReactDOM.render(	
        (<Provider store={store}>		  
          <CoursePackYearListing/>
        </Provider>)
		, document.getElementById('root')
	);	
};


const {Provider} = ReactRedux;
const {createStore, combineReducers, applyMiddleware} = Redux;
const coursePackApp = combineReducers({coursePackModule,coursePackYearListing});
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

var store = createStoreWithMiddleware(coursePackApp);

store.subscribe(render);
render();
setTimeout(function(){ store.dispatch(actions.loadCoursePackYearListing())}, 500);