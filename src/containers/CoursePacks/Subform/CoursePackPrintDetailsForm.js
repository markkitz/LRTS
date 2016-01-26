const React = require('react');
const ReactRedux = require('react-redux');
const {connect} = ReactRedux;
import SubForm  from '../../../components/Subform.js'
import TextField from 'material-ui/lib/text-field';
import SelectField from 'material-ui/lib/select-field';
import MenuItem from 'material-ui/lib/menus/menu-item';
import Divider from 'material-ui/lib/divider'
import Toggle from 'material-ui/lib/toggle';

const CoursePackPrintDetailsForm = ({visibleForm, model, onPropertyChange}) =>
        {
          let form ="CoursePackPrintDetailsForm";
          let actionType = "UPDATE_PRINTDETAILS"

            return (
                    <SubForm form={form}>
                    <h3>Printing details and paper specification</h3>
                      <div>
                          <SelectField floatingLabelText="Duplex" value={model.duplex} onChange={(e, index, value) => onPropertyChange(actionType, "duplex", value)}>
                              <MenuItem value={1} primaryText="One sided"/>
                              <MenuItem value={2} primaryText="Two Sided"/>
                              <MenuItem value={3} primaryText="One & Two Sided"/>
                          </SelectField>
                        </div>
                        <div>
                            <SelectField floatingLabelText="Ink Colour" value={model.inkColour} onChange={(e, index, value) => onPropertyChange(actionType, "inkColour", value)}>
                                <MenuItem value={1} primaryText="No Colour"/>
                                <MenuItem value={2} primaryText="Print as per originals"/>
                                <MenuItem value={3} primaryText="Specific pages in colour"/>
                            </SelectField>
                          </div>
                          <div style={{paddingTop:'25px', paddingBottom:'25px'}}>

                              <Toggle  name="toggleName1"  value="{addTabs}"  label="Add tabs to Course Pack" labelPosition="right" />

                            </div>

                            <h3>Binding</h3>
                            <div>
                                <SelectField floatingLabelText="Binding" value={model.binding} onChange={(e, index, value) => onPropertyChange(actionType, "binding", value)}>
                                    <MenuItem value={1} primaryText="Hole punch"/>
                                    <MenuItem value={2} primaryText="Cerlox comb"/>
                                    <MenuItem value={3} primaryText="Coil ring"/>
                                </SelectField>

                              </div>
		                </SubForm>
           );
        }



export default CoursePackPrintDetailsForm;
//<TextInput label="field1:" name="field1" value={model.field1} onChange={setVariable}  onBlur = {saveState}  />
