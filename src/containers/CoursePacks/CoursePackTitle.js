import React from 'react';
import css from '../../css/CoursePackTitle.css';
const CoursePackTitle =({coursePackTitle, school, coursePackNumber}) => {
return (<div className={css.widget}>
          <h1>{coursePackTitle}</h1>
          <h2>{school}</h2>
          <div>Course Pack: {coursePackNumber}</div>
        </div>)
}
export default CoursePackTitle;
