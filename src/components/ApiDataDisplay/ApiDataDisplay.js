import React from 'react';
import './ApiDataDisplay.css';

const ApiDataDisplay = (props) => {
    
    const {amount,asset,referral_earnings,user} = props.currencyName;
    return (
        <div className='api-data'>
            <p>{asset}</p>
            <p>{amount}</p>
            <p>{user.slice(0,12)}</p>
            <p>{referral_earnings}</p>
        </div>
    );
};

export default ApiDataDisplay;