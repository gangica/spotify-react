import React, { useState } from "react";
import { useStateValue } from "../context/StateProvider";
import ArtistGrid from "./ArtistGrid";
import "../css/Artist.css";

const FullTopArtists = () => {
    const [{ topArtists }] = useStateValue();
    const { long, medium, short } = topArtists;
    const [range, setRange] = useState('medium');

    return (
        <div className="main">
            <div className="main__container">
                <div className="heading">
                    <h1 className="user__info">Your Top Artists</h1>
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

                {(range === 'long' && long) && <ArtistGrid data={long} />}
                {(range === 'medium' && medium) && <ArtistGrid data={medium} />}
                {(range === 'short' && short) && <ArtistGrid data={short} />}
            </div>
        </div>
    )
}

export default FullTopArtists;