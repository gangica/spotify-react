import React from "react";
import TrackList from "./TrackList";
import { useStateValue } from "../context/StateProvider";

const TopTracks = () => {
    const [{ topTracks }] = useStateValue();
    const { long } = topTracks;

    return (
        <div className="topten">
            <div className="heading2">
                <h2>Your Top Tracks</h2>
                <a href="/tracks" className="more" style={{ width: "auto" }}>See More</a>
            </div>
            {long && <TrackList data={long.slice(0,10)} />}
        </div>
    )
}

export default TopTracks;