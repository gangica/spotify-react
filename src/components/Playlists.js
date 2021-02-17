import React from "react";
import '../css/Playlist.css';
import { useStateValue } from "../context/StateProvider";
import { Link } from "react-router-dom";

const Playlists = () => {
    const [{ playlists }] = useStateValue();

    return (
        <div className="main">
            <div className="main__container">
                <div className="heading">
                    <h1 className="user__info">Your Playlists</h1>
                </div>
                <ul id="playlist" className="grid__container">
                    {playlists && playlists.map((p, i) => (
                        <Link key={i} to={{
                            pathname: `/playlist/${p.id}`,
                            state: { data: p }
                        }}>
                            <li className="playlist__item">
                                <img src={p.images[0].url} alt="Artist Profile Pic" className="playlist__pic" />
                                <h2 className="playlist__title">{p.name}</h2>
                                <p className="playlist__total">{p.tracks.total} TRACKS</p>
                            </li>
                        </Link>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Playlists;