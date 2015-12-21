const React = require('react');
const {Component} = React;
const Row = require('react-bootstrap/lib/Row');
const Col = require('react-bootstrap/lib/Col');

const FormField = React.createClass({

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

export default FormField;