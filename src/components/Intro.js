import React from 'react';
import FakeApi1 from '../images/fab10.png';
import FakeApi2 from '../images/fab6.jpg';
import FakeApi3 from '../images/fab4.jpg';
import FakeApi4 from '../images/fab2.jpg';
import IntroWrapper from './containers/IntroWrapper';

class Intro extends React.Component {
  state = {
    feed: {}
  };

  render() {
    return (
      <IntroWrapper className="flex-center">
        <section className="intro-bio">
          <h2>What's Happening</h2>
          <div className="top-feed-img">
            <img src={FakeApi1} alt="feed-img1" />
            <img src={FakeApi2} alt="feed-img2" />
          </div>

          <div className="bottom-feed-img">
            <img src={FakeApi3} alt="feed-img3" />
            <img src={FakeApi4} alt="feed-img4" />
          </div>
        </section>
      </IntroWrapper>
    );
  }
}

export default Intro;
