import styled from 'styled-components';
import Briks from '../../images/bricks.jpg';
import Fab22 from '../../images/fab22.png';
const BannerWrapper = styled.div`
  height: 100%;
  min-height: 100vh;
  background-size: cover;
  -moz-transform: scaleX(-1);
  -o-transform: scaleX(-1);
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
  filter: FlipH;
  -ms-filter: 'FlipH';
  position: relative;
  background: url(${Briks}) no-repeat scroll center top transparent;

  background-attachment: fixed;

  width: 100%; /* width of image */
  font-family: 'Titillium Web', sans-serif;

  padding-top: 100px;

  .banner-img {
    background: url(${Fab22}) 50% 0;
    background-size: contain;
    background-repeat: no-repeat;
    width: 300px;
    height: 400px;
    position: fixed;

    left: 50%;
    margin-left: -130px;
    top: 43%;
    -moz-transform: scaleX(-1);
    -o-transform: scaleX(-1);
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
    filter: FlipH;
    -ms-filter: 'FlipH';
  }
  .banner-h1 {
    color: rgb(49, 47, 54);
    font-size: calc(12px + 0.5vw);
    -moz-transform: scaleX(-1);
    -o-transform: scaleX(-1);
    -webkit-transform: scaleX(-1);

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
    -moz-transform: scaleX(-1);
    -o-transform: scaleX(-1);
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
    filter: FlipH;
    -ms-filter: 'FlipH';
    line-height: 1.3em;

    margin: 0 auto;
    text-align: center;
    display: flex;
    flex-direction: column;

    align-items: center;

    color: rgb(49, 47, 54);
    text-transform: uppercase;
  }
  .story {
  }
`;

export default BannerWrapper;
