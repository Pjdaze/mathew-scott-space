import React from 'react';
import BannerWrapper from './containers/BannerWrapper';
import Fab8 from '../images/fab8.png';
const Banner = () => (
  <BannerWrapper>
    <div className="banner-img">
      <img src={Fab8} alt="fabian" />
    </div>
  </BannerWrapper>
);

export default Banner;
