import React, { useEffect } from "react";
import { useStateValue } from "./context/StateProvider";
import Main from "./components/Main";
import { getTokenFromResponse } from "./context/spotify";
import "./App.css";
import Login from "./components/Login";

function App() {
  const [{ token }, dispatch] = useStateValue();

  const localToken = window.localStorage.getItem('spotify_access_token');

  useEffect(() => {
    // Get access token
    const hash = getTokenFromResponse();
    window.location.hash = "";
    let accessToken = hash.access_token;

    // check with localToken
    if (!localToken || localToken === 'undefined') {
      window.localStorage.setItem('spotify_access_token', accessToken);
      dispatch({
        type: "SET_TOKEN",
        token: accessToken,
      });
    } else {
      dispatch({
        type: "SET_TOKEN",
        token: localToken,
      });
    }

  }, []);

  return (
    <div className="app">
      {token ? <Main /> : <Login />}
    </div>
  );
}

export default App;