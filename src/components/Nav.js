import React, { useEffect, useState } from "react";
import { Link, useLocation } from 'react-router-dom';
import "../css/Nav.css";
import home from "../icons/home.png";
import spotify from "../icons/spotify.png";
import user from "../icons/user.png";
import vinyl from "../icons/vinyl.png";
import playlist from "../icons/playlist.png";
import history from "../icons/history.png";

const Nav = () => {
  const [active, setActive] = useState();
  const location = useLocation();

  useEffect(() => {
    setActive(location.pathname);
  }, [location])

  return (
    <nav className="Nav">
      <div className="Nav__container">
        <Link to="/">
          <div className="Nav__brand">
            <img src={spotify} alt="" className="Nav__logo" /></div>
        </Link>

        <div className="Nav__right">
          <ul className="Nav__item-wrapper">
            <Link className="Nav__link" to="/">
              <li className="Nav__item">
                {active === "/" && <span className="active"></span>}
                <span>
                  <img src={home} alt="home" className="menu__icons" />
                  <p>Home</p>
                </span>
              </li>
            </Link>
            <Link className="Nav__link" to="/artists">
              <li className="Nav__item">
                {active === "/artists" && <span className="active"></span>}
                <span><img src={user} alt="home" className="menu__icons" />
                  <p>Top Artists</p></span>
              </li>
            </Link>
            <Link className="Nav__link" to="/tracks">
              <li className="Nav__item">
                {active === "/tracks" && <span className="active"></span>}
                <span><img src={vinyl} alt="home" className="menu__icons" />
                  <p>Top Tracks</p></span>
              </li>
            </Link>
            <Link className="Nav__link" to="/playlists">
              <li className="Nav__item">
                {active === "/playlists" && <span className="active"></span>}
                <span><img src={playlist} alt="home" className="menu__icons" />
                  <p>Playlists</p></span>
              </li>
            </Link>
            <Link className="Nav__link" to="/recent">
              <li className="Nav__item">
                {active === "/recent" && <span className="active"></span>}
                <span><img src={history} alt="home" className="menu__icons" />
                  <p>Recent</p></span>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav;