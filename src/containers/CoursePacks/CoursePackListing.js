const React = require("react")
const {connect} = require('react-redux')
import ListItem from '../../components/ListItem.js'
import Delete from 'material-ui/lib/svg-icons/action/delete'
import css from '../../css/coursePackListing.css'
let CoursePackListing =({listing}) => {
  var listItems = listing.map( l => { return <ListItem title={listing.title} href={"#/coursepack/" + l.id} icon={<Delete />} />})
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
