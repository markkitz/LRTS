const React = require('react');
let MenuBar = ({menuItems, currentItem, menuBarClickHandler}) => {
    return (<div className="mk-menu-bar">
            {menuItems.map(i => {
                let isSelected = currentItem == i.key;
                
                return (isSelected? <span className={'selected'}>{i.value}</span> : <span onClick={() => menuBarClickHandler(i.key)}>{i.value}</span>	)})
            }
        </div>);
}
export default MenuBar;