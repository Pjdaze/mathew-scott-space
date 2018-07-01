import styled from 'styled-components';

const NavWrapper = styled.nav`


  z-index: 4;
  transition: all 0.3s cubic-bezier(0.6, 2, 0.23, 1) 0s;
  color: #222;
  width: 0;

background-color: #000;
opacity: 0.96;
  .logox {
    margin-left: auto;
  
  }
  &.open {
    width: 100vw;

transition: all  cubic-bezier(0.19, 1, 0.22, 1) 0.2s;

        

  }
  .menu-h1{
    text-align: center;

   z-index: 3;
font-weight: 600;
font-size: calc(1.6em + 0.6vw);
&:hover{
        color: #fff;

      transition: all 135ms ease-in-out;
}
}


  li {
    z-index: 4;
    display: block;
    font-family: 'Titillium Web', sans-serif;
padding: 15px;
    font-weight: 300;
    color: #222;

    a {
      z-index: 4;

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
height: 200px;
      margin-right: auto;
      margin-left: auto;
      margin-top: -20px;

      width: 400px;
padding: 0;
      zoom: 1;
      &:hover {
        text-shadow: 0 0 50px #fff;
      }
    }

    &:nth-child(3) {
      margin-left: 20px;
    }

    &:nth-child(4) {
      display: none;
    }
  }
.z {
  font-size: 1.8em;
}


    position: fixed;
    right: 0;
    margin: 0;
    padding: 0;
    overflow: hidden;
    width: 0px;

    ul {
z-index: 7;
      display: flex;

      flex-direction: column;
      height: 100vh;
    }
    li {

z-index: 8;
      font-size: 1.5em;
text-transform: uppercase;

      text-align: center;
      margin-top: 28px;


      a {
        z-index: 9;
  
width: 100%;


        color: #fff;
        font-family: 'Oswald', sans-serif;
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
z-index: 10;
  width: 90%;
  max-width: 250px;



     display: flex;
     justify-content: space-around;
     align-items: center;
     text-align: center;


.fa , .fab, .fas{
  z-index: 20;
      transition: all 0.1s ease-in-out;
      color: #ccc;
       font-size: calc(20px + 0.5vw);
       padding: 8px;
      &:hover {
        color: #fff;
        font-weight: bold;
      }
    }



  }
`;

export default NavWrapper;
