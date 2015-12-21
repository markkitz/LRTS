const React = require('react');
import TextInput  from './TextInput.jsx'
import SubForm  from './Subform.jsx'

var PrintDetailsForm = React.createClass(
{
	isDirty:false,

	saveState: function(e) {
		if(this.isDirty)
		{
			console.log("save");
		}
		this.isDirty =false;
	},
	setVariable(name, value) {
		this.isDirty = true;
		this.props.dispatch({type:'UPDATE_PRINTDETAILS', keyValue:{name, value} });
	},
	render: function() {
		const {visibleForm, model, dispatch} = this.props;
		console.log(model);
		return (
		<SubForm heading={'Print Details'} isVisible={visibleForm=='PrintDetailsForm'} dispatch={dispatch} form={'PrintDetailsForm'}>
			<TextInput label="field1:" name="field1" value={model.field1} onChange={this.setVariable}  onBlur = {this.saveState}  />
		</SubForm>);
	}
});

export default PrintDetailsForm;