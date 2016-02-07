const React = require('react')
import "../css/listItem.css"
let ListItem = ({id, href, icon}) => {
  return (<a  className={'listItem'} href={href}>{icon} list item </a>)
}
export default ListItem
