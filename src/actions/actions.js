const fetch = require( 'isomorphic-fetch');

/////////////////////////////////////////////////////////
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