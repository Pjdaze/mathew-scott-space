import React from 'react';

import Fab22 from '../images/fab8.png';

import { Parallax } from 'react-scroll-parallax';

import BannerWrapper from './containers/BannerWrapper';
const ParallaxImage = props => (
  <Parallax
    className="banner-image"
    offsetYMax={300}
    offsetYMin={-150}
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
        <div className="banner-top">
          <div className="animated rubberBand banner-h1">
            <h1>
              FABIAN<span className="banner-z">Z</span>VON
            </h1>
          </div>
          <div className="aside">
            <p className="animated one slideInRight">Executive Producer</p>
            <p className="animated two slideInLeft">Creartor</p>

            <p className="animated four slideInLeft">Futurist</p>
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
