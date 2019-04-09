import React from 'react';
import Home from './Home/Home';
import { MemoryRouter, Route, Switch } from "react-router-dom";
import SimpleAppBar from "../Components/SimpleAppBar/SimpleAppBar";
import HomeSounds from "./HomeSounds/HomeSounds";
import AwaySounds from "./AwaySounds/AwaySounds";

const Router = (props) => {
    return(
        <MemoryRouter>
            <React.Fragment>
                <SimpleAppBar title={'Soundboard'} />
                <Switch>
                    <Route exact path={'/'} component={ () => <Home />}/>
                    <Route path={'/sbh'} component={ () => <HomeSounds />}/>
                    <Route path={'/sba'} component={ () => <AwaySounds />}/>
                </Switch>
            </React.Fragment>
        </MemoryRouter>
    );

};
export default Router;