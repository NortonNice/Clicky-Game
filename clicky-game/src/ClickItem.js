import React from 'react';
import './ClickItem.css';
import './assets/images/cash.jpg';
import './assets/images/chuck.jpg';


const ClickItem = (props) => {
    return (
        <div>
        <img src={require('./assets/images/cash.jpg')} className = "clickItem" alt = "CASH " />
        </div> 
    )
}

export default ClickItem;
