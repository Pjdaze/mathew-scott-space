import styled from 'styled-components';
import Fab23 from '../../images/fab23.png';
const HomeWrapper = styled.div`
  min-height: 100%;
  overflow: hidden;
  position: relative;

  .me {
    display: flex;

    flex-direction: column;
    align-items: center;

    height: 100vh;
    position: relative;
    background: #fff;
    overflow: hidden;
  }

  .me:before {
    content: ' ';
    display: block;
    border-radius: 50%;

    width: 600px;
    height: 600px;
    z-index: 5;
    opacity: 0.8;
    background-image: url(${Fab23});
    background-repeat: no-repeat;
    background-position: center;
    -ms-background-size: contain;
    -o-background-size: contain;
    -moz-background-size: contain;
    -webkit-background-size: contain;
    background-size: contain;

    background-attachment: fixed;
  }
  @media only screen and (min-width) {
    .me {
      background-size: auto;
    }
  }
`;

export default HomeWrapper;

//background: url(${Fab23});
//display: flex;
//flex-direction: column;
//justify-content: center;
//align-items: center;
//height: 100vh;
//padding-top: 100px;
//background-size: contain;
//background-repeat: no-repeat;
//background-position: center;
//z-index: -1;
