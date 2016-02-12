import { combineReducers } from 'redux';
import navigationReducer from '../reducers/navigationReducer.js'
import coursePackModule from '../reducers/coursePackModule.js'
import coursePackYearListing from '../reducers/coursePackYearListing.js'
import coursePackListing from '../reducers/coursePackListing.js'
import courseListing from '../reducers/courseListing.js'
import course from '../reducers/course.js'
const rootReducer = combineReducers({
   navigationReducer,
   coursePackModule,
   coursePackYearListing,
   coursePackListing,
   courseListing,
   course});
export default rootReducer;
