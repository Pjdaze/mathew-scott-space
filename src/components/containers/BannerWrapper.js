import styled from 'styled-components';

const BannerWrapper = styled.div`
  overflow: hidden;

  font-family: 'Titillium Web', sans-serif;
  display: flex;
  justify-content: flex-end;
  padding-right: 200px;
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
    width: 200px;
    img {
      width: 100%;
      -moz-transform: scaleX(-1);
      -o-transform: scaleX(-1);
      -webkit-transform: scaleX(-1);
      transform: scaleX(-1);
      filter: FlipH;
      -ms-filter: 'FlipH';
    }
  }
  @media only screen and (max-width: 767px) {
    display: block;
  }
`;

export default BannerWrapper;
