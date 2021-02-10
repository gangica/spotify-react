import React, { useState, useEffect } from "react";
import { useStateValue } from "../context/StateProvider";
import "../css/Artist.css";
import TrackList from "./TrackList";
import axios from 'axios';
import FeatureChart from "./FeatureChart";
import { Link } from "react-router-dom";

const Playlist = ({ location }) => {
    const { data } = location.state;
    const [{ token }] = useStateValue();
    const [playlistTracks, setPlaylistTracks] = useState();
    const [trackIds, setTrackIds] = useState();
    const [features, setFeatures] = useState();
    
    const headers = {
        'Authorization': 'Bearer ' + token,
    };
    
    useEffect(() => {
        // Get tracks from playlist
        axios(`https://api.spotify.com/v1/users/spotify/playlists/${data.id}/tracks`, {
            method: 'GET',
            headers
        })
            .then(res => setPlaylistTracks(res.data.items.map(item => item.track)))
    }, [])

    useEffect(() => {
        // get track ids
        if (playlistTracks) {
            setTrackIds(playlistTracks.map(item => item.id).join(","))
        }
    }, [playlistTracks])

    useEffect(() => {
        if (trackIds) {
            // Get audio feature for all tracks
            axios(`https://api.spotify.com/v1/audio-features?ids=${trackIds}`, {
                method: 'GET',
                headers
            })
                .then(res => setFeatures(res.data.audio_features))
        }
    }, [trackIds])
    
    return (
        <div className="user__column">
            <div className="playlist__container2">
                {data && (<div className="playlist__info">
                    <div className="center">
                        <img src={data.images[0].url} alt="Track Pic" className="playlist__pic" />
                    </div>
                    <div className="playlist__detail">
                        <h1 className="playlist__name">{data.name}</h1>
                        <h4 className="playlist__owner">{data.tracks.total + " TRACKS · By " + data.owner.display_name}</h4>
                        <Link to={{
                            pathname: "/recommendation",
                            state: { ids: trackIds }
                        }}><button className="more spotify">
                            Get Recommendations
                        </button></Link>
                        {features && <FeatureChart data={features} />}
                    </div>
                </div>)}

                {playlistTracks && <div className="playlist__tracks"><TrackList data={playlistTracks} /></div>}
                
            </div></div>
    );
}

export default Playlist;