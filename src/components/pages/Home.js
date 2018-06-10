import React from 'react';

import HomeWrapper from '../containers/HomeWrapper';
import Banner from '../Banner';

import Intro from '../Intro';

class Home extends React.Component {
  render() {
    return (
      <HomeWrapper>
        <Banner />

        <Intro />
      </HomeWrapper>
    );
  }
}

export default Home;
