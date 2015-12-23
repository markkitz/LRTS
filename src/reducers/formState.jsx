//var forms = ['CourseInfoForm','PrintDetailsForm' ];
var forms = [{key:'CourseInfoForm', value:'Course Info Form'},{key:'PrintDetailsForm',value:'Print Details'}, {key:'UploadForm', value:'Upload Form'}];
var formIdentifiers = forms.map(form => {return form.key});

const getPreviousForm = (currentForm) => {
  var i = formIdentifiers.indexOf(currentForm);
  if(i > 0){
      return formIdentifiers[i-1];
  }  
  return currentForm;
};
const getNextForm = (currentForm) => {
  var i = formIdentifiers.indexOf(currentForm);
  if(i < formIdentifiers.length - 1){
      return formIdentifiers[i+1];
  }  
  return currentForm;
};

const formState = (state= {currentForm:'CourseInfoForm', forms:forms}, action) => {
	switch(action.type){
		case 'PREVIOUS_CLICK':
			return {...state, currentForm:getPreviousForm(action.form)};
		case 'NEXT_CLICK':
			return {...state, currentForm:getNextForm(action.form)};
        case 'NAVIGATE_TO_FORM':
            return {...state, currentForm:action.form};
		default:
			return state;
	}
}
export default formState;