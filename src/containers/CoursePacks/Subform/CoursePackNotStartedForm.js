const React = require('react');
const ReactRedux = require('react-redux');
const {connect} = ReactRedux;
import SubForm  from '../../../components/Subform'
import css from '../../../css/subform.css'
import RaisedButton from 'material-ui/lib/raised-button';
let CoursePackNotStartedForm =   ({dispatch}) =>
      {

        const createDraftClick = () => dispatch({type:"COURSEPACK_CREATE_DRAFT"})

        let form ="CoursePackReviewForm";
        let actionType = "UPDATE_REVIEW"
        let styles = {
            button: {
              margin: 12,
            },

          };

          return (
            <div className={css.sf}>
                <table>
                    <tr>
                      <td><RaisedButton
                           label="No Changes" secondary={true}
                           style={styles.button}
                         /></td>
                      <td>
                        <h3>There are no changes.</h3>
                        <p>The last course pack used for Fall 2014 is good.</p>
                        </td>
                    </tr>
                    <tr>
                      <td><RaisedButton onClick={createDraftClick}
                           label="Create Draft" secondary={true}
                           style={styles.button}
                         /></td>
                      <td>
                        <h3>Changes required.</h3>
                        <p>We need to upload a new course pack for this term.</p>
                        </td>
                    </tr>
                </table>
            </div>

          );
      };

CoursePackNotStartedForm = connect(



)(CoursePackNotStartedForm);

export default CoursePackNotStartedForm;
