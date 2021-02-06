import React, { useState, useEffect } from "react";
import { useStateValue } from "../context/StateProvider";
import "../css/Track.css";
import axios from 'axios';
import FeatureChart from "./FeatureChart";

import { convertTrackDuration, noteToKey, modeToMode } from "../context/util";

const TrackDetail = ({ location }) => {
    const { id } = location.state;
    const [{ token }] = useStateValue();
    const [info, setInfo] = useState(null);
    const [feature, setFeature] = useState(null);

    const headers = {
        'Authorization': 'Bearer ' + token
    };
    
    useEffect(() => {
        // Get track info
        axios(`https://api.spotify.com/v1/tracks/${id}`, {
            method: 'GET',
            headers
        })
            .then(info => {
                setInfo({
                    name: info.data.name,
                    artist: info.data.artists.map(a => a.name),
                    image: info.data.album.images[1].url,
                    album: info.data.album.name,
                    year: info.data.album.release_date.slice(0,4),
                    popularity: info.data.popularity,
                    duration: info.data.duration_ms,
                    href: info.data.external_urls.spotify
                });
            })

        // Get track feature
        axios(`https://api.spotify.com/v1/audio-features/${id}`, {
            method: 'GET',
            headers
        })
            .then(feature => {
                let temp = [];
                temp.push(feature.data);
                setFeature(temp);
            })
    }, [])

    return (
        <div className="user__column">
            <div className="tracklist__container">
                <div className="heading">
                    <h2 className="user__info">Track Info</h2>
                </div>
                
                {info && (<div className="track__info detail">
                    <img src={info.image} alt="Track Pic" />
                    <div className="detail__container">
                        <h1 className="detail__name">{info.name}</h1>
                        <h2 className="detail__artist">{info.artist.join(", ")}</h2>
                        <h4 className="detail__album">{info.album + " · " + info.year}</h4>
                        <a href={info.href} target="_blank" className="more spotify">
                            Play on spotify 
                        </a>
                    </div>
                </div>)}

                {(info && feature) && (<div className="detail__stats">
                    <div className="stats__item">
                        <h2 className="stats__num">{info.popularity + "%"}</h2>
                        <p className="stats__title">Popularity</p>
                    </div>
                    <div className="stats__item">
                        <h2 className="stats__num">{convertTrackDuration(info.duration)}</h2>
                        <p className="stats__title">Duration</p>
                    </div>
                    <div className="stats__item">
                        <h2 className="stats__num">{noteToKey(feature[0].key)}</h2>
                        <p className="stats__title">Key</p>
                    </div>
                    <div className="stats__item">
                        <h2 className="stats__num">{modeToMode(feature[0].mode)}</h2>
                        <p className="stats__title">Mode</p>
                    </div>
                    <div className="stats__item">
                        <h2 className="stats__num">{parseInt(feature[0].tempo)}</h2>
                        <p className="stats__title">Tempo (BPM)</p>
                    </div>
                </div>)}
                
                <div className="feature__chart">
                    {feature && <FeatureChart data={feature} />}
                </div>
               
            </div></div>
    );
}

export default TrackDetail;