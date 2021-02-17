import React, { useEffect, useState } from "react";
import { useStateValue } from "../context/StateProvider";
import "../css/Artist.css";
import axios from 'axios';
import TrackList from "./TrackList";
import { capitaliseLetter, formatFollowers } from "../context/util";

const Artist = ({ location }) => {
    const { id } = location.state;
    const [{ token }] = useStateValue();
    const [info, setInfo] = useState();
    const [popularTracks, setPopularTracks] = useState();

    const headers = {
        'Authorization': 'Bearer ' + token
    };

    useEffect(() => {
        // Get artist info
        axios.get(`https://api.spotify.com/v1/artists/${id}`, {
            method: 'GET',
            headers
        })
            .then(res => setInfo(res.data));

        // Get artist's top tracks
        axios.get(`https://api.spotify.com/v1/artists/${id}/top-tracks?market=AU`, {
            method: 'GET',
            headers
        }) 
            .then(res => setPopularTracks(res.data.tracks));
    }, [])

    return (
        <div className="main">
            <div className="flex__container">
                {info && (<div className="playlist__info">
                    <div className="cover__img">
                        <img src={info.images[1].url} alt="Track Pic" style={{ margin: "20px 0" }} />
                    </div>
                    <div className="playlist__detail">
                        <h1 className="playlist__name">{info.name}</h1>
                        <h3>{formatFollowers(info.followers.total)} Followers</h3>
                        <a href={info.external_urls.spotify} target="_blank" rel="noreferrer" className="more spotify">
                            Follow on spotify
                        </a>
                    </div>
                </div>)}
                <div className="artist__tracks">
                    <h2 style={{ marginBottom: 0 }}>Genre</h2>
                    <h3 className="genre">{info && info.genres.map(g => capitaliseLetter(g)).join(", ")}</h3>
                    <h2>Popular Tracks</h2>
                    {popularTracks && <TrackList data={popularTracks} />}
                </div>
            </div></div>
    );
}

export default Artist;