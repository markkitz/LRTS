// The reducer to manage navigation-related state
function navigationReducer(state = {
  location: null,
}, action) {

  switch (action.type) {
    case 'NAVIGATION/COMPLETE':
      return { ...state,  routeName: action.route.name,  options: action.route.options      }
    default:
      return state
  }
}
export default navigationReducer
