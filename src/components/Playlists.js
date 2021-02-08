import React, { useEffect } from "react";
import '../css/Playlist.css';
import { useStateValue } from "../context/StateProvider";
import { Link } from "react-router-dom";

const Playlists = () => {
    const [{ playlists }] = useStateValue();

    return (
        <div className="user__column">
            <div className="tracklist__container">
                <div className="heading">
                    <h2 className="user__info">Playlists</h2>
                </div>
                <ul id="playlist" className="playlist__container">
                    {playlists && playlists.map(p => (
                        <Link to={{
                            pathname: `/playlist/${p.id}`,
                            state: { data: p }
                        }}>
                            <li key={p.id} className="playlist__item">
                                <img src={p.images[0].url} alt="Artist Profile Pic" className="playlist__pic" />
                                <span className="playlist__title">{p.name}</span>
                                <span className="playlist__total">{p.tracks.total} TRACKS</span>
                            </li>
                        </Link>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Playlists;