import React from 'react';
import IntroWrapper from './containers/IntroWrapper';
import StarsWrapper from './containers/StarsWrapper';
import Latest from './Latest';
import { Parallax } from 'react-scroll-parallax';

const ParallaxStars = props => (
  <Parallax
    className="banner-image"
    offsetYMax={20}
    offsetYMin={-20}
    slowerScrollRate
    tag="figure"
  />
);
const Intro = props => {
  return (
    <IntroWrapper>
      <StarsWrapper>
        <div className="latest">
          <Latest />
        </div>
        <h1>Hello</h1>
        <div className="stars" />
        <div className="twinkling" />
        <div className="clouds" />
      </StarsWrapper>
    </IntroWrapper>
  );
};
export default Intro;
