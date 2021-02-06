import React, { useEffect } from "react";
import ArtistList from "./ArtistList";
import { useStateValue } from "../context/StateProvider";

const TopArtists = () => {
    const [{ topArtists }] = useStateValue();

    return (
        <div className="user__column" style={{alignContent: "flex-start"}}>
            <div className="heading">
                <h3 className="user__info">Artists</h3>
                <span><button className="more">See More</button></span>
            </div>
            {topArtists && <ArtistList data={topArtists.slice(0, 10)} />}
        </div>
    )
}

export default TopArtists;