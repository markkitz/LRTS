const React = require('react');
import TextInput  from './TextInput.jsx'
import SubForm  from './Subform.jsx'

var CourseInfoForm = React.createClass(
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
		this.props.dispatch({type:'UPDATE_COVERINFO', keyValue:{name, value} });
	},

	render: function() {
		const { onNext,visibleForm, model, dispatch} = this.props;
		console.log("cor=u", this.props)
		return (
		<SubForm heading={'Course Pack Info'} isVisible={visibleForm=='CourseInfoForm'} form={'CourseInfoForm'} dispatch={dispatch}>
			<TextInput label="coursePackNumber:" name="coursePackNumber" value={model.coursePackNumber} onChange={this.setVariable}  onBlur = {this.saveState}  />
			<TextInput label="title:" name="title" value={model.title} onChange={this.setVariable}  onBlur = {this.saveState}  />
			<TextInput label="subtitle:" name="subtitle" value={model.subtitle} onChange={this.setVariable}  onBlur = {this.saveState}  />
		</SubForm>);
	}
});

export default CourseInfoForm;