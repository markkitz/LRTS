const React = require('react');
const {connect} = require('react-redux');
let CoursePackYearListing =({years, selectedYearId, selectCoursePackYearHandler}) => {
    var yearsHTML = years.map(y => {
        return <CoursePackYear id={y.id} year ={y.year} terms={y.terms} selectedYearId={selectedYearId} selectCoursePackYearHandler={selectCoursePackYearHandler}/>;
    });
    return( <div><h2>hello from listing</h2>
    {yearsHTML}
 </div>
    )   ;
};
CoursePackYearListing = connect(
    (state) => {
        console.log(state);
        return {years: state.coursePackYearListing.years, selectedYearId:state.coursePackYearListing.selectedYearId};
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
        {id == selectedYearId ? (<div>test</div>) : 
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
export default CoursePackYearListing;