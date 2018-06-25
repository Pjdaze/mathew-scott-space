import styled from 'styled-components';

const IntroWrapper = styled.div`
  width: 95%;
  max-width: 1200px;
  text-align: center;
  font-size: calc(5px + 0.2vw);
  margin: 0 auto;
  padding: 25px;
  display: grid;
  grid-template-columns: 380px 380px;
  grid-template-rows: auto auto;
  justify-content: center;
  align-items: center;

  .story {
    margin: 0 auto;
    h1,
    p {
      width: 100%;
    }
    img {
      display: block;
      max-width: 100%;
      min-width: 380px;
      height: 325px;
    }
  }
`;

export default IntroWrapper;
