import styled from 'styled-components';

const IntroWrapper = styled.div`
  height: 100vh;
  overflow: hidden;
  text-align: center;
  margin: 0 auto;

  background-size: cover;
  &::after {
    filter: blur(2px);
  }

  .feed {
    display: grid;
    grid-template-columns: minmax(150px, 200px) minmax(150px, 200px);
    grid-template-rows: 80px 80px;
    grid-gap: 6px 6px;
  }
  .story {
    margin: 0 auto;
    background-color: #222;
    video {
      width: 100%;
      max-width: 200px;
      height: 80px;
      margin: 0 0 6px 6px;
      vertical-align: middle;
      -webkit-box-shadow: 0 15px 10px #777;
      -moz-box-shadow: 0 15px 10px #777;
      box-shadow: 0 7px 10px #777;
    }

    img {
      width: 100%;
      max-width: 200px;
      height: 80px;
      margin: 0 0 6px 6px;
      vertical-align: middle;
      -webkit-box-shadow: 0 15px 10px #777;
      -moz-box-shadow: 0 15px 10px #777;
      box-shadow: 0 7px 10px #777;
    }
  }
`;

export default IntroWrapper;
