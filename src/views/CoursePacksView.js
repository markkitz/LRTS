const React = require('react');
const {connect} = require('react-redux');
import CourseTitle from '../containers/CourseTitle.js'
import BlockMenu from '../components/BlockMenu.js'
import CoursePackYearListing from '../containers/CoursePacks/CoursePackYearListing.js'

let CoursePackView = () => {
  return (<div>
          <CourseTitle courseCode='ABC123' courseTitle='Test course' />
          <BlockMenu />
          <CoursePackYearListing/>
        </div>)
}
export default CoursePackView
