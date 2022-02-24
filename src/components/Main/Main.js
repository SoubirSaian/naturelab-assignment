import React, { useEffect, useState } from 'react';
import ApiDataDisplay from '../ApiDataDisplay/ApiDataDisplay';
import './Main.css';

const Main = () => {

    const [cryptoCurrencies,setCryptoCurrencies] = useState([]);

    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/akshita151199/APIs/main/data')
        .then(res => res.json())
        .then(data => setCryptoCurrencies(data.data));
    },[]);

    return (
        <div className='main-part'>
            <div className='title-bar'>
                <h6>Section</h6>
                <span>0.2$XYZ</span>
            </div>
            <div className='main-detail'>
                <p>Lorium Ipsum is simply dummy text of the printing and typesetting industry</p>
                <button>Tutorial</button>
            </div>
            <div className='main-reward'>
                <div>
                    <h6>Your Rewards</h6>
                    <h3>$0.26231428</h3>
                    <span>$40 AVAX</span>
                    <span>$10 BNB</span>
                    <span>$210 BTC</span>
                </div>
                <button>Custom link</button>
            </div>
            <div className='main-fee'>
                <div>
                    <h4>12.5% of fee</h4>
                    <p>Your referral link for xyz</p>
                    <input type="text" placeholder='https://unityexchange.design'/>
                </div>
                <div>
                    <h4>12.5% of fee</h4>
                    <p>Your referral link for xyz</p>
                    <input type="text" placeholder='https://unityexchange.design'/>
                </div>
            </div>
            <div>
                <div className='api-tab'>
                    <p style={{'borderBottom' : '2px solid #3772ff','paddingBottom' : '5px'}}>First Tab</p>
                    <p style={{'color' : '#808191'}}>Second Tab</p>
                </div>
                <div className='api-title'>
                    <p>ASSET</p>
                    <p>AMOUNT</p>
                    <p>USER ACCOUNT</p>
                    <p>REFERRAL EARNING</p>
                </div>
                <div>
                    {
                        cryptoCurrencies.map(currency => <ApiDataDisplay key={currency.user} currencyName={currency}></ApiDataDisplay>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Main;