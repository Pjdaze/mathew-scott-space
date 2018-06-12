import styled from 'styled-components';

const BannerWrapper = styled.div`
  overflow: hidden;
  height: 100vh;
  width: 100%;
  font-family: 'Titillium Web', sans-serif;
  display: flex;

  padding-right: 200px;
  padding-top: 50px;
  align-items: center;
  background: #ada996; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to bottom,
    #eaeaea,
    #dbdbdb,
    #f2f2f2,
    #ada996
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to bottom,
    #eaeaea,
    #dbdbdb,
    #f2f2f2,
    #ada996
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  .banner-img {

    img {
width: 180px
      -moz-transform: scaleX(-1);
      -o-transform: scaleX(-1);
      -webkit-transform: scaleX(-1);
      transform: scaleX(-1);
      filter: FlipH;
      -ms-filter: 'FlipH';
      -webkit-filter: drop-shadow(5px 5px 5px #222);
      filter: drop-shadow(0px 6px 6px #888);
    }
  }
  .banner-h1 {
    flex: 1;
    padding-left: 200px;
    .banner-z {
      font-size: 2em;
    }
  }

  @media only screen and (max-width: 767px) {
    display: block;
  }
`;

export default BannerWrapper;
