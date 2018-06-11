import React from 'react';
import BannerWrapper from './containers/BannerWrapper';
import Fab8 from '../images/fab8.png';
import Collage from '../images/collage1.jpg';
const Banner = () => (
  <BannerWrapper>
    <div className="banner-img">
      <img src={Collage} alt="fabian1" />
    </div>
    <div className="banner-img">
      <img src={Fab8} alt="fabian" />
    </div>

    <div className="intro-top">
      <p className="one intro-animatedRight">Executive Producer</p>
      <p className="two intro-animatedLeft">Creartor</p>
      <p className="three intro-animatedRight">Lider</p>
      <p className="four intro-animatedLeft">Futurist</p>
    </div>
  </BannerWrapper>
);

export default Banner;
