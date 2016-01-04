const React = require('react')
const ReactDOM = require('react-dom')
const ReactRedux = require('react-redux')
const Redux = require('redux')
const thunk = require('redux-thunk')
const {connect} = require('react-redux')
import {Router, routeHashWatcher} from './router'
import {routes, routeViews} from './routes.js'
///// reducers //////////////
import navigationReducer from './reducers/navigationReducer.js'
import coursePackModule from './reducers/coursePackModule.js'
import coursePackYearListing from './reducers/coursePackYearListing.js'
///// containers ////////////
import NavPanel from './containers/NavPanel.js'
import NavHeaderBar from './containers/NavHeaderBar.js'
const actions = require('./actions/actions.js');


const render = () => {
  console.log('render location', window.location.hash);
	ReactDOM.render(
        (<Provider store={store}>
          <div>
              <NavHeaderBar />
              <NavPanel />
              <div className='cnt-bdy'>
                <Router routes={routes} routeViews={routeViews} />
              </div>
          </div>
        </Provider>)
		, document.getElementById('root')
	);
};

const {Provider} = ReactRedux;
const {createStore, combineReducers, applyMiddleware} = Redux;
const App = combineReducers({navigationReducer,coursePackModule,coursePackYearListing});
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
var store = createStoreWithMiddleware(App);

store.subscribe(render);
render();
routeHashWatcher.watch(store.dispatch, routes)
setTimeout(function(){ store.dispatch(actions.loadCoursePackYearListing())}, 500);
