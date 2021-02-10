import React, { useState } from "react";
import { useStateValue } from "../context/StateProvider";
import ArtistGrid from "./ArtistGrid";

const FullTopArtists = () => {
    const [{ topArtists }] = useStateValue();
    const { long, medium, short } = topArtists;
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

                {(range === 'long' && long) && <ArtistGrid data={long} />}
                {(range === 'medium' && medium) && <ArtistGrid data={medium} />}
                {(range === 'short' && short) && <ArtistGrid data={short} />}
            </div>

        </div>
    )
}

export default FullTopArtists;