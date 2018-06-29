import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { ParallaxProvider } from 'react-scroll-parallax';

import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <ParallaxProvider>
    <Router>
      <App />
    </Router>
  </ParallaxProvider>,
  document.getElementById('root')
);
registerServiceWorker();
