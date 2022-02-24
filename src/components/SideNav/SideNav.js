import React from 'react';
import './SideNav.css';

const SideNav = () => {
    return (
        <div className='side-nav'>
            <h3 className='text-center'>Name</h3>
            <ul>
                <li><span><i className="fa-solid fa-house-user"></i></span> Home</li>
                <li>Section 1</li>
                <li>Section 2</li>
                <li>Section 3</li>
                <li>Section 4</li>
                <li>Section</li>
                <li>Section 6</li>
                <li>Section 7</li>
                <li>Section 8</li>
                <li><span><i className="fa-solid fa-book"></i></span> Documentation</li>
            </ul>
            <div className='sidenav-bottom'>
                <div className='display-dollar'>
                    <span>$0.90</span>
                </div>
                <button className='side-button'>Buy $XYZ</button>
            </div>
        </div>
    );
};

export default SideNav;