const React = require('react');
import '../css/labelValue.css'
const LabelValue = ({label, value}) => {

    return (
      <div className="labelValue">
        <label>{label}</label>
        <div>{value}</div>
      </div>
    )

}
export default LabelValue
