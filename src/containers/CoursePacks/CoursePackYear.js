const React = require('react');
import CoursePackTerms from './CoursePackTerms.js'
import StatusBar from '../../components/StatusBar.js'
import css from '../../css/coursePackYear.css'
import '../../css/statusBar.css'

const CoursePackYear = ({id, year, terms, selectedYearId,selectCoursePackYearHandler, unselectCoursePackYearHandler}) => {
    let tdTerms = terms.map(t => {
        return <td key={'tdTerm_' + t.id}>
                  <div>{t.term}</div>
                  <StatusBar status={t.status} />
                </td>
              }
      );
    return(<div>
            {id == selectedYearId ? (
                <div className={css.selected}>
                <div className={css.closeBtn} onClick={() => unselectCoursePackYearHandler()}>
                    <i className="glyphicon glyphicon-remove"></i>
                </div>
                    <h2>{year}</h2>
                    <CoursePackTerms  id={id} terms={terms}/>
                </div>) :
            (<div className={css.cpy}  onClick={() => selectCoursePackYearHandler(id)}>
              <table className={css.cpyTable}>
                  <tbody>
                      <tr>
                          <td>{year}</td>
                          {tdTerms}
                      </tr>
                  </tbody>
              </table>
          </div> )}
        </div>)
};




export default CoursePackYear;
