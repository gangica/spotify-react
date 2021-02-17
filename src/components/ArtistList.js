import React from "react";
import { Link } from "react-router-dom";
import "../css/Artist.css";
import { formatFollowers } from "../context/util";

const ArtistList = ({ data }) => {
    return (
        <ul id="artistlist" className="list">
            {data.map((d, i) => (
                <Link key={i} to={{
                    pathname: `/artist/${d.id}`,
                    state: { id: d.id }
                }}>
                    <li className="artist__info">
                        <img src={d.images[2].url} alt="Artist Profile Pic" className="artist__pic" />
                        <div className="track__container">
                            <span style={{ fontWeight: "bold" }}>{d.name}</span>
                            <span style={{ color: "rgb(170, 170, 170)" }}>{formatFollowers(d.followers.total) + " Followers"}</span>
                        </div>
                    </li>
                </Link>
            ))}
        </ul>
    );
}

export default ArtistList;