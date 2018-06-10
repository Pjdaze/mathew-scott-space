import React from 'react';
import styled from 'styled-components';
const ContactWrapper = styled.div`
  background-color: #222;
  height: 100%;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .social-nav3 {
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    .fas {
      font-size: 4em;
      color: #f0f0f0;
      margin-bottom: 30px;
      &:hover {
        color: #37bdff;
      }
    }
    .fa-phone {
      font-size: 1.5em;
      margin-right: 20px;
      &:hover {
        color: #37bdff;
      }
    }
    a {
      color: #f0f0f0;
    }
    &:hover {
      color: #37bdff;
    }
  }
  .tel {
    font-family: 'Titillium Web', sans-serif;
    &:hover {
      color: #37bdff;
    }
  }

  .banner {
    padding-bottom: 100px;
    h1 {
      font-family: 'Titillium Web', sans-serif;
    }
    p {
      font-size: calc(14px + 0.8vw);
      font-weight: 300;
    }

    width: 90%;
    max-width: 600px;
    display: flex;
    text-align: center;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #f0f0f0;
  }
`;
export default class Contact extends React.Component {
  render() {
    return (
      <ContactWrapper>
        <div className="banner">
          <h1>Let's Talk</h1>
          <p>
            I love to interact with other artist or art lovers, so don't hesitate to drop me a line.
          </p>
        </div>
        <div className="social-nav3">
          <a href="mailto:pjdazeux@gmail.com">
            <span className="fas fa-at" />
          </a>

          <a href="tel:321-442-5777">
            <span className="fas fa-phone" />
            <span className="tel">321-442-5777</span>
          </a>
        </div>
      </ContactWrapper>
    );
  }
}
