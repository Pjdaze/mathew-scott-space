import React from 'react';
import styled from 'styled-components';
import Fab9 from '../../images/mathewContact.jpg';
import ContactWrapper from '../containers/ContactWrapper';
export default class Contact extends React.Component {
  render() {
    return (
      <ContactWrapper>
        <div className="profile-wrapper">
          <img className="profile" src={Fab9} alt="profile" />
        </div>

        <div className="bio-info">
          <h4>Matthew Scott</h4>
          <p>
            Musician / Band
            <br />
            <br />
            Hey There My name Is Matthew and I'm A Guitar Player From Edmond who loves the blues
            blah blah. Some of my influences include: Stevie Ray Vaughan, The Black Keys, The Black
            Crowes, Lynyrd Skynyrd
            <br />
            <br />
            Visit My Youtube channel where i do things like Vintage Gear Talk, Guitar mod-videos and
            Music talk in general practice and hard work.
            <br />
            <br />
          </p>
          <div className="social-nav2">
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
        </div>
      </ContactWrapper>
    );
  }
}
