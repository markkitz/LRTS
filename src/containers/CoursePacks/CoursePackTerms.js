const React = require('react');
const {connect} = require('react-redux');
const actions = require('../../actions/actions.js');
import CoursePackModule from './CoursePackModule.js'
import '../../css/coursePackTerm.css'

let CoursePackTerms = ({terms}) => {
    let coursePackTermList = terms.map( t => { return <CoursePackTerm key={'coursePackTerm_' + t.id} term={t}/>});
    return (<div>{coursePackTermList}</div> )
}
let CoursePackTerm = ({term, checkIfSelected, selectTerm}) => {
    var isSelected =  checkIfSelected(term.id);
    return isSelected ?
     <CoursePackModule id={term.id} termName={term.term} /> :
     <div className='coursePackTerm' onClick={() => {selectTerm(term.id)} }>
        <CoursePackTermIcon status={term.status} />
        <div>Course Pack - {term.term}</div>
        <div>Not test</div>
     </div>
}
let CoursePackTermIcon = ({status}) => {
  switch (status) {
    case 'approved':
      return (<div className='coursePackTerm-divIcon'><i className="fa fa-check" ></i></div>);
    case 'notStarted':
        return (<div className='coursePackTerm-divIcon'><i className="glyphicon glyphicon-unchecked" ></i></div>);
    case 'inProgress':
        return (<div className='coursePackTerm-divIcon'><i className="fa fa-clock-o" ></i></div>);
    default:
      return (<div className='coursePackTerm-divIcon'></div>);
  }
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
