import styled from 'styled-components';
import Bricks1 from '../../images/bricks.jpg';
import Bricks2 from '../../images/Bricks2.jpg';
import Bricks3 from '../../images/bricks3.jpg';

const BannerWrapper = styled.div`
  background: url(${Bricks1}) no-repeat scroll center top transparent;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;

  height: 80vh;
  min-height: 500px;
  position: relative;
  overflow: hidden;
  clear: both;

  .banner-image {
    position: absolute;
    left: 35%;
    top: 40%;
    margin-left: -30px;
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);

    filter: saturate(1.5);
    img {
      width: 180px;
      height: 400px;
    }
  }
  .banner-h1 {
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
    justify-content: space-between;
    padding-left: 170px;
    align-items: center;
  }

  .aside {
    width: 95%;

    line-height: 1.3em;

    margin: 0 auto;
    text-align: center;
    display: flex;
    flex-direction: column;

    align-items: center;
    font-size: 12px;
    color: rgb(49, 47, 54);
    text-transform: uppercase;
  }
`;

export default BannerWrapper;
