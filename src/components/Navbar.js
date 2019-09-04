import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import styled from 'styled-components'

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-primary navbar-dark px-sm-5">
        {/*https://www.iconfinder.com/icons/1243689/call_phone_icon
          Creative Commons (Attribution 3.0 Unported);
          https://www.iconfinder.com/Makoto_msk 
        */}
        <Link to='/'>
          <img src={logo} alt="logo loja" className="Navbar-brand" />
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to='/' className="nav-link">Products</Link>
          </li>
        </ul>
        <Link to='/cart' className="ml-auto">
          <ButtonC>
            <span className="mr-2"><i className="fas fa-cart-plus" /></span>My Cart
          </ButtonC>
        </Link>
      </nav>
    )
  }
}

const ButtonC = styled.button`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: transparent;
  color: orange;
  border: 2px solid white;
  font-size:1.4rem;
`