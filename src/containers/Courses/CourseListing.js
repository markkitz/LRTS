const React = require("react")
const {connect} = require('react-redux')
import ListItem from '../../components/ListItem.js'
import Course from 'material-ui/lib/svg-icons/action/account-balance'
import css from '../../css/courseListing.css'
let CourseListing =({listing}) => {
  var listItems = listing.map( c => {
     return <ListItem key={"cpli" + c.id} title={listing.title} href={"#/course/" + c.id} icon={<Course color="#4285f4" />} >
      <div className={css.courseCode}>{c.code}</div>
      <div className={css.title}>{c.title}</div>
      <div className={css.school}>{c.school}</div>
     </ListItem>
  })
  console.log("LISTITEMS",    listItems)
  return (
    <div className={css.widget}>
      {listItems}
    </div>)

}
CourseListing = connect( (state) => {
  let listing = state.courseListing;
  return  {listing}
})(CourseListing)
export default CourseListing
