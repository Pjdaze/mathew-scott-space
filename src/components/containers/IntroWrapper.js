import styled from 'styled-components';

const IntroWrapper = styled.div`
  padding: 150px 100px;
  width: 95%;
  background: #360033; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #0b8793, #360033); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #0b8793,
    #360033
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  margin: 0 auto;
  height: 100vh;
  overflow: hidden;
  text-align: center;
  display: flex;
  justify-content: center;
  align-content: center;

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
    font-family: 'Oswald', sans-serif;
    text-transform: uppercase;

    font-size: calc(2em + 1.5vw);
    flex: 1;
    margin-left: -1;
    color: #fff;
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

  @media only screen and (max-width: 700px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export default IntroWrapper;
