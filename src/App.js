import React from 'react';
import styled from 'styled-components';
import './App.css';
import Menu from './components/Hamburger';
import Routes from './Routes';
import Header from './components/Header';
import Footer from './components/Footer';
import Intro from './components/Intro';

const MainLayout = styled.div`
  height: 100vh;
`;

class App extends React.Component {
  render() {
    return (
      <MainLayout>
        <Menu />
        <Header />
        <Routes />
        <Footer />
        <Intro />
      </MainLayout>
    );
  }
}

export default App;
