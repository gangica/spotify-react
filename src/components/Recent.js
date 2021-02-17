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
            .then(res => setRecent(res.data.items.map(item => item.track))) 
    }, [])

    return (
        <div className="main">
            <div className="main__container">
                <div className="heading">
                    <h1 className="user__info">Recently Played Tracks</h1>
                </div>
                {recent && <TrackList data={recent} />}
            </div>
        </div>
    )
}

export default Recent;