const json = {years : [
        {id:1, year:'2015-16', terms:[{term:'Summer'}, {term:'Fall'}]},
        {id:2, year:'2014-15', terms:[{term:'Summer'}, {term:'Fall'}]}
    ],
    selectedYearId:2
    };
const coursePackYearListing = (state= json, action) => {
	switch(action.type){
		case 'SELECT_COURSE_PACK_YEAR':
			return  {...state,  selectedYearId: action.yearId};
		default:
			return state;
	}  
}
export default coursePackYearListing;