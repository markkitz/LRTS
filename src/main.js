const React = require('react')
const ReactDOM = require('react-dom')
const Redux = require('redux')
const ReactRedux = require('react-redux')
import {Router, routeHashWatcher} from './router'
import {routes, routeViews, routeTitles} from './routes.js'
///// containers ////////////
import NavPanel from './containers/NavPanel'
import NavHeaderBar from './containers/NavHeaderBar'
import configureStore from './store/configureStore'
import DevTools from './containers/DevTools'
///// actions ///////////////
const actions = require('./actions/actions')

const {Provider} = ReactRedux;
const store = configureStore();

routeHashWatcher.watch(store.dispatch, routes)
setTimeout(function(){ store.dispatch(actions.loadCoursePackYearListing())}, 500);

const render = () => {
  console.log('render location', window.location.hash);
	ReactDOM.render(
        (<Provider store={store}>
          <div>
              <NavHeaderBar routeTitles={routeTitles} />
              <NavPanel />
              <div className='cnt-bdy'>
                <Router routes={routes} routeViews={routeViews} routeTitles={routeTitles} />
              </div>
              <DevTools />
          </div>
        </Provider>)
		, document.getElementById('root')
	);
};
store.subscribe(render);
render();
