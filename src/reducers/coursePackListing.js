let id = 1;
const json = [
	{id:id++, title:'Chromatography Laboratory Manual', coursePackNumber:1510, school:"School of Sustainable Building and Environmental Management"},
	{id:id++, title:'Fabrication & Business Knowledge', coursePackNumber:3053, school:"School of Trades"},
	{id:id++, title:'Prosthodontic Procedures I', coursePackNumber:1252, school:"School of Health Sciences"},
	{id:id++, title:'Quantitative Analysis Theory', coursePackNumber:1998, school:"School of Sustainable Building and Environmental Management"},
	{id:id++, title:'Shop Operations - Exercises & Shop Projects', coursePackNumber:3052, school:"School of Trades"},
	{id:id++, title:'Small Animal Clincs', coursePackNumber:2782, school:"School of Health Sciences"},
	{id:id++, title:'Transfusion Medicine TRAM2304', coursePackNumber:3052, school:"School of Health Sciences"},
]
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
