const fetch = require( 'isomorphic-fetch');

/////////////////////////////////////////////////////////
export const LOAD_COURSE_PACK_YEAR_LISTING = 'LOAD_COURSE_PACK_YEAR_LISTING'
export const LOAD_COURSE_MODULE_FOR_TERM = 'LOAD_COURSE_MODULE_FOR_TERM'

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
