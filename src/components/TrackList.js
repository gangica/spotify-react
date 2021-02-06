import React, { useState, useEffect } from "react";
import Track from './Track';
import "../css/Track.css";

const TrackList = ({ data }) => {

    return (
        <ul id="tracklist" className="list">
            {data.map(d => <Track key={d.id} id={d.id} images={d.album.images} artists={d.artists} name={d.name} duration={d.duration_ms} href={d.external_urls.spotify} />)}
        </ul>
    );
}

export default TrackList;