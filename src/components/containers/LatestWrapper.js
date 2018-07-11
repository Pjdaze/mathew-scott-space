import styled from 'styled-components';

const LatestWrapper = styled.div`
  width: 95%;
  max-width: 900px;
  background: transparent; /* fallback for old browsers */

  margin: 100px auto;

  text-align: center;
  display: flex;

  align-content: center;

  &::after {
    filter: blur(2px);
  }

  .feed {
    display: grid;
    grid-template-columns: 180px 180px;
    grid-template-rows: 200px 200px;
    grid-gap: 6px 6px;
    justify-content: center;

    padding: 30px;
  }

  .latest-h2 {
    padding: 15px;
    flex: 1;

    font-family: 'Ostrich', sans-serif;
    color: #fff;
    text-transform: uppercase;
    font-size: calc(1.5em + 0.5vw);
  }
  .story {
    margin: 0 auto;

    width: 180px;
    video {
      transition: all ease-in-out 175ms;
      width: 100%;

      height: 200px;

      &:hover {
        box-shadow: 0px 37px 20px -20px rgba(0, 0, 0, 0.5);
        transform: translate(0px, -10px) scaleX(1.1);
        font-size: 0.9em;
      }
    }

    img {
      width: 100%;
      height: 200px;
      border-radius: 1px;
      vertical-align: middle;

      transition: all ease-in-out 175ms;
      cursor: pointer;

      &:hover {
        box-shadow: 0px 37px 20px -20px rgba(0, 0, 0, 0.5);
        transform: translate(0px, -20px) scaleX(1.2);
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
