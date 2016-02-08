const React = require('react');
const {connect} = require('react-redux');
let Router = ({uniloc, routeViews, routeName}) => {
  let view = routeViews[routeName]
  if(view == null)
  {
    view = routeViews['root']
  }
  return (<div>
    <div>{view}</div>
    </div>)
}
Router = connect((state) => {
  console.log(state, state.navigationReducer.routeName)
  return{routeName:state.navigationReducer.routeName}})(Router)
//export Router

var routeHashWatcher = {
  watch: (dispatch, uniloc) => {
    const fn = () => {dispatch(navigationComplete(uniloc))}
    window.addEventListener('load', fn, false)
    window.addEventListener('hashchange', fn, false)
  }
}
function navigationComplete(uniloc) {
  return {
    type: 'NAVIGATION/COMPLETE',
    route: uniloc.lookup(window.location.hash.substr(1)),
  }
}

module.exports = {Router:Router, routeHashWatcher:routeHashWatcher }
