const React = require('react');
var SubForm = React.createClass(
	{
			handleOnPrevious()
	{
		this.props.dispatch({type:"PREVIOUS_CLICK", form: this.props.form})
	},
		handleOnNext()
	{
		this.props.dispatch({type:"NEXT_CLICK", form: this.props.form})
	},
		render:	function(){
			let {heading, isVisible} = this.props;
			
			if(isVisible)
			{
				return(				
					<div>
						<h2>{heading}</h2>
						{this.props.children}
						<PrevNextNav onPrevious ={this.handleOnPrevious} onNext = {this.handleOnNext} />
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
export default SubForm;