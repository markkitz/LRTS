const React = require('react')
import css from '../css/widget.css'

const Widget = ({heading, children}) => {
   return (
      <div className={css.widget}>
         <header className={css.header}>{heading}</header>
         <div>
            {children}
         </div>

      </div>
   )
}
export default Widget
