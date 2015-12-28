const React = require('react');
let MenuBar = ({menuItems, currentItem, menuBarClickHandler}) => {
    return (<div className="mk-menu-bar">
            {menuItems.map(i => {
                let isSelected = currentItem == i.key;
                
                return (isSelected? <span key={'menubar_' + i.key }  className={'selected'}>{i.value}</span> : <span key={'menubar_' + i.key }  onClick={() => menuBarClickHandler(i.key)}>{i.value}</span>	)})
            }
        </div>);
}
export default MenuBar;