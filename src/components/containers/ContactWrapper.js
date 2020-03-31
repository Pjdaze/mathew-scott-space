import React from 'react';
import styled from 'styled-components';
const ContactWrapper = styled.div`
  display: flex;
  height: 100%;

  text-align: center;

  .bio-info {
    padding: 40px 0;
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
  .profile-wrapper {
    align-items: center;
  }
  .profile {
    width: 600px;

    height: 100%;
    min-height: 550px;
    margin: 0;
    filter: grayscale(100%);
  }

  @media only screen and (max-width: 795px) {
    flex-direction: column;
    .profile-wrapper {
      height: 500px;
      margin: 20px;
    }
    .profile {
      width: 100%;

      height: 100%;
      min-height: 550px;
      margin: 0;
    }

    .bio-info {
      justify-content: flex-start;
    }
  }
`;
export default ContactWrapper;
