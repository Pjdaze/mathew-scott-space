import React from 'react';
import styled from 'styled-components';
const ContactWrapper = styled.div`
  display: flex;

  text-align: center;

  margin: 0 auto;

  .bio-info {
    max-width: 700;
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
    width: 500px;
    max-width: 600px;
    padding-bottom: 40px;
    filter: grayscale(100%);
  }

  @media only screen and (max-width: 800px) {
    display: block;

    .bio-info {
      justify-content: flex-start;
    }
  }
`;
export default ContactWrapper;
