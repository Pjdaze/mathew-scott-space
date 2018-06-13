import styled from 'styled-components';

const IntroWrapper = styled.div`
  .intro-bio {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 100px 400px 400px;
    h1 {
      grid-column-start: 2;
    }
    img {
      width: 100%;
      min-width: 200px;
    }

    .top-feed-img {
      grid-row-start: 2;
      display: flex;
      grid-column-start: span 2;
    }

    .bottom-feed-img {
      grid-row-start: 3;
      display: flex;
      grid-column-start: span 2;
    }
    width: 95%;
    max-width: 800px;
    margin: 0 auto;

    font-family: 'Exo 2', sans-serif;
    font-size: 300;
    line-height: 1.5em;
    font-weight: 300;
  }
  @media only screen and (min-width: 800px) {
    .bottom-feed-img,
    .top-feed-img {
    }
  }
`;

export default IntroWrapper;
