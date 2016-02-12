const React = require('react');
import CoursePackTerms from './CoursePackTerms.js'
import StatusBar from '../../components/StatusBar.js'
import css from '../../css/coursePackYear.css'
import '../../css/statusBar.css'

const CoursePackYear = ({id, year, terms, selectedYearId,selectCoursePackYearHandler, unselectCoursePackYearHandler}) => {
    let tdTerms = terms.map(t => {
        let span = t.span ? t.span: 1
        let bar = t.status && t.status != "noChange" ? <StatusBar status={t.status} span={span}><div className={css.verionText}>{t.versionText}&nbsp;&nbsp;&nbsp;&nbsp;{t.versionNumber}</div></StatusBar> : null
        return <td key={'tdTerm_' + t.id} className={css.tdTerm}>
                  <div>{t.term}</div>
                  {bar}
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
               <div className={css.divYearTerms}>
                  <div className={css.divYear}>{year}</div>
                  <div className={css.divTerms}>
                    <table className={css.cpyTable}>
                        <tbody>
                            <tr>
                                {tdTerms}
                            </tr>
                        </tbody>
                    </table>
                 </div>
              </div>
          </div> )}
        </div>)
};




export default CoursePackYear;
