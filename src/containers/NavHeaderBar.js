const React = require('react');
const {connect} = require('react-redux');
import css from '../css/navHeaderBar.css'
let NavHeaderBar = ({currentRouteName, routeTitles}) => {

  return (
    <nav className={css.widget}>
      <div className={css.c1}>
        <span className={css.c1Sp1}>
          <img  src="https://ssl.gstatic.com/bt/C3341AA7A1A076756462EE2E5CD71C11/1x/ic_menu_wht_1x.png" />
        </span>
        <span className={css.c1Sp2}>
          {routeTitles[currentRouteName]}
        </span>
      </div>
      <SearchInput />
    </nav>
  )
}
let SearchInput = () => {
  return (
         <div className={css.c2}>
          <div className={css.c2Sp1}>
            <div className={css.c2Sp1D}>
              <div className={css.c2Sp1DSrch1}>
                  <i className="glyphicon glyphicon-search"></i>
              </div>
              <div className={css.c2Sp1DSrch2}>
                  <input type="text" placeholder="Search…"  />
              </div>
            </div>
          </div>
        </div>)
}

NavHeaderBar = connect (
    (state) => {
        let currentRouteName = state.navigationReducer.routeName
        return {currentRouteName};
    }
)(NavHeaderBar);
export default NavHeaderBar;
