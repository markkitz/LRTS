import React from 'react';
import css from '../../css/CoursePackTitle.css';
const CoursePackTitle =({coursePackTitle, school, coursePackNumber, coursePackSubtitle}) => {
   console.log("css", css)
return (<div className={css.widget}>
          <h1> {coursePackTitle}</h1>
          <h2> {coursePackSubtitle} </h2>
          <div>{school}</div>
          <div>Course Pack: {coursePackNumber}</div>
        </div>)
}
export default CoursePackTitle;
