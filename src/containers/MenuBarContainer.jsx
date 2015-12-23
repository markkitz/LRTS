const React = require('react');
const {connect} = require('react-redux');
import MenuBar  from '../components/MenuBar.jsx';

let MenuBarContainer = ({menuItems, currentForm, menuBarClickHandler}) => {
    return (<MenuBar menuItems={menuItems} currentItem={currentForm} menuBarClickHandler={menuBarClickHandler} />);
}

MenuBarContainer = connect (
    (state) => {
        let {forms, currentForm} = state.formState        
        return {menuItems:forms, currentForm};
    },
    (dispatch) => {
        const menuBarClickHandler = (form) => {
          dispatch({type:'NAVIGATE_TO_FORM', form});
        };
        return {menuBarClickHandler};
    }
)(MenuBarContainer);

export default MenuBarContainer;