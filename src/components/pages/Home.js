import React from 'react';
import Fab23 from '../../images/fab23.png';
import HomeWrapper from '../containers/HomeWrapper';
import Banner from '../Banner';

import Latest from '../Latest';
import { Parallax } from 'react-scroll-parallax';
import SocialWrapper from '../containers/SocialWapper';
import Intro from '../Intro';
const ParallaxImage2 = props => (
  <Parallax
    className="banner-image"
    offsetYMax={300}
    offsetYMin={-150}
    slowerScrollRate
    tag="figure"
  >
    <img src={Fab23} />
  </Parallax>
);

class Home extends React.Component {
  render() {
    return (
      <HomeWrapper>
        <Banner />
        <Intro />
        <Latest />
        <Parallax>
          <div className="flex me" />
        </Parallax>
        <SocialWrapper>Hello</SocialWrapper>
      </HomeWrapper>
    );
  }
}

export default Home;
