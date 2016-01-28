const React = require('react');
const {connect} = require('react-redux');
import CoursePackTitle from '../containers/CoursePacks/CoursePackTitle.js'
//import BlockMenu from '../components/BlockMenu.js'<BlockMenu />
import CoursePackYearListing from '../containers/CoursePacks/CoursePackYearListing.js'
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import MyRawTheme from '../components/theme';

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
      <div>
        <CoursePackTitle coursePackNumber='1998' coursePackTitle='Quantitative Analysis Theory' school='School of Sustainable Building and Environmental Management' />

        <CoursePackYearListing/>
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
