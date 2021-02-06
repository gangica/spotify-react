import React from "react";
import "../css/Artist.css";

const Artist = ({ name, image }) => {

    return (
        <a href="/playlists">
            <li className="artist__info">
                <img src={image} alt="Artist Profile Pic" className="artist__pic" />
                <span style={{ marginLeft: 20, fontWeight: "bold" }}>{name}</span>
            </li>
        </a>
    );
}

export default Artist;