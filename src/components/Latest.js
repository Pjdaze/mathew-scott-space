import React from 'react';
import LatestWrapper from './containers/LatestWrapper';
import Story from './Story';

class Latest extends React.Component {
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
      .then(resp => resp.json())
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
      <LatestWrapper className="latest">
        <div className="latest-h2">
          <h2>Latest</h2>
          {!feed.length ? (
            'loading...'
          ) : (
            <div className="chat">
              {feed.map(x => (
                <div className="messages">
                  <ul>
                    <li>{x.caption.text}</li>
                    <br />
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
        {!feed.length ? 'loading...' : <div className="feed">{feed.map(x => <Story x={x} />)}</div>}
      </LatestWrapper>
    );
  }
}
export default Latest;
