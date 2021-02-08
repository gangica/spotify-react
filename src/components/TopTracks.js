import React, { useEffect } from "react";
import TrackList from "./TrackList";
import { useStateValue } from "../context/StateProvider";

const TopTracks = () => {
    const [{ topTracks }] = useStateValue();
    const { long } = topTracks;

    return (
        <div className="user__column">
            <div className="heading">
                <h3 className="user__info">Top Tracks</h3>
                <span><a href="/tracks" className="more">See More</a></span>
            </div>
            {long && <TrackList data={long.slice(0,10)} />}
        </div>
    )
}

export default TopTracks;