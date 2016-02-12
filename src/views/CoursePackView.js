const React = require('react');
const {connect} = require('react-redux');
import CoursePackTitle from '../containers/CoursePacks/CoursePackTitle.js'
import CoursePackArchiveListing from '../containers/CoursePacks/CoursePackArchiveListing.js'
//import BlockMenu from '../components/BlockMenu.js'<BlockMenu />
import CoursePackYearListing from  '../containers/CoursePacks/CoursePackYearListing.js'
import CoursePackCoursesWidget from '../containers/CoursePacks/Widgets/CoursePackCoursesWidget.js'
import CoursePackUserWidget from '../containers/CoursePacks/Widgets/CoursePackUserWidget.js'
import CoursePackProgramWidget from '../containers/CoursePacks/Widgets/CoursePackProgramWidget.js'
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import MyRawTheme from '../components/theme';
import css from '../css/coursePackView.css'

const CoursePackView = React.createClass({

  //the key passed through context must be called "muiTheme"
  childContextTypes : {
    muiTheme: React.PropTypes.object,
  },

  getChildContext() {
    return {
      muiTheme: ThemeManager.getMuiTheme(MyRawTheme),
    };
  },

  //the app bar and button will receive our theme through
  //context and style accordingly
  render () {
    return (
      <div className={css.page}>
         <div className={css.view}>
           <CoursePackTitle coursePackNumber='1998' coursePackTitle='Quantitative Analysis Theory' coursePackSubtitle='Supplementary Notes - 14th edition' school='School of Sustainable Building and Environmental Management' />
           <CoursePackYearListing/>
           <CoursePackArchiveListing />
         </div>
         <div className={css.sidePanel}>
            <CoursePackProgramWidget />
            <CoursePackCoursesWidget />
            <CoursePackUserWidget />
         </div>
      </div>
    );
  },
});

// let CoursePackView = () => {
//   return (<div>
//           <CourseTitle courseCode='ABC123' courseTitle='Test course' />
//           <BlockMenu />
//           <CoursePackYearListing/>
//         </div>)
// }
export default CoursePackView
