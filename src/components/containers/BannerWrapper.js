import styled from 'styled-components';

const BannerWrapper = styled.div`
display: grid;
align-items: center;
justify-content: center;
grid-template-columns: repeat(3, 1fr);
  overflow: hidden;
  height: 95%;
  ma
  min-height: 95vh;

  font-family: 'Titillium Web', sans-serif;

  padding-top: 50px;

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
    #9a8e8e,
    #dbdbdb,
    #f2f2f2,
    #ada996
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  .banner-img {

text-align: center;

    img {
width: 140px;
max-width: 180px
      -moz-transform: scaleX(-1);
      -o-transform: scaleX(-1);
      -webkit-transform: scaleX(-1);
      transform: scaleX(-1);
      filter: FlipH;
      -ms-filter: 'FlipH';
      -webkit-filter: drop-shadow(5px 5px 5px #222);
      filter: drop-shadow(0px 6px 6px #777);
    }
  }
  .banner-h1 {
padding-left: 180px;

    color: rgb(49, 47, 54);

    .banner-z {

      font-size: 2em;

      font-family: 'Ubuntu', sans-serif;
    }
  }

  .intro-top{
    border: 1px solid #222;
color: rgb(49, 47, 54);

  }

  @media only screen and (max-width: 767px) {
padding: 40px;
display: grid;
grid-template-rows: auto auto;
.banner-h1 {
  grid-row-start: 1;
  grid-column-start: 2;

  padding: 0;
}

.banner-img {

grid-column-start: 1;

}

.intro-top{
  text-align: center;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
  grid-row-start: 2;

    grid-column-start: span 3;

}

  }
`;

export default BannerWrapper;
