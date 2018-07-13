import React from 'react';
import Fab23 from '../../images/fab23.png';
import HomeWrapper from '../containers/HomeWrapper';
import Banner from '../Banner';
import { Parallax } from 'react-scroll-parallax';
import SocialWrapper from '../containers/SocialWapper';
import Latest from '../Latest';

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
        <Latest />

        <div className="flex me" />

        <SocialWrapper>Hello</SocialWrapper>
      </HomeWrapper>
    );
  }
}

export default Home;
