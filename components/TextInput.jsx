const React = require('react');
import FormField from './FormField.jsx'

const TextInput = React.createClass({
	  
	render() {
			let {label, name, value, onChange, onBlur} = this.props;
			const handleBlur = (e) => {
				console.log('handleblur ');
				onBlur(e);
			}
		
		return(
			<FormField label={label}>
				<input type="text" name={name} value={value} onChange={ (e) => {onChange(e.target.name, e.target.value) }} onBlur = {handleBlur} />
			</FormField>
			);
	}
});
export default TextInput;
