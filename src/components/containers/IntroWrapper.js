import styled from 'styled-components';

const IntroWrapper = styled.div`
  padding: 60px;
  width: 100%;
  max-width: 900px;
  background-color: #ffe2f6;

  overflow: visible;
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
    flex: 1;

    font-family: 'Zooja', sans-serif;

    text-transform: uppercase;

    font-size: calc(2em + 1.5vw);

    color: #fff;
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

        border-style: solid double;
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

        border-style: solid double;
      }
    }
  }

  @media only screen and (max-width: 700px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export default IntroWrapper;
