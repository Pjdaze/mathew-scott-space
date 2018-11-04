import React from 'react';
import LatestWrapper from './containers/LatestWrapper';
import Story from './Story';
import InstaFab from '../images/fab9.jpg';
import axios from 'axios';

class Latest extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      feed: {}
    };
  }

  componentDidMount() {
    const url =
      'https://api.instagram.com/v1/users/self/media/recent/?access_token=13132063.4e71cbd.23b5e548ad6646999cad4803bb8f938a&count=20';

    axios.get(url).then(res => {
      this.setState({
        feed: [...res.data.data]
      });

      console.log(res.data);
    });
  }

  render() {
    const { feed } = this.state;

    return (
      <div className="latest">
        <LatestWrapper>
          <div className="latest-h2">
            <h2>I'm Always Up For Some Fun</h2>

            {!feed.length ? (
              `I'm Always Up To A Great Adventure...
                             ____________________
                         more dates comming soon
              `
            ) : (
              <div key="item.new" className="newAdd">
                {feed.map((item, i) => (
                  <span>
                    <br />
                  </span>
                ))}
              </div>
            )}
          </div>
          {!feed.length ? (
            <img src={InstaFab} className="insta-fab" alt="instagram fabian" />
          ) : (
            <div className="feed">{feed.map(x => <Story key={x.story} x={x} />)}</div>
          )}
        </LatestWrapper>
      </div>
    );
  }
}
export default Latest;
