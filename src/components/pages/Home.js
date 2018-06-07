import React from 'react';
import styled from 'styled-components';
import HomeWrapper from '../containers/HomeWrapper';
import BannerWrapper from '../containers/BannerWrapper';
import Header from '../containers/HeaderWrapper';
import Intro from '../Intro';
import Footer from '../Footer';

class Home extends React.Component {
  render() {
    return (
      <HomeWrapper>
        <Header />
        <BannerWrapper />

        <Intro />

        <Footer />
      </HomeWrapper>
    );
  }
}

export default Home;
