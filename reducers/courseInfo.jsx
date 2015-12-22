let json = {
			coursePackNumber:'ABC123', 
			title:'This is the title', 
			subtitle:'This is the subtitle'
		};

const courseInfo = (state= json, action) => {
	switch(action.type){
		case 'UPDATE_COVERINFO':
			return  {...state,  [action.keyValue.name]: action.keyValue.value };
		default:
			return state;
	}  
}
export default courseInfo;