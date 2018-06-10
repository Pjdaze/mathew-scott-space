import React from 'react';
import styled from 'styled-components';
import Fab8 from '../../images/fab8.png';
const BannerWrapper = styled.div`
  overflow: hidden;
  font-family: 'Titillium Web', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;

  .banner-img {
    width: 250px;
    img {
      width: 100%;
      -moz-transform: scaleX(-1);
      -o-transform: scaleX(-1);
      -webkit-transform: scaleX(-1);
      transform: scaleX(-1);
      filter: FlipH;
      -ms-filter: 'FlipH';
    }
  }
`;

export default BannerWrapper;
