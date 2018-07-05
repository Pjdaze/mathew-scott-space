import React from 'react';
import IntroWrapper from './containers/IntroWrapper';
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
      'https://api.instagram.com/v1/users/self/media/recent/?access_token=13132063.4e71cbd.23b5e548ad6646999cad4803bb8f938a&count=4';

    fetch(url)
      .then(turnMe => turnMe.json())
      .then(res => {
        this.setState({
          feed: [...res.data]
        });
        console.log(res);
      });
  }

  render() {
    const { feed } = this.state;

    return (
      <IntroWrapper className="latest">
        <div className="latest-h2">
          <h2>Latest</h2>
        </div>
        {!feed.length ? 'loading...' : <div className="feed">{feed.map(x => <Story x={x} />)}</div>}
      </IntroWrapper>
    );
  }
}
export default Intro;
