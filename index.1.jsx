const React = require('react');
const ReactDOM = require('react-dom');
const {Component } = React;
const Redux = require('redux');
const Row = require('react-bootstrap/lib/Row');
const Col = require('react-bootstrap/lib/Col');
var Select = require('react-select');




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

const TextInput = ({label, value,  onChange}) => {
	var input;
	return(<FormField label={label}>
		<input type="text" value={value}  ref={node => {input=node;}} onChange={() => {
			onChange(input.value);
		}} />
	</FormField>);
};
const SelectInput = ({label, value}) => {
	return(<FormField label={label}>
		<Select name="form-field-name" value="one" options={options}  onChange={(value) => {onTitleChange(value);}}/>					
	</FormField>);
};




const PrevNextNav = () =>{
	return (
		<div>
			<button type="button" className="btn btn-primary">Previous</button>
			<button type="button" className="btn btn-primary">Next</button>
		</div>	
	);
}

const onCoverInfoChange = () => {
	
}


const CoverInformation = ({coursePack}) => {	
		
	const onChange = () => {
		store.dispatch({type:'UPDATE_COVERINFO', values:{coursePackNumber,title} });
	};	
	let inputCourePackNumber;
	return (
		
		// <SubForm heading={'Cover Information'}>
		// 	<TextInput label={'Course Pack Number'} value={coursePackNumber} onChange={ (value) => { coursePackNumber = value; onChange();}}  />
		// 	<TextInput label={'Title'} value={title} onChange={ (value) => { title = value; onChange();}}  />
		// 	<TextInput label={'Subtitle'} value={subtitle} onChange={ (value) => { subtitle = value; onChange();}} />					
		// </SubForm>	
		<SubForm heading={'Cover Information'}>
			<FormField label={'Course Pack Number:'}>
				<input type="text"   ref={node => {inputCourePackNumber=node;}} />
			</FormField>				
		</SubForm>	
	);
};



const PrintingDetailsForm = ({coursePack}) => {
	return (
		
		<SubForm heading={'Printing Details'}>
			<SelectInput label={'test 1'} />
		</SubForm>	
	);
};

const SubForm = React.createClass({

	render() {
			let {heading} = this.props;
		return(<div className="cmp-cinfo">
			<h3>{heading}</h3>
			<div>{this.props.children}</div>
			<PrevNextNav/>
		</div>);
	}
});

const Test1Comp = ({state}) => {
	var test = 123;
	console.log(state);
	return(		
		<form className="form-horizontal"  >						
				<CoverInformation coursePack={state} />	
				<PrintingDetailsForm coursePack={state} />	
		</form>
	);
}

const render = () => {
	ReactDOM.render(		
		<Test1Comp state={store.getState().coursePackVersion}  />, document.getElementById('root')
	);	
};

let json = {coursePackVersion: 
		{coursePackNumber:'ABC123', 
		title:'This is the title', 
		subtitle:'This is the subtitle'},
		selectListOptions:{
			DuplexOptions: ['One Sided', 'Two Sided'],
			InkColorOptions: ['No Colour', 'Full Color'],
			PaperColourOptions:['No Colour Paper', 'Colour Paper'],
			TabsOptions: ['No Tabs', 'Tabs']
		}
};
		
		


var options = [
    { value: 'one', label: 'One' },
    { value: 'two', label: 'Two' }
];

function logChange(val) {
    console.log("Selected: " + val);
}


///////////reducer//////////////

const coursePack = (state= json, action) => {
	console.log(action);
	
	console.log(result);
	switch(action.type){
		case 'UPDATE_COVERINFO':
			var result = {...state, coursePackVersion: {...state.coursePackVersion, coursePackNumber: action.values.coursePackNumber, title: action.values.title }};
			return result;
		default:
			return state;
	}  
}
const {createStore} = Redux;
const store = createStore(coursePack);
store.subscribe(render);
render();