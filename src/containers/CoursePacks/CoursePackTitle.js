import React from 'react';
import '../../css/CoursePackTitle.css';
const CoursePackTitle =({coursePackTitle, school, coursePackNumber}) => {
return (<div className="coursePack-title">
          <h1>{coursePackTitle}</h1>
          <h2>{school}</h2>
          <div>Course Pack: {coursePackNumber}</div>
        </div>)
}
export default CoursePackTitle;
