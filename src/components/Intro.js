import React from 'react';
import styled from 'styled-components';
import Fab6 from '../images/fab6.jpg';
import Fab1 from '../images/fab1.jpg';
import Fab7 from '../images/fac7.jpg';

import IntroWrapper from './containers/IntroWrapper';

const Intro = () => {
  return (
    <IntroWrapper className="flex-center">
      <div className="flex-center intro-top">
        <p className="one intro-animatedRight">Executive Producer</p>
        <p className="two intro-animatedLeft">Creartor</p>
        <p className="three intro-animatedRight">Lider</p>
        <p className="four intro-animatedLeft">Futurist</p>
      </div>
      <section className="intro-bio">
        <p>
          My name is Fabian Q, i'm awesome because i know Mother Monster I like to spend my free
          time visualizing new ideas that i can apply to my daily work like and im loving every
          moment so far i love Art, design music and moshrroms, i hate other cats and im in love
          with showbiz lets see maybe one day.
        </p>

        <div className="intro-images">
          <img src={Fab6} alt="fabian with patrick starrr" />
          <img src={Fab1} alt="fabian with patrick starrr" />
          <img src={Fab7} alt="fabian with patrick starrr" />
        </div>
      </section>
    </IntroWrapper>
  );
};

export default Intro;
