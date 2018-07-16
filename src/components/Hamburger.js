import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Nav from './Nav';
import Route from '../Routes';

const Hamburger = styled.div`
  .line-wrap {
    width: 25px;
    height: 20px;
    position: fixed;
    top: 30px;
    right: 35px;
    z-index: 1200;
  }

  width: 100%;

  position: fixed;
  height: 0;
  top: 0;
  right: 0;
  z-index: 1000;

  .line {
    position: absolute;
    display: block;

    height: 3px;
    width: 100%;
    background: #222;

    opacity: 1;
    left: 0;
    box-shadow: -1px 1px 2px #222;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: 0.2s ease-in-out;
    -moz-transition: 0.2s ease-in-out;
    -o-transition: 0.2s ease-in-out;
    transition: 0.2s ease-in-out;
    z-index: 50;
    &:nth-child(1) {
      top: 0px;
      -webkit-transform-origin: right center;
      -moz-transform-origin: right center;
      -o-transform-origin: right center;
      transform-origin: right center;
    }

    &:nth-child(2) {
      top: 8px;
      -webkit-transform-origin: right center;
      -moz-transform-origin: right center;
      -o-transform-origin: right center;
      transform-origin: right center;
    }
    &:nth-child(3) {
      top: 16px;
      -webkit-transform-origin: right center;
      -moz-transform-origin: right center;
      -o-transform-origin: right center;
      transform-origin: right center;
    }
  }

  &.menuActive .line:nth-child(1) {
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
    top: -3px;
    left: 8px;
    background-color: #222;
  }

  &.menuActive .line:nth-child(2) {
    width: 0%;
    opacity: 0;
    background-color: #222;
  }

  &.menuActive .line:nth-child(3) {
    top: 16px;
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);

    left: 8px;
    background-color: #222;
  }

  @media only screen and (min-width: 800px) {
    .line-wrap {
      right: 100px;
      top: 35px;
    }
  }
`;

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.toggleMenu = this.toggleMenu.bind(this);

    this.state = {
      menuActive: false
    };

    console.log(this.state);
  }

  toggleMenu() {
    this.setState({ menuActive: !this.state.menuActive });

    console.log(this.state);
  }

  render() {
    const { menuActive } = this.state;

    return (
      <Hamburger className={(menuActive && 'menuActive') || 'open'} onClick={this.toggleMenu}>
        <div className="line-wrap">
          <span className="line" />
          <span className="line" />
          <span className="line" />
        </div>

        <Nav isOpen={menuActive} />
      </Hamburger>
    );
  }
}

export default () => <Menu />;
