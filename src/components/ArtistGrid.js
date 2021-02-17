import React from "react";
import { Link } from "react-router-dom";
import "../css/Artist.css";

const ArtistGrid = ({ data }) => {
    return (
        <ul className="artist__container">
            {data && data.map((artist, i) => (
                <Link key={i} to={{
                    pathname: `/artist/${artist.id}`,
                    state: { id: artist.id },
                }}>
                    <li className="playlist__item">
                        <img src={artist.images[1].url} alt="Artist Profile Pic" className="artist__pic__large" />
                        <span className="playlist__title">{artist.name}</span>
                    </li>
                </Link>
            ))}
        </ul>
    );
}

export default ArtistGrid;