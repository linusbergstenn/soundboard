import React from 'react';
import MusicButton from "../../Components/MusicButton/MusicButton";
import {array} from "prop-types";

const AwaySounds = (props) => {
    let importAll = (r) => {
        let music = {};
        r.keys().map((item, index) => { music[item.replace('./', '')] = r(item); });
        return music;
    };
    const music = importAll(require.context('../../sounds/AwayTeam', false, /\.mp3$/));
    var result = Object.keys(music).map(function(key) {
        return [String(key), music[key]];
    });
    console.log('result: ', result);

    let mapRes = result.map( (music, index) => {
        console.log('mapRes music: ', music);
        return(
            <div key={index}>
                <MusicButton title={music[0]} src={music[1]}/>
            </div>
        )
    });

    return(
        <div className={'AwaySounds'}>
            {mapRes}
        </div>
    )
};
export default AwaySounds;