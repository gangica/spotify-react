import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from 'axios';
import { useStateValue } from "../context/StateProvider";
import Nav from "./Nav";
import User from "./User";
import Playlists from "./Playlists";
import Recent from "./Recent";
import FullTopArtists from "./FullTopArtists";
import FullTopTracks from "./FullTopTracks";
import Track from "./Track";
import Playlist from "./Playlist";
import Artist from "./Artist";
import Recommendation from "./Recommendation";

const Main = () => {
    const [{ token }, dispatch] = useStateValue();

    const headers = {
        'Authorization': 'Bearer ' + token
    };

    useEffect(() => {
        // Get current user
        axios('https://api.spotify.com/v1/me', {
            method: 'GET',
            headers
        })
            .then(res => {
                dispatch({
                    type: "SET_USER",
                    user: res.data
                });
            })
        
        // Get following    
        axios('https://api.spotify.com/v1/me/following?type=artist', {
            method: 'GET',
            headers
        })
            .then(res => {
                dispatch({
                    type: "SET_FOLLOWING",
                    following: res.data.artists.items.length
                });
            }) 

        /* Get top tracks */
        // Long range
        axios('https://api.spotify.com/v1/me/top/tracks?limit=20&time_range=long_term', {
            method: 'GET',
            headers
        })
            .then(res => {
                dispatch({
                    type: "SET_TOPTRACKS_LONG",
                    topTracks: res.data.items
                });
            })

        // Mid range
        axios('https://api.spotify.com/v1/me/top/tracks?limit=20&time_range=medium_term', {
            method: 'GET',
            headers
        })
            .then(res => {
                dispatch({
                    type: "SET_TOPTRACKS_MED",
                    topTracks: res.data.items
                });
            })  
            
        // Short range
        axios('https://api.spotify.com/v1/me/top/tracks?limit=20&time_range=short_term', {
            method: 'GET',
            headers
        })
            .then(res => {
                dispatch({
                    type: "SET_TOPTRACKS_SHORT",
                    topTracks: res.data.items
                });
            })    

        /* Get Top Artists */
        // Long range 
        axios('https://api.spotify.com/v1/me/top/artists?limit=20&time_range=long_term', {
            method: 'GET',
            headers
        })
            .then(res => {
                dispatch({
                    type: "SET_TOPARTISTS_LONG",
                    topArtists: res.data.items
                });
            })

        // Mid range 
        axios('https://api.spotify.com/v1/me/top/artists?limit=20&time_range=medium_term', {
            method: 'GET',
            headers
        })
            .then(res => {
                dispatch({
                    type: "SET_TOPARTISTS_MED",
                    topArtists: res.data.items
                });
            })
         
        // Short range     
        axios('https://api.spotify.com/v1/me/top/artists?limit=20&time_range=short_term', {
            method: 'GET',
            headers
        })
            .then(res => {
                dispatch({
                    type: "SET_TOPARTISTS_SHORT",
                    topArtists: res.data.items
                });
            })  

        // Get playlists
        axios('https://api.spotify.com/v1/me/playlists', {
            method: 'GET',
            headers
        })
            .then(res => {
                dispatch({
                    type: "SET_PLAYLISTS",
                    playlists: res.data.items
                });
            })     
    }, []);

    return (
        <Router>
            <Nav />
            <Switch>
                <Route exact path="/">
                    <User />
                </Route>
                <Route path="/artists">
                    <FullTopArtists />
                </Route>
                <Route path="/tracks">
                    <FullTopTracks />
                </Route>
                <Route path="/playlists">
                    <Playlists />
                </Route>
                <Route path="/recent">
                    <Recent />
                </Route>
                <Route path="/track/:trackId" component={Track}>
                </Route>
                <Route path="/playlist/:playlistId" component={Playlist}>
                </Route>
                <Route path="/artist/:artistId" component={Artist}>
                </Route>
                <Route path="/recommendation" component={Recommendation}>
                </Route>
            </Switch>
        </Router>
      
    );
}

export default Main;