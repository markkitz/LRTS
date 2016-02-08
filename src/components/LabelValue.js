const React = require('react');
import css from '../css/labelValue.css'

const LabelValue = ({label, value}) => {
   return (
      <div className={css.widget}>
        <label>{label}</label>
        <div>{value}</div>
      </div>
   )
}
export default LabelValue
