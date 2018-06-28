import styled from 'styled-components';

const IntroWrapper = styled.div`
  width: 95%;
  max-width: 1200px;
  text-align: center;

  margin: 0 auto;
  padding: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .feed {
    display: grid;
    grid-template-columns: minmax(150px, 200px) minmax(150px, 200px);
  }
  .story {
    margin: 0 auto;
    width: 90%;
    max-width: 300px;
    -ms-flex: 50%; /* IE 10 */
    flex: 50%;

    img {
      width: 100%;

      margin: 0 0 6px 6px;
      vertical-align: middle;
    }
  }
`;

export default IntroWrapper;
