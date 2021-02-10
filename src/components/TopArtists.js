import React from "react";
import ArtistList from "./ArtistList";
import { useStateValue } from "../context/StateProvider";

const TopArtists = () => {
    const [{ topArtists }] = useStateValue();
    const { long } = topArtists;

    return (
        <div className="user__column" style={{alignContent: "flex-start"}}>
            <div className="heading">
                <h3 className="user__info">Artists</h3>
                <span><a href="/artists" className="more">See More</a></span>
            </div>
            {long && <ArtistList data={long.slice(0, 10)} />}
        </div>
    )
}

export default TopArtists;