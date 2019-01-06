import React from 'react';
import './ClickItem.css';


const ClickItem = (props) => {
    return (
        <div>
        <img src={require('./assets/images/cash.jpg')} className = "clickItem" alt = "CASH " />
        </div> 
    )
}

export default ClickItem;
