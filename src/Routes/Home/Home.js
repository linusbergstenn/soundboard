import React from 'react';

import { NavLink } from "react-router-dom";

import './Home.scss';

const Home = (props) => {

    return(
        <div className={'Home'}>
            <div className={'container'}>
                <NavLink to={'/sbh'} className={'home-container'}> <div /> </NavLink>
            </div>
            <div className={'container'}>
                <NavLink to={'/sba'} className={'away-container'}> <div /></NavLink>
            </div>
        </div>
    );
};
export default Home