const React = require('react')
import css from "../css/listItem.css"
let ListItem = ({id, href, icon}) => {
  return (<a  className={css.widget} href={href}>{icon} list item </a>)
}
export default ListItem
