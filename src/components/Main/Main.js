import React from 'react';
import './Main.css';

const Main = () => {
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
                    <span>https://unityexchange.design</span>
                </div>
                <div>
                    <h4>12.5% of fee</h4>
                    <p>Your referral link for xyz</p>
                    <span>https://unityexchange.design</span>
                </div>
            </div>
        </div>
    );
};

export default Main;