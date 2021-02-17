import React from "react";
import ArtistList from "./ArtistList";
import { useStateValue } from "../context/StateProvider";

const TopArtists = () => {
    const [{ topArtists }] = useStateValue();
    const { long } = topArtists;

    return (
        <div className="topten" style={{alignContent: "flex-start"}}>
            <div className="heading2">
                <h2>Your Top Artists</h2>
                <a href="/artists" className="more" style={{ width: "auto" }}>See More</a>
            </div>
            {long && <ArtistList data={long.slice(0, 10)} />}
        </div>
    )
}

export default TopArtists;