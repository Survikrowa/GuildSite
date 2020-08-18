import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import Burger from './burger';
import Logo from './logo_s';

export default class Header extends React.Component {
  render() {
    return (
      <Fragment>
        <Burger />
        <div className="header-container">
          <header>
            <div className="content">
              <div className="links">
                <NavLink to="/home" className="link" activeClassName="active">
                  Strona główna
                </NavLink>
                <NavLink to="/about" className="link" activeClassName="active">
                  O nas
                </NavLink>
                <NavLink
                  to="/contact"
                  className="link"
                  activeClassName="active"
                >
                  Kontakt
                </NavLink>
                <NavLink to="/panel" className="link" activeClassName="active">
                  Panel gracza
                </NavLink>
              </div>
              <div className="icons">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://discord.com/"
                >
                  <img
                    className="icon"
                    src={require('../../assets/discord.svg')}
                    alt="Discord"
                  ></img>
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="http://eu.battle.net/wow/guild/burning-legion/Muzykanci%20z%20Gruzji/"
                >
                  <img
                    className="icon"
                    src={require('../../assets/battlenet.svg')}
                    alt="Battlenet"
                  ></img>
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.warcraftlogs.com/guild/calendar/534602/"
                >
                  <img
                    className="icon"
                    src={require('../../assets/logs.png')}
                    alt="Warcraft logs"
                  ></img>
                </a>
              </div>
            </div>
            <Logo />
          </header>
        </div>
      </Fragment>
    );
  }
}
