import React, { useEffect, useState } from "react";
import Artist from './Artist';
import "../css/Artist.css";

const ArtistList = ({ data }) => {

    return (
        <div>
            <ul id="artistlist" className="list">
                {data.map(d => (
                    <Artist key={d.id} name={d.name} image={d.images[2].url} />
                ))}
            </ul>
        </div>       
    );
}

export default ArtistList;