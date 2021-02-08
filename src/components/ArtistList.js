import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../css/Artist.css";

const ArtistList = ({ data }) => {
    return (
        <div>
            <ul id="artistlist" className="list">
                {data.map(d => (
                    <Link to={{
                        pathname: `/artist/${d.id}`,
                        state: { id: d.id }
                    }}>
                        <li key={d.id} className="artist__info">
                            <img src={d.images[2].url} alt="Artist Profile Pic" className="artist__pic" />
                            <span style={{ marginLeft: 20, fontWeight: "bold" }}>{d.name}</span>
                        </li>
                    </Link>
                ))}
            </ul>
        </div>
    );
}

export default ArtistList;