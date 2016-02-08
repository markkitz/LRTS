const fetch = require( 'isomorphic-fetch');

////course pack module////////////////////////////////////////////////////////
export const PREVIOUS_CLICK = 'PREVIOUS_CLICK'
export const NEXT_CLICK = 'NEXT_CLICK'
export const NAVIGATE_TO_FORM = 'NAVIGATE_TO_FORM'
export const LOAD_COURSE_MODULE_FOR_TERM = 'LOAD_COURSE_MODULE_FOR_TERM'
export const UPDATE_COVERINFO = 'UPDATE_COVERINFO'
export const UPDATE_PRINTDETAILS = 'UPDATE_PRINTDETAILS'
//////course pack year listing/////////////////////////////////////////////
export const SELECT_COURSE_PACK_YEAR = 'SELECT_COURSE_PACK_YEAR'
export const UNSELECT_COURSE_PACK_YEAR = 'UNSELECT_COURSE_PACK_YEAR'
export const SELECT_TERM = 'SELECT_TERM'
export const UNSELECT_COURSE_PACK_TERM = 'UNSELECT_COURSE_PACK_TERM'
export const LOAD_COURSE_PACK_YEAR_LISTING = 'LOAD_COURSE_PACK_YEAR_LISTING'



export function loadCoursePackYearListing() {
	return dispatch => {
		return fetch("http://localhost:6969/api/coursePackYears").then(response => response.json())
		.then(json =>{
			dispatch(
                {
                    type: LOAD_COURSE_PACK_YEAR_LISTING,
                    years: json
                });
		} )
	};
}

export function loadCoursePackModuleFormForTerm(termId) {
	return dispatch => {
		return fetch("http://localhost:6969/api/terms?termId=" + termId).then(response => response.json())
		.then(json =>{
			 dispatch(
                 {
                     type: LOAD_COURSE_MODULE_FOR_TERM,
                     formData: json
                 });
		} )
	};
}
	export function loadCourse() {
		return dispatch => {
			return fetch("http://localhost:6969/api/course").then(response => response.json())
			.then(json =>{
				 dispatch(
	                 {
	                     type: LOAD_COURSE,
	                     formData: json
	                 });
			} )
		};
}
