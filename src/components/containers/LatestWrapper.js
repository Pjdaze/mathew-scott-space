import styled from 'styled-components';

import Briks from '../../images/bricks.jpg';

const LatestWrapper = styled.div`
  /* fallback for old browsers */
  width: 97%;
  background-image: url(${Briks});
  margin: 50px auto;

  text-align: center;

  &::after {
    filter: blur(2px);
  }
  .insta-fab {
    width: 500px;
    height: 500px;
  }

  .feed {
    display: grid;
    grid-template-columns: 180px 180px 180px 180px;
    grid-template-rows: 200px 200px 200px 200px;
    grid-gap: 6px 6px;

    justify-content: center;
  }

  .latest-h2 {
    padding: 15px;
    flex: 1;

    font-family: 'Ostrich', sans-serif;

    color: #222;
    text-transform: uppercase;
    font-size: calc(1.9em + 0.5vw);
  }
  .story {
    margin: 0 auto;

    width: 180px;
    video {
      transition: all ease-in-out 175ms;
      width: 100%;

      height: 200px;

      &:hover &:focus {
        font-size: 0.9em;
      }
    }

    .link {
      position: relative;

      .caption {
        position: absolute;

        color: #fff;
        font-size: 15px;
        font-family: 'Exo 2', sans-serif;
        left: 0px;
        height: 200px;
        background-color: #000;
        opacity: 0;
        width: 100%;
        p {
          margin-top: 40%;
        }
        transition: all 300ms ease-in-out;

        &:hover {
          opacity: 0.9;
          height: 200px;
        }
      }

      transition: all 135ms ease-in-out;
    }

    img {
      width: 100%;
      height: 200px;
      border-radius: 1px;
      vertical-align: middle;

      transition: all ease-in-out 175ms;
      cursor: pointer;

      &:hover {
        font-size: 0.9em;
      }
    }
  }

  @media only screen and (max-width: 700px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .messages {
    font-family: 'Lato', sans-serif;
    font-weight: 300;
    font-size: 20px;
  }
`;

export default LatestWrapper;
