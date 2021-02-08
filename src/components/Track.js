import React, { useEffect } from "react";
import "../css/Track.css";
import { convertTrackDuration } from "../context/util";
import { Link } from "react-router-dom";

const Track = ({ id, images, artists, name, duration, href }) => {
    return (
        <li className="track__info">
            <Link to={{
                pathname: "/detail",
                state: { id: id }
            }} className="track__info2">
            {images.length && <img src={images[2].url} alt="Track Pic" className="track__pic" />}

            <div className="track__container">
                <span style={{ fontWeight: "bold" }}>{artists.map(artist => artist.name).join(", ")}</span>
                <span style={{ marginTop: 5 }}>{name}</span>
            </div>
            <span className="track__duration">{convertTrackDuration(duration)}</span>
            </Link>
            
            <span style={{ margin: "auto"}}><a href={href} target="_blank" className="play">▶</a></span>
        </li>
    );
}

export default Track;