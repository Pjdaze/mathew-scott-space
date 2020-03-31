import React from 'react';

import Fab22 from '../images/MathewHero.png';

import { Parallax } from 'react-scroll-parallax';

import BannerWrapper from './containers/BannerWrapper';
const ParallaxImage = props => (
  <Parallax className="banner-image" offsetYMax={20} offsetYMin={-40} slowerScrollRate tag="figure">
    <img src={Fab22} />
  </Parallax>
);

class Banner extends React.Component {
  render() {
    return (
      <BannerWrapper>
        <div className="banner-top">
          <div className="animated rubberBand banner-h1">
            <h1>
              Mathew<span className="banner-z">S</span>cott
            </h1>
          </div>
          <div className="aside">
            <p className="animated four slideInLeft">Guitar Player</p>
            <p className="animated one slideInRight">Start Lover</p>
            <p className="animated two slideInLeft">Creartor</p>
          </div>
        </div>
        <Parallax>
          <ParallaxImage />
        </Parallax>
      </BannerWrapper>
    );
  }
}

export default Banner;
