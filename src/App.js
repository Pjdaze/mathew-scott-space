import React from 'react';
import styled from 'styled-components';
import './App.css';

import Routes from './Routes';
import Header from './components/Header';
import Footer from './components/Footer';

const MainLayout = styled.div`
  height: 100vh;
`;

class App extends React.Component {
  render() {
    return (
      <MainLayout>
        <Header />
        <Routes />
        <Footer />
      </MainLayout>
    );
  }
}

export default App;
