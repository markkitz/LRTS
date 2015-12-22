var forms = ['CourseInfoForm','PrintDetailsForm' ];

const getPreviousForm = (currentForm) => {
  var i = forms.indexOf(currentForm);
  if(i > 0){
      return forms[i-1];
  }  
  return currentForm;
};
const getNextForm = (currentForm) => {
  var i = forms.indexOf(currentForm);
  if(i < forms.length - 1){
      return forms[i+1];
  }  
  return currentForm;
};

const formState = (state= {currentForm:'CourseInfoForm'}, action) => {
	switch(action.type){
		case 'PREVIOUS_CLICK':
			return {...state, currentForm:getPreviousForm(action.form)};
		case 'NEXT_CLICK':
			return {...state, currentForm:getNextForm(action.form)};
		default:
			return state;
	}
}
export default formState;