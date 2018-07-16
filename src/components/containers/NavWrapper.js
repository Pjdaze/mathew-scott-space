import styled from 'styled-components';

const NavWrapper = styled.nav`

    position: fixed;
    right: 0;
    margin: 0;
    padding: 0;
    overflow-x: scroll;
    width: 0px;

  z-index: 5;


  color: #333;
width: 100%;

background-color: #fff;
visibility: hidden;
transition: opacity 0.3s ease-in-out, visibility 0.2s ease-in-out;
opacity: 0.1;
  &.open {

transition: opacity 0.2s ease-in-out, visibility 0.1s ease-in-out;
visibility: visible;
opacity: 1;



  }
  .menu-h1{
    text-align: center;

   z-index: 100;
font-weight: 600;
font-size: calc(1.6em + 0.6vw);
&:hover {
        color: #222;


      transition: all 135ms ease-in-out;
}
}


  li {
    z-index: 100;
    display: block;
    font-family: 'Titillium Web', sans-serif;

    font-weight: 300;
    color: #222;

    a {
      z-index: 100;

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


 ul {
visibility: hidden;
transition: all ease-in-out;
height: 0;
opacity: 0;


padding-top: 2em;


      &.open {
        transition: opacity 0.3s ease-in-out, visibility 0.2s ease-in-out;
        opacity: 1;
        visibility: visible;

height: 100vh;

     
      }
    }
    li {

padding: 30px;
      font-size: 1.5em;
text-transform: uppercase;

      text-align: center;



      a {
        z-index: 200;
  
width: 100%;


        color: #444;
        font-family: 'Oswald', sans-serif;
         padding: 40px;
        text-transform: uppercase;
        letter-spacing: 8em;
        zoom: 0.1;
        &:hover{

        }
        &.open {
        transition: opacity 0.5s ease-in-out, letter-spacing 0.4s ease-in-out, zoom 0.3s linear;
        opacity: 1;
        visibility: visible;
        letter-spacing: 0.3em;
        zoom: 0;

height: 100vh;

     
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
    @keyframes mymove {
    from {zoom: -10%;}
    to {zoom: 0%;}
}

/* Standard syntax */

  }


  .social-nav {
margin: 45px  auto 0 auto;
z-index: 10;
  width: 90%;
  max-width: 250px;

z-index: 200;

     display: flex;
     justify-content: space-around;
     align-items: center;
     text-align: center;


.fa , .fab, .fas{
  z-index: 20;
      transition: all 0.1s ease-in-out;
      color: #444;
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
