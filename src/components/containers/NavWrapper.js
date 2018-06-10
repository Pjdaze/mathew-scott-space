import styled from 'styled-components';

const NavWrapper = styled.nav`


  color: #000;
  width: 0;
  transition: all 0.2s ease-in-out;
background-color: #fff;
  .logox {
    margin-left: auto;
    h1 {
      font-size: 1.2em;

    }
  }
  &.open {
    width: 100vw;

transition: all 0.2s cubic-bezier(0.19, 1, 0.22, 1);
        

  }



  li {
    display: block;
    font-family: 'Titillium Web', sans-serif;
padding: 15px;
    font-weight: 300;
    color: #222;

    a {

      color: #222;
    }
    &.activex {
      color: #fcfaea;
      font-weight: bold;
    }
    &:hover {
      font-weight: bold;
      zoom: 1.01;
      transition: all 180ms ease-in-out;
    }

    &:first-child {

      margin-right: auto;
      margin-top: -20px;
      zoom: 1;
      &:hover {
        text-shadow: 0 0 50px #f2f2f2;
      }
    }

    &:nth-child(3) {
      margin-left: 20px;
    }

    &:nth-child(4) {
      display: none;
    }
  }



    position: fixed;
    right: 0;
    margin: 0;
    padding: 0;
    overflow: hidden;
    width: 0px;

    ul {
      display: flex;

      flex-direction: column;
      height: 100vh;
    }
    li {


      font-size: 1.5em;

      width: 100%;
      text-align: center;
      margin-top: 28px;


      a {
width: 100%;


        color: #222;
        font-family: 'Monoton', sans-serif;
         padding: 40px;
        text-transform: uppercase;
        &:hover{

        }
      }

      &:nth-child(3) {
        margin-left: 0;
        zoom: 1;

      }
      &:nth-child(2) {
        zoom: 1;
        &:hover {
          text-shadow: 0 0 50px #f2f2f2;
        }
      }
      &:last-child {
        zoom: 1;
      }

      &:nth-child(4) {
        display: block;
        font-size: 14px;

        zoom: 1;
      }
    }
  }
  //end of query

  .social-nav {
margin: 45px  auto 0 auto;

  width: 90%;
  max-width: 250px;



     display: flex;
     justify-content: space-around;
     align-items: center;
     text-align: center;


.fa , .fab, .fas{
      transition: all 0.1s ease-in-out;
      color: #222;
       font-size: calc(20px + 0.5vw);
      &:hover {
        color: #888888;
      }
    }



  }
`;

export default NavWrapper;
