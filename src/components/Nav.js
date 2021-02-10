import React from "react";
import { Link } from 'react-router-dom';
import "../css/Nav.css";

const Nav = () => {

    return (
        <nav className="Nav">
          <div className="Nav__container">
            <Link to="/" className="Nav__brand">
            <img
              className="Nav__logo"
              src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
              alt=""
            />
            </Link>

            <div className="Nav__right">
              <ul className="Nav__item-wrapper">
                <li className="Nav__item">
                  <Link className="Nav__link" to="/">Home</Link>
                </li>
                <li className="Nav__item">
                  <Link className="Nav__link" to="/artists">Top Artists</Link>
                </li>
                <li className="Nav__item">
                  <Link className="Nav__link" to="/tracks">Top Tracks</Link>
                </li>
                <li className="Nav__item">
                  <Link className="Nav__link" to="/playlists">Playlists</Link>
                </li>
                <li className="Nav__item">
                  <Link className="Nav__link" to="/recent">Recently Played</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    )
}

export default Nav;