var json = {field1: 'test'};

const printDetails = (state= json, action) => {
	switch(action.type){
		case 'UPDATE_PRINTDETAILS':        
			return {...state,  [action.keyValue.name]: action.keyValue.value };
		default:
			return state;
	}  
}

export default printDetails;