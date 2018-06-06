import React from 'react';
import styled from 'styled-components';
import Fab1 from '../../images/fab4.jpg';
const BannerWrapper = styled.div`
  width: 90%;
  max-width: 900px;
  margin: 0 auto;
  height: 100vh;
  font-family: 'Titillium Web', sans-serif;
  background-image: url(${Fab1});

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export default BannerWrapper;
