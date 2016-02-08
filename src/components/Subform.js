const React = require('react');
const ReactRedux = require('react-redux');
const {connect} = ReactRedux;
import {PREVIOUS_CLICK, NEXT_CLICK} from '../actions/actions.js'
import FlatButton from 'material-ui/lib/flat-button';
import css from '../css/subform.css'

let SubForm = ({ form, children, dispatch, isFirst, isLast}) => {

   let handleOnPrevious = ()  => {dispatch({type:PREVIOUS_CLICK, form: form})};
   let handleOnNext = () => {dispatch({type:NEXT_CLICK, form: form})};
   return(
      <div className={css.sf}>
          {children}
          <PrevNextNav onPrevious ={handleOnPrevious} onNext = {handleOnNext} isFirst={isFirst} isLast={isLast} />
      </div>
   );
};
SubForm = connect()(SubForm);

const PrevNextNav = ({onPrevious, onNext, isFirst, isLast}) => {
    return (
      <div className={css.sfPrevNextBtns}>
         <FlatButton label="Previous" disabled={isFirst} onClick={onPrevious} />
         <FlatButton label="Next" disabled={isLast}   onClick={onNext} />
      </div>
    );
};
export default SubForm;
