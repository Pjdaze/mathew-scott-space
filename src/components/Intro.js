import React from 'react';
import IntroWrapper from './containers/IntroWrapper';
import StarsWrapper from './containers/StarsWrapper';

const Intro = props => {
  return (
    <IntroWrapper>
      <StarsWrapper>
        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />
        <div id="title">
          <span>Hi</span>
          <br />
          <span>I'm Fabian</span>
        </div>
      </StarsWrapper>
    </IntroWrapper>
  );
};
export default Intro;
