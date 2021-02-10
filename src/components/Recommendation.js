import React, { useState, useEffect } from "react";
import TrackList from "./TrackList";
import { useStateValue } from "../context/StateProvider";
import axios from 'axios';

const Recommendation = ({ location }) => {
    const [{ token }] = useStateValue();
    const [recommendation, setRecommendation] = useState();

    const shuffledTracks = location.state.ids;
    const seed_tracks = shuffledTracks.split(",").sort(() => 0.5 - Math.random()).slice(0, 1).join(",");
    const seed_artists = '';
    const seed_genres = '';

    const headers = {
        'Authorization': 'Bearer ' + token
    };

    useEffect(() => {
        // Get recommendation
        axios.get(`https://api.spotify.com/v1/recommendations?seed_tracks=${seed_tracks}&seed_artists=${seed_artists}&seed_genres=${seed_genres}`, {
            method: 'GET',
            headers
        })
            .then(res => setRecommendation(res.data.tracks))
    }, [])

    return (
        <div className="user__column">
            <div className="tracklist__container">
                <div className="heading">
                    <h2 className="user__info">Recommended Tracks</h2>
                </div>
                {recommendation && <TrackList data={recommendation} />}
            </div>
        </div>
    )
}

export default Recommendation;