const React = require("react")
import ListItem from '../../components/ListItem.js'
import Book from 'material-ui/lib/svg-icons/av/library-books'
import css from '../../css/coursePackArchiveListing.css'
import Colors from 'material-ui/lib/styles/colors';
let CoursePackArchiveListing =() => {
   let id = 0;
   return (
      <div>
         <div className={css.heading}>Archived Versions</div>
         <div>
            <ListItem key={"cpli" + id++} title="test1" href={"#/coursepack/"} icon={<Book color={Colors.deepPurple900} />} >
               <div className={css.title}>Minor Revision</div>
               <div className={css.versionNumber}>v1.01</div>
               <div className={css.publishDate}>February 1, 2014</div>
            </ListItem>
            <ListItem key={"cpli" + id++} title="test1" href={"#/coursepack/"} icon={<Book color={Colors.deepPurple900} />} >
               <div className={css.title}>Intial Version</div>
               <div className={css.versionNumber}>v1.00</div>
               <div className={css.publishDate}>July 15, 2013</div>
            </ListItem>
         </div>
      </div>
   )
}
export default CoursePackArchiveListing
