import React, { useState, useEffect } from "react";
import TrackList from "./TrackList";
import { useStateValue } from "../context/StateProvider";
import axios from 'axios';

const Recent = () => {
    const [{ token }] = useStateValue();
    const [recent, setRecent] = useState();

    const headers = {
        'Authorization': 'Bearer ' + token
    };

    useEffect(() => {
        // // Get recently played
        axios('https://api.spotify.com/v1/me/player/recently-played', {
            method: 'GET',
            headers
        })
            .then(recent => {
                setRecent(recent.data.items.map(item => item.track))
            }) 
    }, [])

    return (
        <div className="user__column">
            <div className="tracklist__container">
                <div className="heading">
                    <h2 className="user__info">Recently Played Tracks</h2>
                </div>
                {recent && <TrackList data={recent} />}
            </div>
        </div>
    )
}

export default Recent;