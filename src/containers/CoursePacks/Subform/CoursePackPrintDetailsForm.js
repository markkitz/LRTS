const React = require('react');
const ReactRedux = require('react-redux');
const {connect} = ReactRedux;
import SubForm  from '../../../components/Subform.js'
import TextField from 'material-ui/lib/text-field';
import SelectField from 'material-ui/lib/select-field';
import MenuItem from 'material-ui/lib/menus/menu-item';
const CoursePackPrintDetailsForm = ({visibleForm, model, onPropertyChange}) =>
        {
          let form ="CoursePackPrintDetailsForm";
          let actionType = "UPDATE_PRINTDETAILS"

            return (
                    <SubForm form={form}>
                      <div>
                          <SelectField floatingLabelText="Duplex" value={model.duplex} onChange={(e, index, value) => onPropertyChange(actionType, "duplex", value)}>
                              <MenuItem value={1} primaryText="Never"/>
                              <MenuItem value={2} primaryText="Every Night"/>
                              <MenuItem value={3} primaryText="Weeknights"/>
                              <MenuItem value={4} primaryText="Weekends"/>
                              <MenuItem value={5} primaryText="Weekly"/>
                          </SelectField>
                        </div>
		                </SubForm>
           );
        }



export default CoursePackPrintDetailsForm;
//<TextInput label="field1:" name="field1" value={model.field1} onChange={setVariable}  onBlur = {saveState}  />
