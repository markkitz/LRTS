import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
//import rootReducer from '../reducers';
import DevTools from '../containers/DevTools';
import navigationReducer from '../reducers/navigationReducer.js'
import coursePackModule from '../reducers/coursePackModule.js'
import coursePackYearListing from '../reducers/coursePackYearListing.js'
const thunk = require('redux-thunk')
const finalCreateStore = compose(
  // Middleware you want to use in development:
  //applyMiddleware(d1, d2, d3),
  applyMiddleware(thunk),
  // Required! Enable Redux DevTools with the monitors you chose
  DevTools.instrument()
)(createStore);

export default function configureStore(initialState) {
  const App = combineReducers({navigationReducer,coursePackModule,
    coursePackYearListing});

  const store = finalCreateStore(App, initialState);

  // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
  // if (module.hot) {
  //   module.hot.accept('../reducers', () =>
  //     store.replaceReducer(require('../reducers')/*.default if you use Babel 6+ */)
  //   );
  // }

  return store;
}


//
// const {createStore, combineReducers, applyMiddleware} = Redux;
// const App = combineReducers({navigationReducer,coursePackModule,coursePackYearListing});
// const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
// var store = createStoreWithMiddleware(App);
