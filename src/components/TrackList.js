import React, { lazy, useEffect, useState } from "react";
import "../css/Track.css";
import { convertTrackDuration } from "../context/util";
import { Link } from "react-router-dom";

const TrackList = ({ data }) => {
    const [seeMoreBtn, setSeeMoreBtn] = useState(false);
    const [display, setDisplay] = useState(data.slice(0, 20));
    const [lazyload, setLazyload] = useState(true);

    // lazy loading setting
    useEffect(() => {
        if (data.length > 20) {
            setSeeMoreBtn(true)
        }
    }, [])

    useEffect(() => {
        if (lazyload) {
            setDisplay(data.slice(0, 20))
        } else {
            setDisplay(data)
        }
    }, [lazyload])

    return (
        <ul id="tracklist" className="list">
            {display.map(d => (
                <li className="track__info">
                    <Link to={{
                        pathname: `/track/${d.id}`,
                        state: { id: d.id }
                    }} className="track__info2">
                        {d.album.images.length && <img src={d.album.images[2].url} alt="Track Pic" className="track__pic" />}

                        <div className="track__container">
                            <span style={{ fontWeight: "bold" }}>{d.name}</span>
                            <span style={{ marginTop: 5, color: "rgb(170, 170, 170)" }}>{d.artists.map(artist => artist.name).join(", ")}</span>
                        </div>
                        <span className="track__duration">{convertTrackDuration(d.duration_ms)}</span>
                    </Link>

                    <span style={{ margin: "auto" }}><a href={d.external_urls.spotify} target="_blank" rel="noreferrer" className="play">▶</a></span>
                </li>
            ))}
            {seeMoreBtn && <button className="more spotify" onClick={() => setLazyload(!lazyload)}>{lazyload ? "See more" : "See less"}</button>}
        </ul>
    );
}

export default TrackList;