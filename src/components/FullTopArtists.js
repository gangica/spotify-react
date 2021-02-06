import React, { useState, useEffect } from "react";
import Playlist from "./Playlist";
import { useStateValue } from "../context/StateProvider";

const FullTopArtists = () => {
    const [{ topArtists }] = useStateValue();
    // const { long, medium, short } = topTracks;
    const [range, setRange] = useState('medium');

    return (
        <div className="user__column">
            <div className="tracklist__container">
                <div className="heading">
                    <h2 className="user__info">Top Artists</h2>
                    <span>
                        <button className={range === "long" ? "more more__active" : "more"} onClick={() => setRange('long')}>
                            All Time
                    </button></span>
                    <span>
                        <button className={range === "medium" ? "more more__active" : "more"} onClick={() => setRange('medium')}>
                            Last 6 Months
                    </button></span>
                    <span>
                        <button className={range === "short" ? "more more__active" : "more"} onClick={() => setRange('short')}>
                            Last 4 Weeks
                    </button></span>
                </div>
                <ul id="artistlist" className="artist__container">
                    {topArtists && topArtists.map(p => (
                        <a href="/playlists" key={p.id} >
                            <li className="artist__item">
                                <img src={p.images[0].url} alt="Artist Profile Pic" className="artist__pic__large" />
                                <span className="artist__title">{p.name}</span>
                            </li>
                        </a>
                    ))}
                </ul>
                {/* {(range === 'long' && long) && <TrackList data={long} />}
                {(range === 'medium' && medium) && <TrackList data={medium} />}
                {(range === 'short' && short) && <TrackList data={short} />} */}
            </div>

        </div>
    )
}

export default FullTopArtists;