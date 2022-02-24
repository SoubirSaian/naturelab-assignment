import React from 'react';
import SideNav from '../SideNav/SideNav';
import Main from '../Main/Main';
import './Home.css';
import RightSide from '../RightSide/RightSide';

const Home = () => {
    return (
        <div className='home-page'>
            <SideNav></SideNav>
            <Main></Main>
            <RightSide></RightSide>
        </div>
    );
};

export default Home;