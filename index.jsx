const React = require('react');
const ReactDOM = require('react-dom');
const {Component } = React;
const Row = require('react-bootstrap/lib/Row');
const Col = require('react-bootstrap/lib/Col');

const Header = () => {
	return(
		<div className="hdr">header</div>	
	);
}

const Wrapper = ({test}) =>{
	console.log(test);
	return (

		<div>
			Wrapper
		</div>
	);
}

const CoursePackNav = () =>{
	return (
		<ul>
			<li>Change Type</li>
		</ul>
	);
}



const FormField= React.createClass({

	render() {
			let {label} = this.props;
		return(<Row>
				<Col sm={4} className="control-label">
				<label>{label} </label>
				</Col>
				<Col sm={8} >
				{this.props.children}
				</Col>
			</Row>);
	}
});

const TextInput = ({label, value}) => {
	return(<FormField label={label}>
		<input type="text" value={value} />
	</FormField>);
};

const CoverInformation = ({coverInfo}) => {
	return (
		
		<SubForm heading={'Cover Information'}>
			<div >
			
	
				<TextInput label={'Course Pack Number'} value={coverInfo.coursePackNumber} />
				<TextInput label={'Title'} value={coverInfo.title} />
				<TextInput label={'Subtitle'} value={coverInfo.subtitle} />
				
			</div>	
		</SubForm>	
	);
};

const SubForm = React.createClass({

	render() {
			let {heading} = this.props;
		return(<div className="cmp-cinfo">
			<h3>{heading}</h3>
			<div>{this.props.children}</div>
		</div>);
	}
});



const Test1Comp = ({state}) => {
	var test = 123;
	console.log(state);
	return(
		
		<form className="form-horizontal"  >
						
				<CoverInformation coverInfo={state.coverInfo} />
						
		</form>
	);
}



const render = () => {
	ReactDOM.render(		
		<Test1Comp state={state}  />, document.getElementById('root')
	);	
};

let state = {coverInfo: {coursePackNumber:'ABC123', title:'This is the title', subtitle:'This is the subtitle'}};

render();