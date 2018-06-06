import React from 'react';
import styled from 'styled-components';
import HomeWrapper from '../containers/HomeWrapper';
import BannerWrapper from '../containers/BannerWrapper';
import Header from '../containers/HeaderWrapper';

class Home extends React.Component {
  render() {
    return (
      <HomeWrapper>
        <Header />
        <BannerWrapper />
      </HomeWrapper>
    );
  }
}

export default Home;
