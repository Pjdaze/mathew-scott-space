import styled from 'styled-components';
import Fab23 from '../../images/fab23.png';
const HomeWrapper = styled.div`
  min-height: 100%;
  overflow: hidden;
  position: relative;
  background-color: #fff;
.latest {



height: 100vh;
  min-height: 500px;
width: 100%;



}
  .me {
    margin: 200px auto 200px auto;
    display: flex;

    flex-direction: column;
    align-items: center;

    height: 100vh;
    position: relative;

    overflow: hidden;

    display: block;
    border-radius: 50%;

    width: 600px;
    height: 600px;
    z-index: 5;

    background-image: url(${Fab23});
    background-size: contain;
    background-position: center 0px;
    background-repeat: no-repeat;

    background-attachment: fixed;
    @media only screen and (max-width: 700px) {
      background-size: contain;
      width: 400px;
      height: 400px;
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
