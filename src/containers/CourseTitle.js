import React from 'react';
import '../css/courseTitle.css';
const CourseTitle =({courseCode, courseTitle}) => {
return (<div className="course-title">
          <h1>{courseCode}</h1>
          <h2>{courseTitle}</h2>
        </div>)
}
export default CourseTitle;
