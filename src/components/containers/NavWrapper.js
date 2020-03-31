import styled from 'styled-components';

const NavWrapper = styled.nav`

    position: fixed;
    right: 0;
    margin: 0;
    padding: 0;
height: 100vh;
    @media only screen and (max-height: 590px){
height: 100%;
overflow: auto;
    }

  z-index: 5;


  color: #222;
width: 100%;


background-color: #222;





visibility: hidden;
transition: opacity 0.2s ease-in-out, visibility 0.2s ease-in-out;
opacity: 0.1;
  &.open {


visibility: visible;
opacity: 1;



  }

.logox {




  .menu-h1{
    width: 100%;

   z-index: 100;
font-weight: 600;

&:hover {
        color: #fff;


      transition: all 135ms ease-in-out;
}
@media only screen and (max-width: 380px){
  margin: 0 20% 0 0;
  padding: 0;
}

}
}



  li {
    z-index: 100;
    display: block;
    font-family: 'Titillium Web', sans-serif;

    font-weight: 300;
    color: #fff;

    a {
      z-index: 100;

      color: #fff;
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
transition: opacity 0.3s ease-in-out, visibility 0.2s ease-in-out;
height: 100vh;
opacity: 0;


padding-top: 2em;

@media only screen and (max-width: 480px){
  height: 100%;

}
      &.open {

        opacity: 1;
        visibility: visible;




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


        color: #FFF;
        font-family: 'Oswald', sans-serif;
         padding: 40px;
        text-transform: uppercase;
        letter-spacing: 8em;
        transition: opacity 0.5s ease-in-out, letter-spacing 0.3s ease-in-out;
        &:hover{

        }
        &.open {

        opacity: 1;
        visibility: visible;
        letter-spacing: 0.1em;


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


/* Standard syntax */

  }


  .social-nav {
transition: visibility 0.2s ease-in-out, line-height 0.3s linear;
height: 40%;
margin: -35px auto;
z-index: 10;
  width: 90%;
  max-width: 250px;
line-height: -50px;
z-index: 200;

     display: flex;
     justify-content: space-around;
     align-items: center;
     text-align: center;

&.open {

  line-height: 1em;
  text-shadow: 1px 1px #ccc;


}


.fa , .fab, .fas{
  z-index: 20;
      transition: all 0.1s ease-in-out;
      color: #fff;
       font-size: calc(20px + 0.5vw);
       padding: 8px;
      &:hover {
        color: #eee;
        font-weight: bold;
transform: scale(1.2);
      }
    }



  }


`;

export default NavWrapper;
