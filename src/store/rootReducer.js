import { combineReducers } from 'redux';
import navigationReducer from '../reducers/navigationReducer.js'
import coursePackModule from '../reducers/coursePackModule.js'
import coursePackYearListing from '../reducers/coursePackYearListing.js'
const rootReducer = combineReducers({navigationReducer,coursePackModule, coursePackYearListing});
export default rootReducer;
