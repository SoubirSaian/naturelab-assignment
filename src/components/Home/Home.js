import React from 'react';
import SideNav from '../SideNav/SideNav';
import Main from '../Main/Main';
import './Home.css';

const Home = () => {
    return (
        <div className='home-page'>
            <SideNav></SideNav>
            <Main></Main>
        </div>
    );
};

export default Home;