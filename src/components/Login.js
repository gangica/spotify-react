import React from "react";
import "../css/Login.css";
import spotify from "../icons/spotify.png";
import { accessUrl } from "../context/spotify";

function Login() {
  return (
      <div className="login">
        <div className="login__container">
          <img src={spotify} alt="logo" />
          <h1>Spotify Profile</h1>
          <a className="more" href={accessUrl}>LOGIN via spotify</a>
        </div>
    </div>
  );
}

export default Login;