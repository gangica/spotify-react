import React, { useState } from "react";
import TrackList from "./TrackList";
import { useStateValue } from "../context/StateProvider";

const FullTopTracks = () => {
    const [{ topTracks }] = useStateValue();
    const { long, medium, short } = topTracks;
    const [range, setRange] = useState('medium');

    return (
        <div className="user__column">
            <div className="tracklist__container">
                <div className="heading">
                    <h2 className="user__info">Top Tracks</h2>
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
                {(range === 'long' && long) && <TrackList data={long} />}
                {(range === 'medium' && medium) && <TrackList data={medium} />}
                {(range === 'short' && short) && <TrackList data={short} />}
            </div>

        </div>
    )
}

export default FullTopTracks;