import React from 'react';

import { NavLink } from "react-router-dom";
import { PlayArrowOutlined } from '@material-ui/icons'

import './Home.scss';

const Home = (props) => {

    return(
        <div className={'Home'}>
            <div className={'container home-container'}>
                <NavLink to={'/sbh'}> <p className={'cta-icon'}> Hemmalag </p> </NavLink>
            </div>
            <div className={'container away-container'}>
                <NavLink to={'/sba'}> <p className={'cta-icon'}> Bortalag </p> </NavLink>
            </div>
        </div>
    );
};
export default Home