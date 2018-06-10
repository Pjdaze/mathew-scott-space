import styled from 'styled-components';

const IntroWrapper = styled.div`
  border-bottom: 1px solid #ccc;

  .intro-top {
    p {
      font-size: 1.5em;
      line-height: 1.8em;
      text-transform: uppercase;
      animation-duration: 0.3s;
    }
  }
  .intro-bio {
    width: 95%;
    max-width: 600px;
    padding: 50px;
    font-family: 'Open Sans', sans-serif;
    font-size: 300;
    line-height: 1.5em;
  }
  .intro-images {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 300px;
    margin: 0 auto;
    width: 95%;
    max-width: 700px;
    img {
      width: 400px;
      height: 270px;
    }
  }

  .two {
    animation-delay: 0.8s;
  }
  .three {
    animation-delay: 1.1s;
  }
  .four {
    animation-delay: 1.3s;
  }
`;

export default IntroWrapper;
