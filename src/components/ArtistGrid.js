import React from "react";
import { Link } from "react-router-dom";
import "../css/Artist.css";

const ArtistGrid = ({ data }) => {
    return (
        <ul id="playlist" className="playlist__container">
            {data && data.map(artist => (
                <Link to={{
                    pathname: `/artist/${artist.id}`,
                    state: { id: artist.id }
                }}>
                    <li key={artist.id} className="playlist__item">
                        <img src={artist.images[1].url} alt="Artist Profile Pic" className="artist__pic__large" />
                        <span className="playlist__title">{artist.name}</span>
                    </li>
                </Link>
            ))}
        </ul>
    );
}

export default ArtistGrid;