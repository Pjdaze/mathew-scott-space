import React from 'react';

import Fab22 from '../images/fab22.png';
import { Parallax } from 'react-scroll-parallax';

import BannerWrapper from './containers/BannerWrapper';
const ParallaxImage = () => (
  <Parallax
    className="banner-image"
    offsetYMax={300}
    offsetYMin={-80}
    slowerScrollRate
    tag="figure"
  >
    <img src={Fab22} />
  </Parallax>
);

class Banner extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <BannerWrapper>
        <div className="intro-top">
          <div className="banner-h1">
            <h1>
              FABIAN<span className="banner-z">Z</span>VON
            </h1>
          </div>
        </div>
        <Parallax>
          <ParallaxImage />
        </Parallax>
        <div className="aside">
          <p className="one slideInRight">Executive Producer</p>
          <p className="two animatedLeft">Creartor</p>

          <p className="four animatedLeft">Futurist</p>
        </div>
      </BannerWrapper>
    );
  }
}

export default Banner;
