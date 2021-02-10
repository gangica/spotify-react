import React from "react";
import { useStateValue } from "../context/StateProvider";
import TopArtists from "./TopArtists";
import TopTracks from "./TopTracks";
import "../css/User.css";

const User = () => {
    const [{ user, following, playlists }] = useStateValue();

    return (user && (
        <div className="user">
            <h1>{user.display_name}</h1>
            <div className="user__info">
                <div className="user__stats">
                    <h2>{user.followers.total}</h2>
                    <span>Followers</span> 
                </div>
                <div className="user__stats">
                    <h2>{following}</h2>
                    <span>Following</span> 
                </div>
                <div className="user__stats">
                    <h2>{playlists && playlists.length}</h2>
                    <span>Playlists</span> 
                </div>
            </div>
            <div className="player_body"> 
                <TopArtists />
                <TopTracks />
            </div>
            
        </div>
    ))
}

export default User;