const React = require('react');
const {connect} = require('react-redux');
const actions = require('../actions/actions.js');
import CoursePackModule from './CoursePackModule.jsx'
import '../css/course-pack-terms.css'

let CoursePackTerms = ({terms}) => {
    console.log(terms);
    let coursePackTermList = terms.map( t => { return <CoursePackTerm key={'coursePackTerm_' + t.id} term={t}/>});
    return (<div>{coursePackTermList}</div> )
}
let CoursePackTerm = ({term, checkIfSelected, selectTerm}) => {
    var isSelected =  checkIfSelected(term.id);
    console.log(term.id, isSelected);
    return isSelected ? 
     <CoursePackModule id={term.id}/> :
     <div className='cpt' onClick={() => {selectTerm(term.id)} }>{term.term}</div>
}

CoursePackTerm = connect(
    (state) => {
        const checkIfSelected = (id) => { return id == state.coursePackYearListing.selectedTerm;};
        return {checkIfSelected};
    },
    (dispatch) => {
        const selectTerm = (id) => {
            
            dispatch({type:"SELECT_TERM", termId:id});
            
            dispatch(actions.loadCoursePackModuleFormForTerm(id));
        }
        return {selectTerm};
    }
)(CoursePackTerm);
export default CoursePackTerms;