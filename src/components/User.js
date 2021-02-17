import React from "react";
import { useStateValue } from "../context/StateProvider";
import TopArtists from "./TopArtists";
import TopTracks from "./TopTracks";
import avatar from "../icons/avatar.png";
import "../css/User.css";

const User = () => {
    const [{ user, following, playlists }] = useStateValue();

    const logout = () => {
        window.localStorage.removeItem('spotify_access_token');
        window.location.reload();
    }

    return (user && (
        <div className="main">
            {user.images.length > 0 ? (<img src={user.images[0].url} alt="avatar" className="avatar" />)
                : (<img src={avatar} alt="avatar" className="avatar" />)}            
            <h1>{user.display_name}</h1>
            <div className="user__info">
                <div className="user__stats">
                    <h1>{user.followers.total}</h1>
                    <span>Followers</span>
                </div>
                <div className="user__stats">
                    <h1>{following}</h1>
                    <span>Following</span>
                </div>
                <div className="user__stats">
                    <h1>{playlists && playlists.length}</h1>
                    <span>Playlists</span>
                </div>
            </div>
            <button className="more spotify" onClick={logout}>Logout</button>
            
            <div className="list__container">
                <TopArtists />
                <TopTracks />
            </div>

        </div>
    ))
}

export default User;