const React = require('react');
const ReactDOM = require('react-dom');
const {Component } = React;


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




const Test1Comp = ({testProp}) => {
	var test = 123;
	console.log(testProp);
	return(
		<div className="test1" >
			<Header/>
			<div>{testProp}</div>
			<Wrapper test={'test'} />
		</div>
	);
}



const render = () => {
	ReactDOM.render(		
		<Test1Comp testProp={'Mark Kitz'}  />, document.getElementById('root')
	);	
};

render();