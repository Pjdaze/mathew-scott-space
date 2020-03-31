import React from 'react';
import NavWrapper from './containers/NavWrapper';
import { NavLink } from 'react-router-dom';
export default class Nav extends React.Component {
  render() {
    const { isOpen } = this.props;
    console.log('Nav is open', isOpen);
    const NavClass = isOpen ? 'open' : 'nav';
    return (
      <NavWrapper className={NavClass}>
        <ul className={NavClass}>
          <li>
            <div className={(NavClass && 'logox') || 'Open'}>
              <NavLink className={NavClass} activeClassName="activex" to="/Home">
                <h1 className="menu-h1">
                  Mathew<span className="z">S</span>cott
                </h1>
              </NavLink>
            </div>
          </li>

          <li>
            <NavLink
              className={NavClass}
              onUpdate={() => window.scrollTo(0, 0)}
              activeClassName="activex"
              to="/MyDay"
            >
              Upcoming Gigs
            </NavLink>
          </li>
          <li>
            <NavLink className={NavClass} activeClassName="activex" to="/Contact">
              Contact
            </NavLink>
          </li>

          <div className="social-nav">
            <a href="https://www.facebook.com/matthewscottmusic">
              <span className="fab fa-facebook" />
            </a>

            <a href="https://www.instagram.com/matthewscott92/?hl=en">
              <span className="fab fa-instagram" />
            </a>

            <a href="https://www.youtube.com/matthewscottmusic">
              <span className="fab fa-youtube" />
            </a>
            <a href="mailto:57fenderstrat60@gmail.com">
              <span className="fas fa-at" />
            </a>
            <a href="https://twitter.com/matthewscott92">
              <span className="fab fa-twitter" />
            </a>
          </div>
        </ul>
      </NavWrapper>
    );
  }
}
