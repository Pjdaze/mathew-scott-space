import styled from 'styled-components';
import Bricks1 from '../../images/bricks.jpg';
import Bricks2 from '../../images/Bricks2.jpg';
import Rainbow from '../../images/Rainbow1.png';

const BannerWrapper = styled.div`
  background: url(${Rainbow}) no-repeat scroll transparent;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  -webkit-background-attachment: fixed;
  -moz-background-attachment: fixed;
  -o-background-attachment: fixed;
  background-attachment: fixed;

  transform: scale(1.1, 1.1);
  background-position: center 70px;
  height: 100vh;

  min-height: 500px;
  max-height: 685px;
  position: relative;
  overflow: hidden;
  clear: both;

  .banner-image {
    position: absolute;
    top: 300px;
    left: 30%;

    margin-left: -30px;

    filter: saturate(1.5);
    img {
      width: 180px;
      height: 450px;
      -webkit-transform: scaleX(-1);
      transform: scaleX(-1);
    }
    @media only screen and (max-height: 415px) {
      top: 100px;
    }
  }
  .banner-h1 {
    font-family: 'Oswald', sans-serif;
    font-weight: 600;
    color: rgb(49, 47, 54);
    font-size: calc(12px + 0.5vw);

    .banner-z {
      font-size: 2em;

      font-family: 'Ubuntu', sans-serif;
    }
  }
  .banner-top {
    max-width: 700px;
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 11%;
    right: 10%;
    font-family: 'Exo 2', sans-serif;

    padding-left: 170px;
    align-items: center;
    @media only screen and (max-width: 500px) {
      flex-direction: column;
      justify-content: center;
      padding-left: 0;
      right: 10%;
    }
  }

  .aside {
    line-height: 1.3em;

    margin: 0 auto;
    text-align: center;
    display: flex;
    flex-direction: column;

    align-items: center;
    font-size: 14px;
    color: rgb(49, 47, 54);
    text-transform: uppercase;
  }

  @media only screen and (max-width: 785px) {
    background-size: 100% 100vh;
  }
`;

export default BannerWrapper;
