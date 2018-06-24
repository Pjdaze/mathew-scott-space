import React from 'react';
import FakeApi1 from '../images/fab10.png';
import FakeApi2 from '../images/fab6.jpg';
import FakeApi3 from '../images/fab4.jpg';
import FakeApi4 from '../images/fab2.jpg';
import IntroWrapper from './containers/IntroWrapper';
import axios from 'axios';
import Story from './Story';

class Intro extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      feed: {}
    };
  }
  componentDidMount() {
    const url =
      'https://newsapi.org/v2/top-headlines?sources=buzzfeed&apiKey=baef82e953b84080b594b7dffb69286c';
    axios.get(url).then(res => {
      this.setState({
        feed: [...res.data.articles]
      });
      console.log(res.data);
    });
  }

  render() {
    const { feed } = this.state;

    console.log(feed);

    return (
      <IntroWrapper className="flex-center">
        <h1>{!feed.length ? 'Loading...' : feed.map((x, i) => <Story x={x} />)}</h1>
      </IntroWrapper>
    );
  }
}

export default Intro;
