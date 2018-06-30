import styled from 'styled-components';

const IntroWrapper = styled.div`
  padding: 150px 100px 150px 0;
  height: 100vh;
  overflow: hidden;
  text-align: center;
  display: flex;
  justify-content: center;
  align-content: center;
  background-size: cover;

  &::after {
    filter: blur(2px);
  }

  .feed {
    display: grid;
    grid-template-columns: 225px 225px;
    grid-template-rows: 250px 250px;
    grid-gap: 6px 6px;
  }

  .latest-h2 {
    font-family: 'Titillium Web', sans-serif;
    text-shadow: 2px 2px 1px #777;
    font-weight: 100;
    font-size: calc(2em + 1.5vw);
    flex: 1;
    margin-left: -1;
  }
  .story {
    margin: 0 auto;

    width: 225px;
    video {
      transition: all ease-in-out 175ms;
      width: 100%;

      height: 250px;

      &:hover {
        box-shadow: 0px 37px 20px -20px rgba(0, 0, 0, 0.5);
        transform: translate(0px, -10px) scaleX(1.1);
        font-size: 0.9em;

        border-style: solid double;
      }
    }

    img {
      width: 100%;
      height: 250px;

      vertical-align: middle;

      transition: all ease-in-out 175ms;
      cursor: pointer;

      &:hover {
        box-shadow: 0px 37px 20px -20px rgba(0, 0, 0, 0.5);
        transform: translate(0px, -20px) scaleX(1.2);
        font-size: 0.9em;

        border-style: solid double;
      }
    }
  }
`;

export default IntroWrapper;
