const json = {years : [ ],
    selectedYearId:null,
    isLoaded:false
    };
const coursePackYearListing = (state= json, action) => {
	switch(action.type){
		case 'SELECT_COURSE_PACK_YEAR':
			return  {...state,  selectedYearId: action.yearId};
        case 'LOAD_COURSE_PACK_YEAR_LISTING':
            console.log('LOAD', action);
            let dbState = action.years;
            dbState.isLoaded = true;
           return dbState;
		default:
			return state;
	}  
}
export default coursePackYearListing;