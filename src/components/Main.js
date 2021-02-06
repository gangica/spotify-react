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
import TrackDetail from "./TrackDetail";
import Playlist from "./Playlist";

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
            .then(user => {
                dispatch({
                    type: "SET_USER",
                    user: user.data
                });
            })
        
        // Get following    
        axios('https://api.spotify.com/v1/me/following?type=artist', {
            method: 'GET',
            headers
        })
            .then(response => {
                dispatch({
                    type: "SET_FOLLOWING",
                    following: response.data.artists.items.length
                });
            }) 

        // Get top tracks long range
        axios('https://api.spotify.com/v1/me/top/tracks?limit=20&time_range=long_term', {
            method: 'GET',
            headers
        })
            .then(tracks => {
                dispatch({
                    type: "SET_TOPTRACKS_LONG",
                    topTracks: tracks.data.items
                });
            })

        // Get top tracks medium range
        axios('https://api.spotify.com/v1/me/top/tracks?limit=20&time_range=medium_term', {
            method: 'GET',
            headers
        })
            .then(tracks => {
                dispatch({
                    type: "SET_TOPTRACKS_MED",
                    topTracks: tracks.data.items
                });
            })  
            
        // Get top tracks short range
        axios('https://api.spotify.com/v1/me/top/tracks?limit=20&time_range=short_term', {
            method: 'GET',
            headers
        })
            .then(tracks => {
                dispatch({
                    type: "SET_TOPTRACKS_SHORT",
                    topTracks: tracks.data.items
                });
            })    

        // Get top artists    
        axios('https://api.spotify.com/v1/me/top/artists?limit=50&time_range=long_term', {
            method: 'GET',
            headers
        })
            .then(artists => {
                dispatch({
                    type: "SET_TOPARTISTS",
                    topArtists: artists.data.items
                });
            })

        // Get playlists
        axios('https://api.spotify.com/v1/me/playlists', {
            method: 'GET',
            headers
        })
            .then(playlists => {
                dispatch({
                    type: "SET_PLAYLISTS",
                    playlists: playlists.data.items
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
                <Route path="/detail" component={TrackDetail}>
                </Route>
                <Route path="/playlist/:playlistId" component={Playlist}>
                </Route>
            </Switch>
        </Router>
      
    );
}

export default Main;