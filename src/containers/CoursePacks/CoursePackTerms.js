const React = require('react');
const {connect} = require('react-redux');
const actions = require('../../actions/actions.js');
import CoursePackModule from './CoursePackModule.js'
import '../../css/coursePackTerm.css'
import StatusIcon from '../../components/StatusIcon'
import StatusString from '../../components/StatusString'

let CoursePackTerms = ({terms}) => {
    let coursePackTermList = terms.map( t => { return <CoursePackTerm key={'coursePackTerm_' + t.id} term={t}/>});
    return (<div>{coursePackTermList}</div> )
}
let CoursePackTerm = ({term, checkIfSelected, selectTerm}) => {
    var isSelected =  checkIfSelected(term.id);
    return isSelected ?
     <CoursePackModule id={term.id} termName={term.term} status={term.status}  /> :
     <div className='coursePackTerm' onClick={() => {selectTerm(term.id)} }>
        <StatusIcon status={term.status} />
        <div>Course Pack - {term.term}</div>
        <div><StatusString status={term.status} /></div>
     </div>
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
