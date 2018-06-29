import styled from 'styled-components';
import Briks from '../../images/bricks.jpg';
import Bricks2 from '../../images/Bricks2.jpg';
import Bricks3 from '../../images/bricks3.jpg';

const BannerWrapper = styled.div`
  position: relative;
  background: url(${Briks}) no-repeat scroll center top transparent;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  min-width: 250px;
  height: 80vh;
  max-height: 1000px;
  position: relative;
  overflow: hidden;
  clear: both;

  .banner-image {
    position: absolute;
    left: 30%;
    margin-left: -30px;

    img {
      width: 250px;
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
  .intro-top {
    max-width: 700px;
    display: flex;
    justify-content: space-between;
    padding-left: 170px;
    align-items: center;
  }

  .aside {
    width: 95%;

    filter: FlipH;
    -ms-filter: 'FlipH';
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
