const json = [{id:1, title:'course pack 1'},{id:2, title:'course pack 2'}]
const coursePackListing = (state= json, action) => {
	switch(action.type){
		// case 'SELECT_COURSE_PACK_YEAR':
		// 	return  {...state,  selectedYearId: action.yearId};
    //
		default:
			return state;
	}
}
export default coursePackListing;
