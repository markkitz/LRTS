const React = require('react');
const {connect} = require('react-redux');
import CoursePackModule from './CoursePackModule.jsx'

let CoursePackYearListing =({isLoaded, years, selectedYearId, selectCoursePackYearHandler}) => {
    console.log('isLoaded', isLoaded)
    if(!isLoaded) {
        return <h2>loading</h2>;
    }
    var yearsHTML = years.map(y => {
        return <CoursePackYear key={'coursePackYear_' + y.id } id={y.id} year ={y.year} terms={y.terms} selectedYearId={selectedYearId} selectCoursePackYearHandler={selectCoursePackYearHandler}/>;
    });
    return( <div><h2>hello from listing</h2>
    {yearsHTML}
 </div>
    )   ;
};
CoursePackYearListing = connect(
    (state) => {
        
        return {isLoaded:state.coursePackYearListing.isLoaded, years: state.coursePackYearListing.years, selectedYearId:state.coursePackYearListing.selectedYearId};
    },
    (dispatch) => {
        const selectCoursePackYearHandler = (yearId) => {
            dispatch({type:'SELECT_COURSE_PACK_YEAR', yearId})
        }
        return { selectCoursePackYearHandler};
    }
)(CoursePackYearListing);

const CoursePackYear = ({id, year, terms, selectedYearId,selectCoursePackYearHandler}) => {
  return   (
      <div>
        {id == selectedYearId ? (<CoursePackTerms id={id} terms={terms}>test</CoursePackTerms>) : 
        (<div onClick={() => selectCoursePackYearHandler(id)}>
        <table className='cpyl-table'>
            <tbody>            
                <tr>
                    <td>{year}</td>
                    <td>Summer</td>
                    <td>Fall</td>
                    <td>Winter</td>
                    <td>Spring</td>
                </tr>
            </tbody>
        </table></div> )}
    </div>)
  ;
};

let CoursePackTerms = ({terms}) => {
    console.log(terms);
    let coursePackTermList = terms.map( t => { 
        console.log(t.isLoaded);
        return <CoursePackTerm term={t}/>})
    return (
        <div>{coursePackTermList}</div>
    )
}
let CoursePackTerm = ({term, checkIfSelected, dispatch}) => {
    var isSelected =  checkIfSelected(term.id);
    console.log(term.id, isSelected);
    return isSelected ? 
     <CoursePackModule id={term.id}/> :
     <div onClick={() => dispatch({type:"SELECT_TERM", termId:term.id})}>{term.term}</div>
}

CoursePackTerm = connect(
    (state) => {
        const checkIfSelected = (id) => { return id == state.coursePackYearListing.selectedTerm;};
        return {checkIfSelected};
    }
)(CoursePackTerm);




export default CoursePackYearListing;