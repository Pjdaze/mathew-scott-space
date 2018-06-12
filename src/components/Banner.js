import React from 'react';
import BannerWrapper from './containers/BannerWrapper';
import Fab8 from '../images/fab8.png';
import Collage from '../images/collage1.jpg';
const Banner = () => (
  <BannerWrapper>
    <div className="intro-top">
      <div className="banner-h1">
        <h1>
          FABIAN<span className="banner-z">Z</span>VON
        </h1>
      </div>
      <div className="banner-img">
        <img src={Fab8} alt="fabian" />
      </div>
    </div>

    <div className="aside">
      <p className="one slideInRight">Executive Producer</p>
      <p className="two animatedLeft">Creartor</p>
      <p className="three animatedRight">Lider</p>
      <p className="four animatedLeft">Futurist</p>
    </div>
  </BannerWrapper>
);

export default Banner;
