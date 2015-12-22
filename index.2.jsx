const React = require('react');
const ReactDOM = require('react-dom');
const {Component } = React;
import TextInput  from './components/TextInput.jsx'

var CourseInfoForm = React.createClass(
{
	isDirty:false,
	getInitialState: function() {
		return this.props.courseInfo;
  	},
	saveState: function(e) {
		if(this.isDirty)
		{
			console.log("save");
		}
		this.isDirty =false;
	},
	setVariable(name, value) {
		this.isDirty = true;
		this.setState({[name]: value});
	},
	render: function() {
		const {onPrevious, onNext,visibleForm} = this.props;
		return (
		<SubForm heading={'Course Pack Info'} isVisible={visibleForm=='CourseInfoForm'} onPrevious ={onPrevious} onNext = {onNext}>
			<TextInput label="coursePackNumber:" name="coursePackNumber" value={this.state.coursePackNumber} onChange={this.setVariable}  onBlur = {this.saveState}  />
			<TextInput label="title:" name="title" value={this.state.title} onChange={this.setVariable}  onBlur = {this.saveState}  />
			<TextInput label="subtitle:" name="subtitle" value={this.state.subtitle} onChange={this.setVariable}  onBlur = {this.saveState}  />
		</SubForm>);
	}
});

var PrintDetailsForm = React.createClass(
	{
		isDirty:false,
		getInitialState: function() {
			
			return this.props.printDetails;
		},
		
		
		saveState: function(e) {
			if(this.isDirty)
			{
				console.log("save");
			}
			this.isDirty =false;
		},
		setVariable(name, value) {
			this.isDirty = true;
			this.setState({[name]: value});
		},
		render:function() {
			const {onPrevious, onNext, visibleForm} = this.props;
			return(
				<SubForm heading={'Printing Details'} isVisible={visibleForm=='PrintDetailsForm'} onPrevious ={onPrevious} onNext = {onNext} >
					<TextInput label="field1:" name="field1" value={this.state.field1} onChange={this.setVariable}  onBlur = {this.saveState}  />
				</SubForm>
			);
		}		
	}
);

var SubForm = React.createClass(
	{
		render:	function(){
			let {heading, isVisible, onPrevious, onNext} = this.props;
			

			if(isVisible)
			{
				return(				
					<div>
						<h2>{heading}</h2>
						{this.props.children}
						<PrevNextNav onPrevious ={onPrevious} onNext = {onNext} />
					</div>	
				);
			}
			else
			{
				return <div></div>;
			}
			
		}	
	}
);
const PrevNextNav = React.createClass({
	
	render: function() {
	const {onPrevious, onNext} = this.props;
	return (
		
		<div>
			<button type="button" className="btn btn-primary" onClick={onPrevious}>Previous</button>
			<button type="button" className="btn btn-primary" onClick={onNext}>Next</button>
		</div>	
	);
	}
});

const App = React.createClass({
	onPrevious:function(){
		this.visibleForm = 'CourseInfoForm';
		this.forceUpdate();
	},
	onNext:function(){
		this.visibleForm = 'PrintDetailsForm';
		this.forceUpdate();
		
	},
	visibleForm: 'CourseInfoForm',
	render: function(){
		return(
		<div>
			<CourseInfoForm visibleForm={this.visibleForm}  courseInfo={json.coursePack.courseInfo} onPrevious ={this.onPrevious} onNext = {this.onNext}   />
			<PrintDetailsForm visibleForm={this.visibleForm} printDetails={json.coursePack.printDetails} onPrevious ={this.onPrevious} onNext = {this.onNext}  />
		</div>);
	}	
});


const render = () => {
	ReactDOM.render(		
		<App/>
		, document.getElementById('root')
	);	
};

var json = {
	coursePack:{
		courseInfo:{
			coursePackNumber:'ABC123', 
			title:'This is the title', 
			subtitle:'This is the subtitle'
		},
		printDetails: {
			field1: 'test'
		}
	}
};
render();