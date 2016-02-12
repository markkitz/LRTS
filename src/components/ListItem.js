const React = require('react')
import css from "../css/listItem.css"
let ListItem = ({id, href, icon, children}) => {
  return (<a  className={css.widget} href={href}>{icon} {children} </a>)
}
export default ListItem
