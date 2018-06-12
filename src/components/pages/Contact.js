import React from 'react';
import styled from 'styled-components';
import Fab9 from '../../images/fab10.png';
import ContactWrapper from '../containers/ContactWrapper';
export default class Contact extends React.Component {
  render() {
    return (
      <ContactWrapper>
        <div className="profile-wrapper">
          <img className="profile" src={Fab9} alt="profile" />

          <div className="social-nav2">
            <a href="https://www.facebook.com/Razielp123/">
              <span className="fab fa-facebook" />
            </a>
            <a href="#">
              <span className="fab fa-twitter" />
            </a>

            <a href="#">
              <span className="fab fa-instagram" />
            </a>
            <a href="mailto:razielp123@gmail.com">
              <span className="fas fa-at" />
            </a>
          </div>
        </div>

        <div className="bio-info">
          <h4>FabianZvon</h4>
          <p>
            I Love to chat and about the Multiverse
            <br />
            <br />
            Leter i showed one of my paintings to a close friend who i admire as an artist, and to
            hear him say he was blown away, got me insired to persue Art!
            <br />
            <br />
            If i can get that kind of reaction from my peers, there is no telling what i can do with
            practice and hard work.
            <br />
            <br />
          </p>
        </div>
      </ContactWrapper>
    );
  }
}
