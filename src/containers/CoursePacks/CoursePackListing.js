const React = require("react")
const {connect} = require('react-redux')
import ListItem from '../../components/ListItem.js'
import Book from 'material-ui/lib/svg-icons/av/library-books'
import css from '../../css/coursePackListing.css'
import Colors from 'material-ui/lib/styles/colors';
let CoursePackListing =({listing}) => {
  var listItems = listing.map( l => {
     return <ListItem key={"cpli" + l.id} title={listing.title} href={"#/coursepack/" + l.id} icon={<Book color={Colors.deepPurple900} />} >
      <div className={css.title}>{l.title}</div>
      <div className={css.coursePackNumber}><span>Course Pack Number:</span> {l.coursePackNumber}</div>
      <div className={css.school}>{l.school}</div>
     </ListItem>
  })
  console.log("LISTITEMS",    listItems)
  return (
    <div className={css.widget}>
      {listItems}
    </div>)

}
CoursePackListing = connect( (state) => {
  let listing = state.coursePackListing;
  return  {listing}
})(CoursePackListing)
export default CoursePackListing
