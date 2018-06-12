import styled from 'styled-components';

const BannerWrapper = styled.div`

display: grid;
align-items: center;
justify-content: center;
grid-template-columns: 50% 50%;
  overflow: hidden;
  height: 95%;
  
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



    img {
width: 135px;
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
padding-left: 200px;
    align-items: center;




  }

  .aside{
    line-height: 1.3em;

    text-align: center;
display: flex;
    flex-direction: column;
justify-content: center;
align-items: center;

color: rgb(49, 47, 54);
text-transform: uppercase;
  }

  @media only screen and (max-width: 800px) {
display: block;
.intro-top {
  padding: 0;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
flex-direction: column-reverse;

}


  }
`;

export default BannerWrapper;
