import React, { useState } from "react";
import TrackList from "./TrackList";
import { useStateValue } from "../context/StateProvider";

const FullTopTracks = () => {
    const [{ topTracks }] = useStateValue();
    const { long, medium, short } = topTracks;
    const [range, setRange] = useState('medium');

    return (
        <div className="main">
            <div className="main__container">
                <div className="heading">
                    <h1 className="user__info">Your Top Tracks</h1>
                    <div className="time__range">
                        <button className={range === "long" ? "more more__active" : "more"} onClick={() => setRange('long')}>
                            All Time
                        </button>
                        <button className={range === "medium" ? "more more__active" : "more"} onClick={() => setRange('medium')}>
                            6 Months
                        </button>
                        <button className={range === "short" ? "more more__active" : "more"} onClick={() => setRange('short')}>
                            4 Weeks
                        </button>
                    </div>
                </div>
                {(range === 'long' && long) && <TrackList data={long} />}
                {(range === 'medium' && medium) && <TrackList data={medium} />}
                {(range === 'short' && short) && <TrackList data={short} />}
            </div>

        </div>
    )
}

export default FullTopTracks;