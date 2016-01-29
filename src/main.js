const React = require('react')
const ReactDOM = require('react-dom')
const {Provider} = require('react-redux')
import {Router, routeHashWatcher} from './router'
import {routes, routeViews, routeTitles} from './routes.js'
///// containers ////////////
import NavPanel from './containers/NavPanel'
import NavHeaderBar from './containers/NavHeaderBar'
import configureStore from './store/configureStore'
import injectTapEventPlugin from 'react-tap-event-plugin';
import AppBar from 'material-ui/lib/app-bar';

// Needed for onTouchTap
// Can go away when react 1.0 release
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();


///// actions ///////////////
const actions = require('./actions/actions')

const store = configureStore();
console.log("STATE", store.getState())

routeHashWatcher.watch(store.dispatch, routes)
//setTimeout(function(){ store.dispatch(actions.loadCoursePackYearListing())}, 500);

const render = () => {
	ReactDOM.render(
        (<Provider store={store}>
          <div>

              <NavHeaderBar routeTitles={routeTitles} />
              <NavPanel />
              <div className='cnt-bdy'>
                <Router routes={routes} routeViews={routeViews} routeTitles={routeTitles} />
              </div>
          </div>
        </Provider>)
		, document.getElementById('root')
	);
};
store.subscribe(render);
render();
