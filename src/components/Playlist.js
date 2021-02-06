import React, { useState, useEffect } from "react";
import { useStateValue } from "../context/StateProvider";
import "../css/Artist.css";
import TrackList from "./TrackList";
import axios from 'axios';
import FeatureChart from "./FeatureChart";

const Playlist = ({ location }) => {
    const { data } = location.state;
    const [{ token }] = useStateValue();
    const [playlistTracks, setPlaylistTracks] = useState();
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
            .then(tracks => {
                let temp = [];
                tracks.data.items.map(item => temp.push(item.track));
                setPlaylistTracks(temp);
            })
    }, [])

    useEffect(() => {
        if (playlistTracks) {
            let ids = playlistTracks.map(t => t.id).join(",");

            // Get audio feature for all tracks
            axios(`https://api.spotify.com/v1/audio-features?ids=${ids}`, {
                method: 'GET',
                headers
            })
                .then(f => {
                    setFeatures(f.data.audio_features);
                })  
        }
    }, [playlistTracks])
    
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
                        <button className="more spotify">
                            Get Recommendations
                        </button>
                        {features && <FeatureChart data={features} />}
                    </div>
                </div>)}

                {playlistTracks && <div className="playlist__tracks"><TrackList data={playlistTracks} /></div>}
                
            </div></div>
    );
}

export default Playlist;