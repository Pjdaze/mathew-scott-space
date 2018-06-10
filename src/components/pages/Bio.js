import React from 'react';
import styled from 'styled-components';
import Fab9 from '../../images/fab5.jpg';
const BioWrapper = styled.div`
  display: flex;

  text-align: center;

  height: 100%;

  margin: 0 auto;

  .bio-info {
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #888888;
    background-color: #fbfbfb;
    h4 {
      color: #222;
      font-weight: 300;
      font-size: 1.9em;
      margin-bottom: 20px;
    }

    p {
      font-size: calc(12px + 0.5vw);
      width: 70%;
      font-weight: 100;
      font-family: 'Titillium Web', sans-serif;
      line-height: 1.5em;
    }
  }
  .profile-wrapper {
    align-items: center;

    .social-nav2 {
      width: 200px;
      display: flex;

      justify-content: space-around;
      margin: 0 auto;
      padding-bottom: 30px;
    }
    .fab,
    .fas {
      color: #222;
      &:hover {
        color: #777777;
      }
    }

    h5 {
      margin-bottom: 20px;
      font-family: 'Nothing You Could Do', sans-serif;
      font-weight: 300;
    }
  }
  .profile {
    padding-bottom: 50px;
    width: 100%;
    max-width: 500px;
    height: 500px;
  }

  @media only screen and (max-width: 800px) {
    display: block;

    .bio-info {
      justify-content: flex-start;
    }
  }
`;
export default class Bio extends React.Component {
  render() {
    return (
      <BioWrapper>
        <div className="profile-wrapper">
          <img className="profile" src={Fab9} alt="profile" />
          <h5>Get In Touch</h5>
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
          <h4>Hi, I'm Raz</h4>
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
      </BioWrapper>
    );
  }
}
