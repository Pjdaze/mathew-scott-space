import React from 'react';
import styled from 'styled-components';
import './App.css';

import Routes from './Routes';

const MainLayout = styled.div`
  height: 50vh;

  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    text-align: center;
  }
`;

class App extends React.Component {
  render() {
    return (
      <MainLayout>
        <Routes />
      </MainLayout>
    );
  }
}

export default App;
