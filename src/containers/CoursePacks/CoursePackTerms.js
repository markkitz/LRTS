const React = require('react');
const {connect} = require('react-redux');
const {SELECT_TERM} = require('../../actions/actions.js');
const actions = require('../../actions/actions.js');
import CoursePackModule from './CoursePackModule.js'
import StatusIcon from '../../components/StatusIcon'
import StatusString from '../../components/StatusString'
import css from '../../css/coursePackTerm.css'

let CoursePackTerms = ({terms}) => {
    let coursePackTermList = terms.map( t => { return <CoursePackTerm key={'coursePackTerm_' + t.id} term={t}/>});
    return (<div>{coursePackTermList}</div> )
}
let CoursePackTerm = ({term, checkIfSelected, selectTerm}) => {
    var isSelected =  checkIfSelected(term.id);
    return isSelected ?
     <CoursePackModule id={term.id} termName={term.term} termStatus={term.status} /> :
     <div className={css.term} onClick={() => {selectTerm(term.id)} }>
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
            dispatch({type:SELECT_TERM, termId:id});
            dispatch(actions.loadCoursePackModuleFormForTerm(id));
        }
        return {selectTerm};
    }
)(CoursePackTerm);
export default CoursePackTerms;
