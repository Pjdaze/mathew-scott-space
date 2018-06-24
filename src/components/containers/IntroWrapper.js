import styled from 'styled-components';

const IntroWrapper = styled.div`
  width: 95%;
  max-width: 1200px;
  text-align: center;
  font-size: calc(5px + 0.2vw);
  margin: 0 auto;
  padding: 25px;
  .story {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 2.3em;
    width: 90%;
    margin: 0 auto;
    box-shadow: 0 0 10px #222;
    h1,
    p {
      width: 100%;
    }
    img {
      width: 400px;
    }
  }
`;

export default IntroWrapper;
